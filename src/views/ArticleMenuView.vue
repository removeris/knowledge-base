<template>
    <div class="container">

        <div class="search-container">
            <img src="../assets/search.png" alt="search">
            <input v-model="inputText" id="search" type="text" placeholder="Search.." @keyup.enter="onEnterPressed" @focus="setFocused" @blur="setBlur">
        </div>

        <div id="error-msg" v-if="foundArticles.size === 0">
            No articles found..
        </div>
        
        <div class="entries-container" v-if="initial">
            <li class="search-entries" v-for="[title, link] in bestArticles" :key="link">
                <RouterLink :to="`/articles/${link}`">{{ title }}</RouterLink>
            </li>
        </div>

        <div class="entries-container" v-else>
            <li class="search-entries" v-for="[title, link] in foundArticles" :key="link">
                <RouterLink :to="`/articles/${link}`">{{ title }}</RouterLink>
            </li>
        </div>
        
        <teleport to="body">
            <Transition name="page-slide" mode="out-in">
                <router-link id="creation" to="/article-creation">
                    <img src="../assets/add.png" alt="plus icon">
                </router-link>
            </Transition>
        </teleport>


    </div>
</template>

<script>
import axios from "axios";

const apiUrl = process.env.VUE_APP_API_BASE_URL;

export default {
    data() {
        return {
            focused: false,
            inputText: '',

            foundArticles: [],
            initial: true,
            bestArticles: {}
        }
    },
    mounted() {
        let shownArticles = new Map();

        shownArticles.set("Card Delivery Failed", "Card-Delivery-Failed");
        shownArticles.set("Bailiffs", "Bailiffs");
        shownArticles.set("Account and Card Deletion", "Account-and-Card-Deletion");
        this.bestArticles = shownArticles;
    },

    methods: {
        onEnterPressed() {
            if(this.inputText == '') {
                this.initial = true;
            }

            if(this.focused && this.inputText != '') {
                this.initial = false;
                this.submitSearch();
            }
        },

        async submitSearch() {
            try {
                const response = await axios.post(`${apiUrl}/api/search`, {
                    text: this.inputText
                });
                console.log('Response from server:', response.data);

                this.createEntries(response.data.selectedItems);

            } catch (error) {
                console.error('Error sending data to server', error);
            }
        },
        
        setFocused() {
            this.focused = true;
        },

        setBlur() {
            this.focused = false;
        },

        createEntries(articles) {

            let formatedArticles = new Map();
            
            articles.forEach(element => {
                formatedArticles.set(element.slice(0, -5).replaceAll('-', ' '), element.slice(0, -5));    
            });

            this.foundArticles = formatedArticles;

            console.log(this.foundArticles);

        }

    }
}

</script>

<style scoped>

    .container {
        padding: 30px;
        height: 600px;
    }

    .search-container {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-bottom: 70px;
    }

    #entries-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .search-container img {
        margin-right: -30px;
        z-index: 1;
        width: 16px;
        height: 16px;
    }

    input[type="text"] {
        height: 20px;
        width: 300px;
        background-color: rgba(245, 245, 245);
        border: 0.5px solid rgba(0, 0, 0, 0.3);
        border-radius: 30px;
        padding: 5px 15px 5px 40px;
        font-weight: bold;
    }

    a#creation {
        height: 64px;
        width: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 20px;
        right: 20px;
        border: none;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.4);
        
    }

    a#creation:hover {
        background-color: rgba(0, 0, 0, 0.15);
    }

    li.search-entries {
        text-align: left;
        list-style: none;
        margin-bottom: 15px;
        border-bottom: 0.3px solid rgba(0, 0, 0, 0.15);
    }

    .search-entries a {
        text-decoration: none;
        font-size: 24px;
        font-weight: bold;
        color: rgb(53, 69, 82);
        transition: color 0.3s ease-in-out;
    }

    .search-entries a:hover {
        color: rgba(53, 69, 82, 0.8);
    }

    #error-msg {
        text-align: left;
        margin-top: 70px;
    }
</style>