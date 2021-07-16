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
                                    <h3 class="">Merchant Onboarding</h3>
                                </div>

                            </div>

                            <div class="courses-chart" id="chart-merchant-onboarding"></div>

                            <hr />

                            <div class="widget widget-chart-one">
                                <div class="widget-heading mb-3">
                                    <h3 class="">Bitcoin Agents Venezuela</h3>
                                </div>

                            </div>

                            <div class="courses-chart" id="chart-bav"></div>

                        </div>

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
import ApexCharts from 'apexcharts'
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
            // total: null,
            contractors: null,

            edu001: null,
            edu001Onboarded: null,
            edu001Submitted: null,
            edu001Accepted: null,

            edu002: null,
            edu002Onboarded: null,
            edu002Submitted: null,
            edu002Accepted: null,
        }
    },
    computed: {
        //
    },
    methods: {
        async init() {
            let result
            result = await superagent.get(`${API_ENDPOINT}/contractors`)
            // console.log('RESULT', result)

            if (result.body) {
                this.contractors = result.body
                // console.log('CONTRACTORS', result.body)

                Object.keys(this.contractors).forEach(contractorid => {
                    const contractor = this.contractors[contractorid]

                    const workInterests = contractor.workInterests

                    if (workInterests) {
                        workInterests.forEach(interest => {
                            if (interest === 'Merchant Onboarding') {
                                this.edu001Onboarded++
                            }

                            if (interest === 'Bitcoin Agents Venezuela') {
                                this.edu002Onboarded++
                            }
                        })
                    }

                })

            }


            result = await superagent.get(`${API_ENDPOINT}/stats/courses`)
            // console.log('RESULT', result)

            if (result.body) {
                const body = result.body
                console.log('COURSES', body)

                if (body['edu001']) {
                    this.edu001 = body['edu001']

                    this.edu001Submitted = Object.keys(this.edu001).length

                    Object.keys(this.edu001).forEach(courseid => {
                        const course = this.edu001[courseid]

                        if (course.status === 'Accepted') {
                            this.edu001Accepted++
                        }
                    })
                }

                if (body['edu002']) {
                    this.edu002 = body['edu002']

                    this.edu002Submitted = Object.keys(this.edu002).length

                    Object.keys(this.edu002).forEach(courseid => {
                        const course = this.edu002[courseid]

                        if (course.status === 'Accepted') {
                            this.edu002Accepted++
                        }
                    })
                }

                this.drawCharts()

            }

        },

        openSpeech(_url) {
            window.open(_url)
        },

        drawCharts() {
            let chart
            let options

            options = {
                chart: {
                    height: 350,
                    type: 'bar',
                    stacked: true,
                    toolbar: {
                      show: false,
                    }
                },
                responsive: [{
                    breakpoint: 640,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }],
                plotOptions: {
                    bar: {
                        horizontal: false,
                    },
                },
                series: [{
                    name: 'Total Onboarded',
                    data: [ 20, 31, 45, 55, 69, this.edu001Onboarded ],
                },{
                    name: 'Total Submitted',
                    data: [ 13, 17, 21, 25, 28, this.edu001Submitted ],
                },{
                    name: 'Total Accepted',
                    data: [ 11, 15, 19, 23, 26, this.edu001Accepted ],
                }],
                xaxis: {
                    // type: 'datetime',
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                },
                legend: {
                    position: 'right',
                    offsetY: 40
                },
                fill: {
                    opacity: 1
                },
            }

            chart = new ApexCharts(
                document.querySelector('#chart-merchant-onboarding'),
                options,
            )

            chart.render()

            options = {
                chart: {
                    height: 350,
                    type: 'bar',
                    stacked: true,
                    toolbar: {
                      show: false,
                    }
                },
                responsive: [{
                    breakpoint: 640,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }],
                plotOptions: {
                    bar: {
                        horizontal: false,
                    },
                },
                series: [{
                    name: 'Total Onboarded',
                    data: [ 15, 21, 35, 41, 59, this.edu002Onboarded ],
                },{
                    name: 'Total Submitted',
                    data: [ 9, 12, 15, 18, 20, this.edu002Submitted ],
                },{
                    name: 'Total Accepted',
                    data: [ 5, 8, 11, 14, 16, this.edu002Accepted ],
                }],
                xaxis: {
                    // type: 'datetime',
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                },
                legend: {
                    position: 'right',
                    offsetY: 40
                },
                fill: {
                    opacity: 1
                },
            }

            chart = new ApexCharts(
                document.querySelector('#chart-bav'),
                options,
            )

            chart.render()
        },

    },
    created: function () {
        // this.total = 0

        this.edu001Onboarded = 0
        this.edu001Submitted = 0
        this.edu001Accepted = 0

        this.edu002Onboarded = 0
        this.edu002Submitted = 0
        this.edu002Accepted = 0

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
