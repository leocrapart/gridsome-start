<template>
  <div>
    <Nav></Nav>
    <slot/>
    
  </div>
</template>

<script>
import Nav from '../components/nav'

export default {
  components: {
    Nav
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
    body {
      background-image: url('https://ik.imagekit.io/pl6zwucqxr/grass-background_tveE3-0zCxI.jpg');
      background-position: center center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
    }
</style>
