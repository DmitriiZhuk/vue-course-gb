<template>
  <div class="home">
    <blog-main />

    <product-details />

  </div>
</template>

<script>
import blogMain from '@/components/blogMain.vue'
import ProductDetails from '@/components/ProductDetails.vue'

export default {
  name: 'HomeView',
  components: {
    'blog-main': blogMain,
    'product-details': ProductDetails,

  },
}
</script>
