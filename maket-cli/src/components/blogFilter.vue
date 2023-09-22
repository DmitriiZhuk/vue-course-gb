<template lang="">
    <div class="container kitchens">
        <div v-for="tag in blog" :key="tag" @click="filterRecords(tag)">
            <button class="btn">{{tag}}</button>
        </div>

        <div class="container" v-for="(record, index) in  filteredRecords " :key="index">
            <img :src="record.blogImg" alt="" srcset="">
            <h2 class="heading2">{{ record.blogTitle }}</h2>
            <p><strong>{{ record.blogTag }}</strong></p>
            <p>{{ record.blogText }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'blogFilter',
    props: {
        blog: {
            type: Array
        },
        allbBlog: {
            type: Array
        }
    },

    data() {
        return {
            filteredRecords: [],
        }
    },

    methods: {
        makeInitial() {
            this.filteredRecords = this.allbBlog
        },
        filterRecords(tag) {
            if (tag !== "All records") {
                this.filteredRecords = this.allbBlog.filter(item => item.blogTag === tag);
            }
            else { this.makeInitial() }
        }

    },
    mounted() {
        this.makeInitial()
    },
}
</script>

<style>
.btn {
    border-radius: 18px;
    background: #292f36;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    color: white;
    width: 120px;
    height: 75px;
}
</style>