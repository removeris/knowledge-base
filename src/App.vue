<template>
  <div id="main-container">
    <div id="authenticated" v-if="isAuthenticated">
      <Sidebar />
      <div id="content">
        <router-view v-slot="{ Component }">
          <Transition name="page-slide" mode="out-in">
            <component :is="Component" />
          </Transition>
        </router-view>
      </div>
    </div>

    <div v-else id="non-authenticated">
      <router-view v-slot="{ Component }">
          <Transition name="page-slide" mode="out-in">
            <component :is="Component" />
          </Transition>
        </router-view>
    </div>
  </div>
</template>

<script>

import Sidebar from "./components/Sidebar.vue";

export default {
  components: { Sidebar },
  computed: {
    isAuthenticated() {
      return this.$authState.isAuthenticated; // Access the global authState property
    }
  },
  mounted() {
    document.title = "myTU Knowledge Base";
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  padding: 0;
  margin: 0;
}

body {
  background-color: rgba(53, 69, 82, 0.03);
}

#authenticated {
  display: flex;
  background-color: rgba(245, 245, 245);
  min-height: 100vh;
}

#non-authenticated {
  display: flex;
  min-height: 100vh;
}

#content {
  flex-grow: 1;
  margin-left: 250px;
  padding-top: 20px;
}

/* Transition */

.page-slide-enter-active,
.page-slide-leave-active {
  transition: 0.15s ease all;
}

.page-slide-enter-from,
.page-slide-leave-to {
  opacity: 0;
  transform: translateY(5px);
}

</style>
