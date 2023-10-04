<template>

<div class="Projects">
    <blog-projects :projects="allDetails" />
</div>
</template>

<script>
import blogProjects from '@/components/blogProjects.vue';
import { mapGetters } from 'vuex'
export default {
  components: { 'blog-projects': blogProjects },
  name: "ProjectsView",

  methods: {
    
  },

  mounted: {
    

  },
  computed: {
    ...mapGetters(['allDetails'])
  }

}

</script>
