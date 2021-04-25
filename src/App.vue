<template>
  <div id="app">
<!--    <Header/>-->
      <Header/>
      <main id="page-wrap">
          <div class="container">
              <transition name="page" mode="out-in">
                  <router-view/>
              </transition>
          </div>
      </main>
  </div>
</template>


<script>
   import header from './layouts/header.vue'
  // import menu from './layouts/menu.vue'
  export default {
    name: 'App',
    components: {
      Header: header
    }
  }
</script>

<style lang="scss">
      @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
      @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
      body{
          margin: 0;
          padding: 0;
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
          @media(max-width: 768px){
              padding: 0 5%;
          }
      }
      .section{
          height: 90vh;
          display: flex;
          justify-content: center;
          align-items: center;
          @media(max-width: 768px){
            height: auto;
          }
          &:nth-of-type(1){
              height: 50vh;
              @media(max-width: 768px){
                height: auto;
              }
          }
          &:nth-of-type(even){
              .section__inner{
                  flex-direction: row-reverse;
                  @media(max-width: 768px){
                    flex-direction: column-reverse;
                  }
              }
          }
        &__inner{
          display: flex;
          justify-content: space-between;
          align-items: center;
            @media(max-width: 768px){
                padding: 10% 0;
                flex-direction: column-reverse;
            }
        }
        &__description{
          width: 50%;
            @media(max-width: 768px){
                width: 100%;
            }
        }
        &__decoration{
          position: relative;
          width: 35%;
          height: 300px;
            @media(max-width: 768px){
                width: 60%;
            }
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
      .page-enter-active, .page-leave-active {
          transition: opacity 1s, transform .7s;
      }
      .page-enter, .page-leave-to {
          opacity: 0;
          transform: translateX(30%);
          @media(max-width: 768px){
              transform: translateY(-30%);
          }
      }

</style>