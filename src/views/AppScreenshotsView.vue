<template>
    
    <div v-if="isVisible" class="sections">
        <div class="header">
            <h2>App Screenshots</h2>
        </div>
        <div class="section-container">
            <ImageSection
                title="Main Screen"
                :images="mainScreenImages"
            />
            <ImageSection
                title="Card"
                :images="cardImages"
            />
        
            <ImageSection
                title="Outlet"
                :images="outletImages"
            />
        
            <ImageSection 
                title="Settings"
                :images="settingsImages"
            />
        
            <ImageSection
                title="Profile"
                :images="profileImages"
            />
        </div>
    </div>
</template>

<script>

import ImageSection from "../components/ImageSection.vue"


export default {

    components: { ImageSection },
    data() {
        return {

            isVisible: false,

            mainScreenImages:
            [
                require('../assets/screenshots/Main_Screen.jpg'),
                require('../assets/screenshots/Main_Add.jpg'),
                require('../assets/screenshots/Main_Send.jpg'),
                require('../assets/screenshots/Main_Send_SEPA.jpg')],
            cardImages:
            [
                require("../assets/screenshots/Card_Main.jpg"),
                require("../assets/screenshots/Login_Code.jpg")
            ],
            outletImages:
            [
                require("../assets/screenshots/Outlet.jpg")
            ],
            settingsImages:
            [
                require("../assets/screenshots/Settings_Main.jpg"),
                require("../assets/screenshots/Settings_Limits.jpg"),
                require("../assets/screenshots/Settings_Privacy.jpg"),
                require("../assets/screenshots/Settings_Signature.jpg"),
                require("../assets/screenshots/Settings_Legal.jpg"),
                require("../assets/screenshots/Settings_My_data.jpg"),
                require("../assets/screenshots/Settings_My_data2.jpg")
            ],
            profileImages:
            [
                require("../assets/screenshots/Profile_Main.jpg"),
                require("../assets/screenshots/Profile_Avatar.jpg"),
                require("../assets/screenshots/Profile_Phone.jpg"),
                require("../assets/screenshots/Profile_Email.jpg"),
                require("../assets/screenshots/Profile_Purpose.jpg"),
                require("../assets/screenshots/Profile_Income.jpg"),
                require("../assets/screenshots/Profile_PEP.jpg"),
                require("../assets/screenshots/Profile_TIN.jpg")
            ]
        }
    },
    mounted() {
        this.isVisible = true
    }
}

</script>

<style scoped>

    /* Page Header */
    
    * {
        background-color: rgba(245, 245, 245);
    }

    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2em;
    }
    
    h2 {
        padding-bottom: 10px;
        width: 10em;
        border-bottom: 2px solid rgba(0, 0, 0, 0.04)
    }

    .section-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

</style>