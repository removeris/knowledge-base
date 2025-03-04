<template>
    <div class="container">
      <img id="logo" src="../assets/mytu-gray-logo.png">

      <div class="sub-container">
        <h1>To login, scan the <span class="colored-text">QR code </span>using your <span class="colored-text">myTU app.</span></h1>
        <qrcode id="qrcode"/>
      </div>
    </div>
  </template>
  
  <script>

  import qrcode from "@/components/QRCode.vue"

  export default {
    components: {
      qrcode
    }
  };
  </script>


<style scoped>

  .container {
    margin-top: -20%;
    width: 100%;
    min-height: 100vh;
    background-color: rgb(53, 69, 82);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .sub-container {
    margin-top: -8%;
    width: 800px;
    height: 400px;
    display: flex;
    align-items: center;
    gap: 50px;
  }

  button {
    font-weight: bold;
    color: rgba(245, 245, 245, 1);
    width: 8%;
    margin-top: -150px;
    padding: 14px 18px;
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

  #qr-code {
    width: 300px;
    height: 300px;
  }

  h1 {
    width: 350px;
    color: rgba(245, 245, 245, 1);
  }

  .colored-text {
    color: rgba(42, 210, 201, 1);
  }

  #qrcode {
    height: 300px;
    width: 300px;
  }


</style>