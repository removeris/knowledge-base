<template>
<img :src="qrCodeImage" v-if="qrCodeImage">
</template>

<script>
import QRCode from "qrcode";

export default {
    data() {
        return {
            qrCodeImage: ""
        };
    },
    computed: {
        qrText() {
            return process.env.VUE_APP_API_BASE_URL + "/api/login?" + this.generateUniqueID();
        }
    },
    methods: {
        generateUniqueID() {
            return Math.floor(Math.random() * 90000) + 10000;
        },
        async generateQRCode() {
            try {
                this.qrCodeImage = await QRCode.toDataURL(this.qrText, {
                    margin: 2,
                    quality: 1
                });
            } catch (err) {
                console.error("QR Code generation failed:", err);
            }
        }
    },
    mounted() {
        this.generateQRCode(); 
    },
};
</script>