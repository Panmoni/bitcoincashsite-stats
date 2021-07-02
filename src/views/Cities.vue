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
                            <h3>Cities</h3>
                        </div>

                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <router-link to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                    </router-link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Cities</span></li>
                            </ol>
                        </nav>

                    </div>

                    <div class="row sales layout-top-spacing">

                        <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                            <div class="widget widget-chart-one">
                                <div class="widget-heading mb-3">
                                    <h3 class="">{{total}} Total Cities</h3>
                                    <!-- <ul class="tabs tab-pills">
                                        <li><a href="javascript://" id="tb_1" class="tabmenu">Monthly</a></li>
                                    </ul> -->
                                </div>

                                <div class="widget-content">
                                    <div class="order-summary">
                                        <div class="summary-list">
                                            <!-- <div class="w-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                            </div> -->
                                            <div class="w-summary-details" v-for="(city, index) of cities" :key="city.id">

                                                <div class="w-summary-info">
                                                    <h5>{{index + 1}}. {{city[0]}}</h5>
                                                </div>

                                                <div class="scoreboard-people">
                                                    <div class="text-white">People - <strong>{{countDisplay(city[1])}}</strong></div>
                                                    <div class="progress progress-sm">
                                                        <div class="progress-bar bg-gradient-warning" role="progressbar" :style="{ width: calcProgress('people', city[1])}" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>

                                                <div class="scoreboard-merchants">
                                                    <div class="text-white">Merchants - <strong>{{countDisplay(city[2])}}</strong></div>
                                                    <div class="progress progress-sm">
                                                        <div class="progress-bar bg-gradient-secondary" role="progressbar" :style="{ width: calcProgress('merchants', city[2])}" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>

                                                <div class="scoreboard-contractors">
                                                    <div class="text-white">Contractors - <strong>{{countDisplay(city[3])}}</strong></div>
                                                    <div class="progress progress-sm">
                                                        <div class="progress-bar bg-gradient-primary" role="progressbar" :style="{ width: calcProgress('contractors', city[3])}" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                            <div class="widget widget-chart-two">
                                <div class="widget-heading">
                                    <h5 class="">Our Global Presence</h5>
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
import numeral from 'numeral'
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
            cities: null,
        }
    },
    methods: {
        async init() {
            const result = await superagent.get(`${API_ENDPOINT}/stats/cities`)
            // console.log('RESULT', result)

            if (result.body) {
                const body = result.body
                // console.log('BODY:', body)

                if (body.total) {
                    this.total = numeral(body.total).format('0,0')
                }

                if (body.cities) {
                    this.cities = body.cities
                    // console.log('CITIES', this.cities)
                }

                // this.displayCities()
            }

        },

        calcProgress(_index, _value) {
            if (_index === 'contractors') {
                if (_value > 80) {
                    return '95%'
                } else if (_value > 70) {
                    return '70%'
                } else if (_value > 60) {
                    return '60%'
                } else if (_value > 50) {
                    return '50%'
                } else if (_value > 40) {
                    return '40%'
                } else if (_value > 30) {
                    return '30%'
                } else if (_value > 20) {
                    return '20%'
                } else if (_value > 0) {
                    return `${_value}%`
                }

                return '0%'
            }

            if (_index === 'merchants') {
                if (_value > 550) {
                    return '95%'
                } else if (_value > 100) {
                    return '70%'
                } else if (_value > 90) {
                    return '60%'
                } else if (_value > 80) {
                    return '50%'
                } else if (_value > 70) {
                    return '40%'
                } else if (_value > 50) {
                    return '30%'
                } else if (_value > 20) {
                    return '20%'
                } else if (_value > 0) {
                    return `${_value}%`
                }

                return '0%'
            }

            if (_index === 'people') {
                if (_value > 1000) {
                    return '95%'
                } else if (_value > 100) {
                    return '70%'
                } else if (_value > 90) {
                    return '60%'
                } else if (_value > 80) {
                    return '50%'
                } else if (_value > 70) {
                    return '40%'
                } else if (_value > 50) {
                    return '30%'
                } else if (_value > 20) {
                    return '20%'
                } else if (_value > 0) {
                    return `${_value}%`
                }

                return '0%'
            }
        },

        countDisplay(_count) {
            return numeral(_count).format('0,0')
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
.w-summary-details {
    padding: 15px;
}

.scoreboard-merchants, .scoreboard-people, .scoreboard-contractors {
    margin-left: 30px;
    width: calc(100% - 50px);
}
</style>
