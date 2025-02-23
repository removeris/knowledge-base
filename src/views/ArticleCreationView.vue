<template>
    <div>

        <RouterLink to="/articles">
            <img src="../assets/arrow-small-left.png" alt="back">
        </RouterLink>
        
        <ArticleCreation />
    </div>
</template>

<script>

import ArticleCreation from "@/components/ArticleCreation.vue"

export default {
    name: 'articleCreationView',
    components: { ArticleCreation }
}

</script>

<style scoped>
    a {
        margin-right: 95%;
    }
</style>