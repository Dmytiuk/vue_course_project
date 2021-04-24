<template>
  <div id="app">
    <Header/>
    <div class="container">
        <transition name="moveInLeft">
          <router-view/>
        </transition>
      </div>
  </div>
</template>

<script>
  import header from './layouts/header.vue'
  export default {
    name: 'App',
    components: {
      Header: header
    },

  }
</script>

<style lang="scss">
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;600;700&display=swap');
  body{
    margin: 0;
  }
  #app{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    font-family: 'Lexend', sans-serif;
    a{
      text-decoration: none;
    }
  }
  ul{
    margin: 0;
    padding: 0;
    li{
      list-style-type: none;
    }
  }
  h1{
    text-align: center;
    font-size: 6vmin;
  }
  h2{
    font-size: 5vmin;
    font-weight: 600;
    text-align: center;
    color: #00d672;
  }
  h3{
    font-size: 5vmin;
    font-weight: 600;
  }
  p{
    line-height: 1.7;
  }
  .container{
      display: flex;
      justify-content: space-between;
      align-items: center;
    width: 100%;
    padding: 0 2%;
    max-width: 1240px;
    box-sizing: border-box;
  }
  .section{
      height: 90vh;
      display: flex;
      justify-content: center;
      align-items: center;
      &:nth-of-type(1){
          height: 50vh;
      }
      &:nth-of-type(even){
          .section__inner{
              flex-direction: row-reverse;
          }
      }
    &__inner{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__description{
      width: 50%;
    }
    &__decoration{
      position: relative;
      width: 35%;
      height: 300px;
    }
  }
  .home{
      position: relative;
  }
  .parallax-img{
      max-width: 60%;
      height: auto;
      position: absolute;
  }
  .left{
      left: 0;
      z-index: 5;
  }
  .right{
      right: 0;
      z-index: -5;
      transform: translate(-35%, -1%);
      max-width: 55%;
      &__2{
          transform: translate(60%, 10%);
      }
  }
  .moveInLeft-enter-active{
    animation: fadeIn .3s ease-in;
  }
  @keyframes fadeIn{
    0%{
      opacity: 0;
    }
    50%{
      opacity: 0.5;
    }
    100%{
      opacity: 1;
    }
  }

  .moveInLeft-leave-active{
    animation: moveInLeft .5s ease-in;
  }
  @keyframes moveInLeft{
    0%{
      transform: translateX(0);
    }
    100%{
      transform: translateX(-100%);
    }
  }
</style>