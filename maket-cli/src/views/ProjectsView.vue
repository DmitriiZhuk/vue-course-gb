<template>
  <div class="Projects">
    <blog-projects :projects="ourProjectsObject" />
  </div>
</template>
<script>
import blogProjects from '@/components/blogProjects.vue';
export default {
  components: { 'blog-projects': blogProjects },
  name: "ProjectsView",

  data() {
    return {
      ourProjectsObject: [
        { id: 1, type: "Bathroom", imgLink: "./project-photo-01.png", group: "Decor / Architecture", subHeading: "Classic Bathroom" },
        { id: 2, type: "Bed room", imgLink: "./project-photo-02.png", group: "Decor / Architecture", subHeading: "Minimal Bed room" },
        { id: 3, type: "Kitchen", imgLink: "./project-photo-03.png", group: "Decor / Architecture", subHeading: "Cozy Kitchen" },
        { id: 4, type: "Bathroom", imgLink: "./project-photo-01.png", group: "Decor / Architecture", subHeading: "Modern Bathroom" },
        { id: 5, type: "Bed room", imgLink: "./project-photo-02.png", group: "Decor / Architecture", subHeading: "Hi-tech Bed room" },
        { id: 6, type: "Kitchen", imgLink: "./project-photo-03.png", group: "Decor / Architecture", subHeading: "Nice Kitchen" },
        
      ]
    }
  },

  methods: {

  },

  created: {

  }
}

</script>
