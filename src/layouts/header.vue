<template>
    <header class="header">
        <div class="container">
            <div class="header__logo">
                <router-link to="/"><img src="@/assets/img/logo.png" alt=""></router-link>
            </div>
            <nav id="nav">
                <ul>
                    <li><router-link to="/"><p>Головна</p> <div class="header__icon"><img src="@/assets/img/home.svg" alt=""></div></router-link></li>
                    <li><router-link to="/start"><p>Інсталяція</p><div class="header__icon"><img src="@/assets/img/install.svg" alt=""></div></router-link></li>
                    <li><router-link to="/about"><p>Про нас</p><div class="header__icon"><img src="@/assets/img/devs.svg" alt=""></div></router-link></li>
                </ul>
            </nav>
            <Burger/>
        </div>
    </header>
</template>

<script>
    import Burger from "@/components/Burger.vue"
    export default {
        name: 'Header',
        components: {
            Burger
        }
    }
</script>

<style lang="scss" scoped>
  .header{
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 10px 0;
      background: rgb(240,255,252);
      box-shadow: 4px 4px 5px 0px rgba(34, 60, 80, 0.2);
      z-index: 9999;
      @media(max-width: 1024px){
          height: 35px;
      }
      &__logo{
          width: 20%;
          img{
              height: auto;
              width: 50px;
          }
      }
      &__icon{
          width: 35px;
          height: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50px;
          background: #00d672;
          box-shadow: 0 0 5px #3d9c90;
          img{
              width: 50%;
          }
          @media(min-width: 1025px){
              display: none;
          }
      }
      nav{
          display: flex;
          justify-content: flex-end;
          width: 30%;
          @media(max-width: 1025px){
              position: fixed;
              top: -10px;
              right: 70px;
              justify-content: flex-start;
              width: fit-content;
              transform: rotate(110deg) translate(-130px, -120px);
              transition: all .9s;
              &.active{
                  transform: rotate(-45deg) translate(0, 0);
              }
          }
          ul{
              display: flex;
              justify-content: space-between;
              width: 100%;
              height: fit-content;
              @media(max-width: 1025px){
                  justify-content: space-between;
                  flex-direction: column;
                  width: auto;
                  height: 170px;
              }
              li{
                  font-weight: 600;
                  @media(max-width: 1025px){
                    transform: rotate(45deg);
                      &:nth-of-type(2){
                          transform: translate(-40px, -4px);
                      }
                  }
                  a{
                      display: block;
                      p{
                          position: relative;
                          padding-top: 3px;
                          padding-bottom: 3px;
                          color: #3d9c90;
                          transition: .3s;
                          @media(max-width: 1024px){
                              display: none;
                          }
                          &:hover{
                              color: #00d672;
                          }
                          &:after{
                              position: absolute;
                              bottom: -2px;
                              right: 0;
                              width: 0%;
                              height: 2px;
                              content: "";
                              background-color: #3d9c90;
                              transition: width .8s cubic-bezier(.22,.61,.36,1);
                          }
                          &:before{
                              position: absolute;
                              bottom: -2px;
                              left: 0;
                              width: 0%;
                              height: 2px;
                              content: "";
                              background-color: #3d9c90;
                          }
                          &:hover{
                              &:before{
                                  width: 100%;
                                  transition: width .5s cubic-bezier(.22,.61,.36,1);
                              }
                              &:after{
                                  width: 100%;
                                  background-color: transparent;
                                  transition: 0s;
                              }
                          }
                      }
                  }
              }
          }
      }
  }
</style>
