<template>
  <div id="app">
    <Header/>
    <div class="container">
      <transition name="moveInUp">
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
    }
  }
</script>

<style>
  .moveInUp-enter-active{
    animation: fadeIn 2s ease-in;
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

  .moveInUp-leave-active{
    animation: moveInUp .3s ease-in;
  }
  @keyframes moveInUp{
    0%{
      transform: translateY(0);
    }
    100%{
      transform: translateY(-400px);
    }
  }
</style>