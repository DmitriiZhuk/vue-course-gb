<template>
    <div class="container">
        <div class="buttons">
            <div v-for=" key in projectKeys" :key="key">
                <button class="btn" @click="filterProjects(key)">{{ key }}</button>
            </div>
        </div>
        <div class="projects">
            <div v-for="project in allProjects" :key="project.id">
                <img :src="project.imgLink" :alt="project.type">

                <div class="project_details">
                    <div>
                        <h3>{{ project.subHeading }}</h3>
                        <p>{{ project.group }}</p>
                    </div>
                    <div>
                        <router-link :to="{ name: 'projectsDetails', params: { id: project.id } }">
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    name: 'blogProjects',
    props: {
        projects: {
            type: Object
        }
    },
    data() {
        return {
            projectKeys: ["Bathroom", "Bed room", "Kitchen", "All"],
            allProjects: [],
            filteredProjects: [],
        }
    },
    methods: {
        makeInitial() {
            this.allProjects = this.projects
        },
        filterProjects(key) {
            if (key !== "All") {
                this.allProjects = this.projects.filter(item => item.type === key);
            }
            else { this.makeInitial() }
        }
    },
    created() {
        this.makeInitial()
    }


}
</script>

<style scoped>
.projects {
    display: flex;
    flex-direction: row;
    gap: 50px
}

.buttons {
    border: 1px solid #CDA274;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 10px
}

.btn {
    background-color: #CDA274;
    border: none;
}

.btn:hover {
    background-color: rgb(201, 119, 119);
}

.project_details {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>