<template>
    <div class="nav-container">
        <div class="nav-header">
            <img src="../assets/mytu-gray-logo.png" alt="mytu logo">
            <h3>Knowledge Base</h3>
        </div>
        <nav>
            <div class="links-top">
                <router-link to="/">
                    <img src="../assets/home.png" alt="home-logo">
                    <h4>Home</h4>
                </router-link>
                <router-link to="/articles">
                    <img src="../assets/page-icon.png" alt="page">
                    <h4>Articles</h4>
                </router-link>
                <router-link to="/screenshots">
                    <img src="@/assets/images.png" alt="image-icon">
                    <h4>Screenshots</h4>
                </router-link>
            </div>
            
            <div class="links-bottom">
                <router-link to="/change-log">
                    <img src="../assets/time-past.png" alt="changelog-logo">
                    <h4>Changelog</h4>
                </router-link>
                <router-link to="/login" @click="logout">
                    <img src="../assets/exit.png" alt="exit-logo">
                    <h4>Log out</h4>
                </router-link>
            </div>
        </nav>
    </div>
</template>

<script>

export default {

    methods: {
        logout() {
            this.$authState.isAuthenticated = false;

            // Optionally, clear any stored data (like tokens) in localStorage or sessionStorage
            localStorage.removeItem('token');  // Remove the token
            sessionStorage.removeItem('token'); // Or sessionStorage, if used

            // Redirect the user to the login page after logout
            this.$router.push({ name: 'Login' });
        }
    }
    
}

</script>

<style scoped>

    .nav-container {
        position: fixed;
        top: 0;
        display: flex;
        flex-direction: column;
        flex-grow: 0;
        flex-shrink: 3;
        gap: 30px;
        width: 250px;
        min-height: 100vh;
        background-color: rgb(53, 69, 82);
        padding-bottom: 300%;
    }

    .nav-header img {
        height: 200px;
        width: 200px;
        margin-top: -60px;
        margin-bottom: -60px;
    }

    .nav-header h3 {
        margin-top: -15px;
        margin-left: 20px;
        color: rgba(216,217,217, 0.5);
        font-size: 10px;
    }

    .links-bottom {
        position: fixed;
        bottom: 10px;
        width: 250px;
    }

    nav {
        padding: 0;
        min-height: inherit;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    a {
        height: 30px;
        padding: 10px 27px;

        text-decoration: none;
        color: rgba(216,217,217, 0.7);
        border-left: 3px solid rgba(255, 255, 255, 0);

        transition: background-color 0.3s ease-in-out, border-left 0.3s ease-in-out;
        
        display: flex;
        align-items: center;
        gap: 15px;
        
    }

    a:hover {
        background-color: rgba(255, 255, 255, 0.02);
        border-left: 3px solid rgba(255, 255, 255, 0.2);
    }

    a.router-link-exact-active {
        color: rgba(216,217,217, 0.95);
        border-left: 3px solid rgba(255, 255, 255, 0.5);
        background-color: rgba(255, 255, 255, 0.04);
    }

    a img {
        width: 24px;
        height: 24px;
    }
</style>

<style>

@media (max-width: 729px) {
        
        .nav-container {
            width: 100px;
        }

        body {
            background-color: blue;
        }

    }

</style>