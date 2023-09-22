<template>
    <div>
        <blog-filter :blog="blogTags" :allbBlog="blogRecords" />

    </div>
</template>
<script>
import blogFilter from '../components/blogFilter.vue'

export default {
    name: "blogMain",

    components: { 'blog-filter': blogFilter },
    data() {
        return {
            blogRecords: [
                { blogNum: 1, blogImg: './blogImg.svg', blogTitle: "Kitchen Title 1", blogTag: "Kitchen", blogText: "1 Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text " },
                { blogNum: 2, blogImg: "./blogImg1.svg", blogTitle: "Building Title 2", blogTag: "Building", blogText: "2 Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text " },
                { blogNum: 3, blogImg: "./blogImg.svg", blogTitle: "Architecture Title 3", blogTag: "Architecture", blogText: "3 Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text " },

                { blogNum: 4, blogImg: "./blogImg1.svg", blogTitle: "Kitchen Title 4", blogTag: "Kitchen", blogText: "4 Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text " },
                { blogNum: 5, blogImg: "./blogImg.svg", blogTitle: "Building Title 5", blogTag: "Building", blogText: "5 Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text " },
                { blogNum: 6, blogImg: "./blogImg1.svg", blogTitle: "Architecture Title 6", blogTag: "Architecture", blogText: "6 Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text Some text  Some text  Some text  Some text  Some text  Some text  Some text " },

            ],
            blogTags: ["Kitchen", "Building", "Architecture", "All records"]
        }
    },


}
</script>
<style></style>