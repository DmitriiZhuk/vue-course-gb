<template>
  <div>
    <section class="header">
      <div class="container">
        <div class="nav">
          <div class="nav-logo">

            <img src="../../public/Logo.svg" alt="logo" />
            <img src="../../public/Interno.svg" alt="interno" />

          </div>

          <div class="nav-links">
            <router-link to="/">Home</router-link>
            <router-link to="/blog">Blog</router-link>
            <router-link to="/projects">Projects</router-link>
          </div>
         </div>
      </div>
      <div class="header_img">
        <img src="../../public/blog-top.png" alt="" srcset="">
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "blogHeader",
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.header_img img {
  width: 100vw;
}
</style>