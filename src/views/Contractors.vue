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
                            <h3>Contractors</h3>
                        </div>

                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <router-link to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                    </router-link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Contractors</span></li>
                            </ol>
                        </nav>

                    </div>

                    <div class="row sales layout-top-spacing">

                        <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                            <div class="widget widget-chart-one">
                                <div class="widget-heading">
                                    <h5 class="">{{total}} Total Contractors</h5>
                                    <!-- <ul class="tabs tab-pills">
                                        <li><a href="javascript://" id="tb_1" class="tabmenu">Monthly</a></li>
                                    </ul> -->
                                </div>

                                <div id="contractorsByCountry"></div>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                            <div class="widget widget-chart-two">
                                <div class="widget-heading">
                                    <h5 class="">About Our Contractors</h5>
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

                    <hr />

                    <div class="row sales">

                        <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                            <div class="widget widget-table-two">

                                <div class="widget-heading">
                                    <h5 class="">Top 25 People Onboarders</h5>
                                </div>

                                <div class="widget-content">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <!-- <th><div class="th-content"></div></th> -->
                                                    <th><div class="th-content text-left">Name</div></th>
                                                    <th><div class="th-content text-center"># of People</div></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(person, index) of topPeople" :key="person.id">
                                                    <!-- <td><div class="td-content customer-name text-right"><img src="assets/img/profile-7.jpeg" alt="avatar"></div></td> -->
                                                    <td><div class="td-content text-left"><span class="person-label">{{index + 1}}. {{person.label}}</span></div></td>
                                                    <td><div class="td-content text-center"><span class="person-num-people">{{person.numPeople}}</span></div></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                            <div class="widget widget-table-two">

                                <div class="widget-heading">
                                    <h5 class="">Top 25 Merchant Onboarders</h5>
                                </div>

                                <div class="widget-content">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <!-- <th><div class="th-content"></div></th> -->
                                                    <th><div class="th-content text-left">Name</div></th>
                                                    <th><div class="th-content text-center"># of Merchants</div></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(merchant, index) of topMerchants" :key="merchant.id">
                                                    <!-- <td><div class="td-content customer-name text-right"><img src="assets/img/profile-7.jpeg" alt="avatar"></div></td> -->
                                                    <td><div class="td-content text-left"><span class="merchant-label">{{index + 1}}. {{merchant.label}}</span></div></td>
                                                    <td><div class="td-content text-center"><span class="merchant-num-merchants">{{merchant.numMerchants}}</span></div></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- <hr /> -->

                    <!-- <div class="row sales">

                        <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                            <div class="widget widget-table-two">

                                <div class="widget-heading">
                                    <h5 class="">Top Referrers</h5>
                                </div>

                                <div class="widget-content">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th><div class="th-content text-left">Name</div></th>
                                                    <th><div class="th-content text-center"># of People</div></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(person, index) of topPeople" :key="person.id">
                                                    <td><div class="td-content text-left"><span class="person-label">{{index + 1}}. {{person.label}}</span></div></td>
                                                    <td><div class="td-content text-center"><span class="person-num-people">{{person.numPeople}}</span></div></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                            <div class="widget widget-table-two">

                                <div class="widget-heading">
                                    <h5 class="">Top Verifiers</h5>
                                </div>

                                <div class="widget-content">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th><div class="th-content text-left">Name</div></th>
                                                    <th><div class="th-content text-center"># of Merchants</div></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(merchant, index) of topMerchants" :key="merchant.id">
                                                    <td><div class="td-content text-left"><span class="merchant-label">{{index + 1}}. {{merchant.label}}</span></div></td>
                                                    <td><div class="td-content text-center"><span class="merchant-num-merchants">{{merchant.numMerchants}}</span></div></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> -->

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
import superagent from 'superagent'

/* Import components. */
// import Navbar from '@/components/Navbar.vue'

const API_ENDPOINT = `https://api.bitcoincash.site/v1`
// const API_ENDPOINT = `http://localhost:8080/v1`

export default {
    components: {
        // Navbar,
    },
    data: () => {
        return {
            total: null,
            topMerchants: null,
            topPeople: null,
        }
    },
    methods: {
        async init() {
            /* Request Contractors data. */
            const response = await superagent.get(API_ENDPOINT + '/contractors')
                .catch(console.error)

            if (response) {
                const data = response.body
                // console.log('DATA', data)

                const contractors = []

                /* Set number of people. */
                this.total = Object.keys(data).length
                // console.log('Num contractors:', this.total)

                Object.keys(data).forEach(_contractorid => {
                    const contractor = data[_contractorid]
                    // console.log('CONTRACTOR', contractor)

                    contractors.push({
                        label: contractor.firstName + ' ' + contractor.lastName,
                        city: contractor.city,
                        numMerchants: contractor.merchants ? contractor.merchants.length : 0,
                        numPeople: contractor.people ? contractor.people.length : 0,
                    })
                })

                /***********************************************************************
                 *
                 * HANDLE MERCHANTS
                 * ----------------
                 *
                 * 1. Sort by num onboarded
                 * 2. Filter contractors without any onboarding
                 */

                /* Sort by merchants. */
                contractors.sort((a, b) => {
                    return b.numMerchants - a.numMerchants
                })

                /* Initialize merchant count. */
                let merchantCount = 0

                /* Handle contractors. */
                contractors.forEach(contractor => {
                    /* Validate contractor. */
                    if (merchantCount >= 25 || contractor.numMerchants === 0) {
                        return
                    }

                    /* Add table row. */
                    this.topMerchants.push({
                        id: contractor.label,
                        label: contractor.label,
                        numMerchants: contractor.numMerchants,
                    })

                    merchantCount++

                })

                /***********************************************************************
                 *
                 * HANDLE PEOPLE
                 * -------------
                 *
                 * 1. Sort by num onboarded
                 * 2. Filter contractors without any onboarding
                 */

                /* Sort by people. */
                contractors.sort((a, b) => {
                    return b.numPeople - a.numPeople
                })

                /* Initialize people count. */
                let peopleCount = 0

                /* Handle contractors. */
                contractors.forEach(contractor => {
                    /* Validate contractor. */
                    if (peopleCount >= 25 || contractor.numPeople === 0) {
                        return
                    }

                    /* Add table row. */
                    this.topPeople.push({
                        id: contractor.label,
                        label: contractor.label,
                        numPeople: contractor.numPeople,
                    })

                    peopleCount++
                })

                // console.log('CONTRACTORS', contractors);
                const counts = contractors.reduce((p, c) => {
                    if (!c.city) return p

                    const city = c.city
                        .trim()
                        // .toUpperCase()
                        .toLowerCase()
                        .replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '')

                    if (!p[city]) {
                        p[city] = 0;
                    }

                    p[city]++

                    return p
                }, {})
                // console.log('COUNTS', counts)

                this.drawPieChart(counts)
            }

        },

        drawPieChart(_counts) {
            let chart
            let options

            const cities = []
            for (let city in _counts) {
                cities.push([ city, _counts[city] ])
            }

            cities.sort((a, b) => {
                return b[1] - a[1]
            })
            // console.log('CITIES', cities);

            const series = cities.map(city => {
                return city[1]
            })
            // console.log('SERIES', series);

            const labels = cities.map(city => {
                return city[0]
            })
            // console.log('LABELS', labels);

            options = {
                chart: {
                    height: 350,
                    type: 'donut',
                    toolbar: {
                        show: false,
                    }
                },
                // series: [44, 55, 41],
                series,
                // labels: ['Columbia', 'Nigeria', 'Venezuela'],
                labels,
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }

            chart = new ApexCharts(
                document.querySelector("#contractorsByCountry"),
                options
            )
            chart.render()

        },
    },
    created: function () {
        this.init()

        this.total = 0
        this.topMerchants = []
        this.topPeople = []
    },
    mounted: function () {
        //
    },
}
</script>

<style scoped>
.person-label, .merchant-label {
    font-size: 1.3em;
}
.person-num-people, .merchant-num-merchants {
    font-size: 1.6em;
}

.layout-spacing {
    padding-bottom: 30px;
}
.widget {
    position: relative;
    padding: 0;
    border-radius: 6px;
    border: none;
    box-shadow: none;
}
.apexcharts-xaxis text {
    fill: #888ea8
}
.apexcharts-yaxis text {
    fill: #888ea8
}
.apexcharts-legend-text {
    color: #bfc9d4!important;
}
.apexcharts-tooltip.dark {
    background: #191e3a!important;
    box-shadow: none;
}
.apexcharts-tooltip.dark .apexcharts-tooltip-title {
    background: #191e3a!important;
    border-bottom: 1px solid #191e3a;
}

/*
    =====================
        Recent Orders
    =====================
*/
.widget-table-two {
    position: relative;
}
.widget-table-two h5 {
    font-size: 19px;
    letter-spacing: 1px;
    margin-bottom: 20px;
}
.widget-table-two .widget-content {
    background: transparent;
}
.widget-table-two .table {
    border-collapse: separate;
    border-spacing: 0 5px;
    margin-bottom: 0;
    background: transparent;
}
.widget-table-two .table > thead > tr > th {
    text-transform: initial;
    font-weight: 600;
    border-top: none;
    background: #191e3a;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
    padding-left: 0;
    -webkit-transition: all 0.1s ease;
    transition: all 0.1s ease;
    padding: 10px 0 10px 5px;
}
.widget-table-two .table > thead > tr > th:first-child {
    border-bottom-left-radius: 6px;
}
.widget-table-two .table > thead > tr > th:first-child {
    border-top-left-radius: 6px;
}
.widget-table-two .table > thead > tr > th:last-child {
    border-bottom-right-radius: 6px;
}
.widget-table-two .table > thead > tr > th:last-child {
    border-top-right-radius: 6px;
}
.widget-table-two .table > thead > tr > th .th-content {
    color: #25d5e4;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 1px;
}
.widget-table-two .table > thead > tr > th:first-child .th-content {
    margin-left: 10px;
}
.widget-table-two .table > thead > tr > th:last-child .th-content {
    text-align: right;
    margin-right: 10px;
}
.widget-table-two .table > thead > tr > th:nth-last-child(2) .th-content {
    text-align: center;
    padding: 0 15px 0 0;
}
.widget-table-two .table > tbody > tr > td {
    border-top: none;
    background: transparent;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
    padding-left: 0;
    -webkit-transition: all 0.1s ease;
    transition: all 0.1s ease;
}
.widget-table-two .table > tbody > tr:hover > td {
    transform: translateY(-1px) scale(1.01);
}
.widget-table-two .table > tbody > tr > td .td-content {
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 1px;
    color: #888ea8;
}
.widget-table-two .table > tbody > tr:hover > td .td-content {
    color: #bfc9d4;
}
.widget-table-two .table > tbody > tr > td:first-child {
    border-top-left-radius: 6px;
    padding: 10px 0 10px 15px;
}
.widget-table-two .table > tbody > tr > td:first-child {
    border-bottom-left-radius: 6px;
}
.widget-table-two .table > tbody > tr > td:last-child {
    border-top-right-radius: 6px;
    padding: 15.5px 15px 15.5px 0;
    text-align: right;
}
.widget-table-two .table > tbody > tr > td:last-child {
    border-bottom-right-radius: 6px;
}
.widget-table-two .table .td-content.customer-name {
    color: #bfc9d4;
}
.widget-table-two .table .td-content.product-brand {
    letter-spacing: 1px;
}
.widget-table-two .table .td-content img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 13px;
}
.widget-table-two .table tr > td:nth-last-child(2) .td-content {
    text-align: center;
}
.widget-table-two .table .td-content .badge {
    transform: none;
}
.widget-table-two .table tr:hover .td-content .badge {
    transform: translateY(-3px);
    background-color: transparent;
}
.widget-table-two .table tr .td-content .outline-badge-success {
    color: #009688;
    border-color: #009688;
}
[id*="apexcharts-donut-slice-"] {
    filter: none;
}

</style>
