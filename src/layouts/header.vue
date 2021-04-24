<template>
    <header class="header">
        <div class="container">
<!--            <div> sadasdas</div>-->
            <div class="header__logo">
                <img src="@/assets/img/logo.png" alt="">
            </div>
            <nav>
                <ul>
                    <li><router-link to="/">Головна</router-link></li>
                    <li><router-link to="/start">Інсталяція</router-link></li>
                    <li><router-link to="/about">Про нас</router-link></li>
                </ul>

            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header'
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
      &__logo{
          width: 20%;
          img{
              height: auto;
              width: 50px;
          }
      }
      nav{
          display: flex;
          justify-content: flex-end;
          width: 40%;
          @media(max-width: 1025px){
              position: fixed;
              top: 0;
              left: 0;
              justify-content: flex-start;
              padding: 60px 0 0 2%;
              width: 40%;
              height: 100%;
              transform: translate(-100%,0);
              transition: .3s;
              &.active{
                  transform: translate(0,0);
              }
          }
          ul{
              display: flex;
              justify-content: space-between;
              width: 100%;
              height: fit-content;
              @media(max-width: 1025px){
                  justify-content: flex-start;
                  flex-direction: column;
                  width: auto;
              }
              li{
                  font-weight: 600;
                  @media(max-width: 1025px){
                    margin-bottom: 15%;
                  }
                  a{
                      position: relative;
                      padding-top: 3px;
                      padding-bottom: 3px;
                      color: #3d9c90;
                      transition: .3s;
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
</style>
