<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/start">Getting Started</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/contacts">Contacts</router-link></li>
        </ul>
      </nav>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style lang="scss" scoped>
  header{
    display: flex;
      nav{
          ul{
              display: flex;
          }
      }
  }
</style>
