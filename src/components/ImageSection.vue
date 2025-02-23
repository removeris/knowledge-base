<template>
    <div class="section">
        <div class="section-header">
            <h3>{{ title }}</h3>
            <button @click="toggleVisibility">
                <img :class="{ clicked: showCard }" src="../assets/angle-small-down.png" alt="show">
            </button>
        </div>

        <div class="cards" :class="{ expanded: showCard }">
            <img v-for="(image, index) in images" :key="index" :src="image" alt="image" loading="lazy" />
        </div>
    </div>
</template>

<script>

export default {

    name: 'ImageSection',

    data() {
        return {
            showCard: false
        }
    },
    props: {
        title: {
            type: String,
            required: true
        },
        images: {
            type: Array,
            required: true
        }
    },
    methods: {
        toggleVisibility() {
            this.showCard = !this.showCard
        }
    }

}

</script>

<style scoped>

    * {
        background-color: rgba(245, 245, 245);
    }

    /* Section */

    .section {
            padding-left: 40px;
    }

    .section-header {
        display: flex;
        gap: 6px;
        align-items: center;
    }
    button {
        border: none;
    }

    button img {
        transition: transform 0.3s ease-in-out;
    }
    .clicked {
        transform: rotate(-180deg);
    }

    /* Cards */

    .cards {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        align-items: flex-start;
        width: 95%;
        max-height: 0px; /* Initial height */
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.01);
        border-radius: 15px;
        transition: max-height 1.5s ease; /* Smooth transition for height change */
    }

    .cards.expanded {
        max-height: 1500px; /* Expanded height */
        padding: 10px;

    }

    .cards img {
        height: 250px;
        width: 150px;
        border-radius: 10px;
        display: none; /* Hide content initially */
    }

    .cards.expanded img {
    display: block; /* Show content when expanded */
    }

</style>