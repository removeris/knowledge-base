<template>
    <div>
      <div v-if="error">
        <p>{{ error }}</p>
      </div>
      <div v-else-if="article">

        <RouterLink to="/articles">
          <img src="../assets/arrow-small-left.png" alt="back">
        </RouterLink>

        <h1>{{ article.title }}</h1>
        <div v-html="article.content" class="article-content"></div>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>

<script>
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_BASE_URL;

export default {
    
    data() {
        return {
            article: {},
            error: null
        }
    },
    async created() {
        try {
            const articleId = this.$route.params.id;

            const response = await axios.get(`${apiUrl}/api/articles/${articleId}`);

            this.article = response.data;

            this.article.title = this.article.title.replaceAll('-', ' ');
        } catch (error) {
            console.error('Error fetching article:', error);
            this.error = 'Could not load the article.';
    }
    }
}


</script>

<style scoped>

.article-content {
    padding: 60px;
}

.article-content >>> * {
    text-align: left;
}

.article-content >>> ol {
  list-style-type: decimal;
  padding-left: 40px;
}

.article-content >>> p {
  margin-bottom: 0.5em;
}

a {
  margin-right: 95%;
}

  

</style>