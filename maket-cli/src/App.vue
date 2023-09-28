<template>
  <div id="app">
    <blog-header />

    <blog-main />

    <product-details />

    <blog-footer />

  </div>
</template>

<script>
import blogHeader from '@/components/blogHeader.vue'
import blogMain from '@/components/blogMain.vue'
import ProductDetails from '@/components/ProductDetails.vue'
import blogFooter from '@/components/blogFooter.vue'

export default {
  name: 'App',
  components: {
    'blog-header': blogHeader,
    'blog-main': blogMain,
    'product-details': ProductDetails,
    'blog-footer': blogFooter,

  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost&display=swap");

.articles .articles_block .article-content,
.articles .articles_block,
.experience .overall,
.container .nav .nav-links,
.container .nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.articles .articles_block .article,
.container .projects,
.container .main-show .main-show_content {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Jost";
}

.top-right {
  border-top-right-radius: 100px;
}

.top-left {
  border-top-left-radius: 100px;
}

.bottom-left {
  border-bottom-left-radius: 100px;
}

.bottom-right {
  border-bottom-right-radius: 100px;
}

.heading2 {
  font-size: 55px;
  font-family: "DM Serif Display", serif;
  font-weight: 300;
  padding-bottom: 10px;
}

img {
  max-width: 100%;
}

.container {
  width: 60vw;
  margin: 0 auto;
}

.container .nav {
  margin-top: 20px;
  justify-content: space-between;
  margin-bottom: 20px;
}

.container .nav .nav-links {
  justify-content: space-around;
  gap: 10px;
  font-size: 20px;
  font-weight: 400;
  line-height: 125%;
}

.container .main-show {
  height: 78vh;
  /* background-image: url("img/Photo.svg"); */
  border-radius: 40px;
  padding: 40px;
  display: flex;
}

.container .main-show .main-show_content {
  width: 40%;
  align-content: flex-start;
  gap: 21px;
  padding-bottom: 21px;
}


.container .main-show .main-show_content .btn-get-started {
  border-radius: 18px;
  background: #292f36;
  box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
  color: white;
  width: 220px;
  height: 75px;
}

.container .projects {
  margin: 21px;
  margin-bottom: 21px;
}

.container .projects .projects-container {
  width: 50%;
  text-align: center;
  margin: 21px 0;
}

.kitchens {
  width: 60vw;
  margin: 0 auto;
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
}

.kitchens .kitchen {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.kitchens .kitchen .kitchen-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.experience {
  background-color: #f4f0ec;
  gap: 30px;
  height: 20vh;
  display: flex;
}

.experience .overall {
  width: 60vw;
  margin: 0 auto;
  justify-content: space-around;
}

.experience .overall .exp-content {
  text-align: center;
}

.experience .overall .exp-content .exp-h2 {
  color: #cda274;
  font-size: 85px;
}

.articles .articles_block {
  width: 60vw;
  margin: 0 auto;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 20px;
}

.articles .articles_block .article {
  text-align: center;
}

.articles .articles_block .article-content {
  justify-content: space-between;
}
</style>
