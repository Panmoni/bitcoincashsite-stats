<template>
    <main>

        <!--  BEGIN MAIN CONTAINER  -->
        <div class="main-container" id="container">

            <div class="overlay"></div>
            <div class="search-overlay"></div>

            <!--  BEGIN CONTENT AREA  -->
            <div id="content" class="main-content">
                <div class="layout-px-spacing">

                    <div class="page-header">
                        <div class="page-title">
                            <h3>Courses</h3>
                        </div>

                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <router-link to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                    </router-link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Courses</span></li>
                            </ol>
                        </nav>

                    </div>

                    <div class="row sales layout-top-spacing">

                        <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                            <div class="widget widget-chart-one">
                                <div class="widget-heading mb-3">
                                    <h3 class="">{{total}} Merchant Onboarding (EN) Courses</h3>
                                </div>

                                <ul class="list-unstyled">
                                    <li class="media clickable" v-for="entry of listEdu001" :key="entry.id" @click="openSpeech(entry.speech)">
                                        <img class="rounded screenshot" :src="entry.screenshot" alt="pic1">
                                        <div class="media-body">
                                            <h4 class="media-heading">{{entry.firstName}} {{entry.lastName}}</h4>
                                            <p class="media-text">{{entry.description}}</p>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <!-- <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                            <div class="widget widget-chart-one">
                                <div class="widget-heading mb-3">
                                    <h3 class="">BAV Agent (ES)</h3>
                                </div>

                                <ul class="list-unstyled">
                                    <li class="media clickable" v-for="entry of listEdu002" :key="entry.id" @click="openSpeech(entry.speech)">
                                        <img class="rounded screenshot" :src="entry.screenshot" alt="pic1">
                                        <div class="media-body">
                                            <h4 class="media-heading">{{entry.firstName}} {{entry.lastName}}</h4>
                                            <p class="media-text">{{entry.description}}</p>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div> -->

                        <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                            <div class="widget widget-chart-two">
                                <div class="widget-heading">
                                    <h5 class="">Our Educational Programs</h5>
                                </div>
                                <div class="widget-content">
                                    <p class="px-3 py-2">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>

                                    <p class="px-3 py-2">
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    </div>
            </div>
            <!--  END CONTENT AREA  -->

        </div>
        <!-- END MAIN CONTAINER -->

    </main>
</template>

<script>
/* Import modules. */
// import ApexCharts from 'apexcharts'
// import numeral from 'numeral'
import superagent from 'superagent'

const API_ENDPOINT = `https://api.bitcoincash.site/v1`
// const API_ENDPOINT = `http://localhost:8080/v1`

export default {
    components: {
        // Navbar,
    },
    data: () => {
        return {
            total: null,
            edu001: null,
            edu002: null,
        }
    },
    computed: {
        listEdu001() {
            if (!this.edu001) {
                return []
            }

            const courses = []

            Object.keys(this.edu001).forEach(entryid => {
                const entry = this.edu001[entryid]

                if (!entry.speech) return

                courses.push({
                    id: entry.id,
                    firstName: entry.firstName[0],
                    lastName: entry.lastName[0],
                    city: entry.city[0],
                    country: entry.country[0],
                    screenshot: entry.screenshot[0].thumbnails.large.url,
                    speech: entry.speech,
                    description: entry.description,
                })
            })

            courses.reverse()

            // console.log('COURSES', courses)

            return courses
        },

        // listEdu002() {
        //     if (!this.edu002) {
        //         return []
        //     }
        //
        //     const courses = []
        //
        //     Object.keys(this.edu002).forEach(entryid => {
        //         const entry = this.edu002[entryid]
        //         console.log('ENTRY', entry);
        //
        //         if (!entry.screenshot) return
        //
        //         courses.push({
        //             id: entry.id,
        //             firstName: entry.firstName[0],
        //             lastName: entry.lastName[0],
        //             city: entry.city[0],
        //             country: entry.country[0],
        //             // screenshot: entry.screenshot[0].thumbnails.large.url,
        //             speech: entry.speech,
        //             // description: entry.description,
        //         })
        //     })
        //
        //     console.log('COURSES', courses)
        //
        //     return courses
        // },

    },
    methods: {
        async init() {
            const result = await superagent.get(`${API_ENDPOINT}/stats/courses`)
            // console.log('RESULT', result)

            if (result.body) {
                const body = result.body
                console.log('BODY:', body)

                if (body['edu001']) {
                    this.edu001 = body['edu001']

                    this.total = Object.keys(this.edu001).length
                }

                if (body['edu002']) {
                    this.edu002 = body['edu002']
                }

            }

        },

        openSpeech(_url) {
            window.open(_url)
        },

    },
    created: function () {
        this.total = 0

    },
    mounted: function () {
        this.init()

    },
}
</script>

<style scoped>
.media {
    margin-bottom: 25px;
}

.screenshot {
    width: 100px;
    /* height: 100px; */

    margin-right: 15px;

    object-fit: cover;
}
</style>
