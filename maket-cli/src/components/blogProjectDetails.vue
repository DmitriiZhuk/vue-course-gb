<template >
    <div class="container">
        <div>
            <h2>{{ detailsById(id)[0].id }} - {{ detailsById(id)[0].subHeading }}</h2>
            <h3>{{ detailsById(id)[0].group }}</h3>
            <p>{{ detailsById(id)[0].text }}</p>
            <img :src="`/` + detailsById(id)[0].imgLink" :alt="detailsById(id)[0].type">
        </div>
        <router-link to="/projects">Back to projects</router-link>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
    props: ['id'],

    computed: {
        ...mapGetters(['allDetails', 'detailsById'])
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