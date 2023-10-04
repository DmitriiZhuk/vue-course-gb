<template >
    <div class="container">
        <div v-for="project in  filteredProject " :key="project.id">
            <h2>{{ project.id }} - {{ project.subHeading }}</h2>
            <h3>{{ project.group }}</h3>
            <p>{{ project.text }}</p>
            <img :src="`/` + project.imgLink" :alt="project.type">
        </div>
        <router-link to="/projects">Back to projects</router-link>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
    props: ['id'],
    data() {
        return {
            filteredProject: [],
            filterId: Number(this.$route.params.id)
        }
    },
    computed: {
        ...mapGetters(['allDetails'])
    },
    methods: {
        filteredItem() {
            this.filteredProject = this.allDetails.filter((row) => row.id === this.filterId)
        }
    },
    mounted() {
        this.filteredItem()
    },
}
</script>

<style scoped>
h2,
h3,
p {
    margin: 30px;
}

img {
    border-radius: 30px;
    margin: 30px;
}

a {
    text-decoration: none;
    font-size: 1.2rem;
}
</style>