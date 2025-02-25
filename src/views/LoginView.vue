<template>
    <div class="container">

      <div class="image">
        <img src="../assets/mytu-gray-logo.png">
      </div>
      
      <div class="sub-container">
        
        <div class="title">
          <h1>Log in</h1>
        </div>
  
        <form @submit.prevent="login">
          <input v-model="username" type="text" placeholder="Username" />
          <input v-model="password" type="password" placeholder="Password" />
          <p>{{ error }}</p>
          <button type="submit">Log in</button>
        </form>

      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  const apiUrl = process.env.VUE_APP_API_BASE_URL;
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        error: null,
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post(`${apiUrl}/login`, {
            username: this.username,
            password: this.password,
          });

          const token = response.data.token;

          this.$authState.isAuthenticated = true;

          localStorage.setItem('token', token);
          this.$router.push('/');
          
        } catch (err) {
          this.error = 'Invalid credentials';
        }
      },
    },
  };
  </script>


<style scoped>

p {
  padding-top: 30px;
  color: rgba(255, 0, 0, 0.5);
}

  .container {
    margin-top: -25%;
    width: 100%;
    min-height: 100vh;
    background-color: rgb(53, 69, 82);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .sub-container {
    margin-top: -190px;
    background-color: white;
    padding: 15px;
    width: 500px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    height: 0px;
    font-size: 14px;
  }

  form {
    min-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
    border-radius: 7px;
    padding: 10px 10px;
    border: 0.5px solid rgba(42, 210, 201);
  }

  input:focus {
    outline: 1px solid rgba(42, 210, 201);
  }

  button {
    font-weight: bold;
    color: rgba(245, 245, 245, 1);
    width: 50%;
    margin-top: 40px;
    padding: 7px 10px;
    border-radius: 40px;
    background-color: rgba(42, 210, 201, 0.8);
    border: 1.5px solid rgba(42, 210, 201, 0);
    transition: 0.35s background-color ease;
  }

  button:hover {
    background-color: rgba(42, 210, 201, 0.5);
    border: 1.5px solid rgba(42, 210, 201, 1);
    cursor: pointer;
  }

  .title {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  h1 {
    padding-left: 15px;
    font-size: 1.5em;
    margin-bottom: 15px;
    text-align: left;
    color: black;
  }
</style>