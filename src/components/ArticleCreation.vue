<template>
    <div id="container">
      <form class="form-container" @submit.prevent="uploadArticle">
        
        <div class="subcontainer">
          <h4>Article Title</h4>
          <input v-model="title" type="text" placeholder="Title" required />
        </div>
        
        <div class="subcontainer">
          <h4>Article Text</h4>
          <div id="editor-container"></div>
        </div>
        
        <button type="submit">Upload</button>
      </form>
    </div>
  </template>
  
  <script>

  import Quill from "quill";
  import "quill/dist/quill.snow.css";
  
  import axios from "axios";

  export default {
    data() {
      return {
        title: "",
        content: "",
        editor: null,
      };
    },

    mounted() {
      // Create Quill text editor
      this.$nextTick(() => {
        this.editor = new Quill("#editor-container", {
          theme: "snow",
          modules: {
              toolbar: [
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              ['bold', 'italic', 'underline',],
              ['link', 'image'],
              [{'list': 'ordered'}, {'list': 'bullet'}],
              [{ 'align': [] }],
              ],
          },
        });
        
          const toolbar = this.editor.getModule('toolbar');
          toolbar.addHandler('image', this.imageHandler);
      });
    },

    methods: {

      async imageHandler() {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');

        input.click();

        input.onchange = async (e) => {
          const file = e.target.files[0];
          
          if (!file) return;

          const imageData = new FormData();
          imageData.append('file', file);

          try {
            const response = await axios.post("http://localhost:5000/api/upload", imageData, { headers: { "Content-Type": "multipart/form-data" }});

            const imageUrl = response.data.imageUrl;

            this.editor = new Quill("#editor-container");

            this.editor.insertEmbed(10000, "image", imageUrl);

            this.editor = new Quill("#editor-container");

          } catch (error) {
            console.error("Error uploading image:", error);
          }
        };
      },

      async uploadArticle() {
        this.content = this.editor.root.innerHTML;
        
        console.log(this.editor.root.innerHTML);

        const articleData = {
          title: this.title,
          content: this.content
        };

        try {
          const response = await axios.post("http://localhost:5000/api/articles", articleData, { headers: { "Content-Type": "multipart/form-data" }});
          alert("Article was uploaded successfully.");
        }
        catch(error) {
          console.log("Failed to connect to backend.");
        }
      },
    },
  };

  </script>
  
  <style scoped>

  #container {
    margin-top: 60px;

    display: flex;
    flex-direction: column;

    align-items: center;
  }

  .subcontainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 25px;
  }

  input[type="text"] {
    height: 30px;
    background-color: rgba(245, 245, 245);
    border: 0.5px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    padding: 5px 10px;
    font-weight: bold;
  }

  .form-container {
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .ql-container {
    height: 15vw;
    border: 0.5px solid rgba(0, 0, 0, 0.3) !important;
    border-top: none !important;
    margin-top: -10px;
  }

  .ql-toolbar {
    border: 0.5px solid rgba(0, 0, 0, 0.3) !important;
  }

  button {
    border: 0.5px solid rgba(0, 0, 0, 0.3);
    width: 30%;
    padding: 10px 40px;
    border-radius: 8px;
    margin: auto;
    color: rgba(53, 69, 82, 0.9);
    background-color: rgba(216,217,217, 0.7);
  }

  button:hover {
    background-color: rgba(255, 255, 255, 0.3)
  }

  </style>