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
                            <h3>Merchants</h3>
                        </div>

                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <router-link to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                    </router-link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Merchants</span></li>
                            </ol>
                        </nav>

                    </div>

                    <div class="row sales layout-top-spacing">

                        <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                            <div class="widget widget-chart-one">
                                <div class="widget-heading">
                                    <h5 class="">Total New Merchants</h5>
                                </div>

                                <div class="widget-content">
                                    <div class="tabs tab-content">
                                        <div id="content_1" class="tabcontent">
                                            <div id="revenueMonthly"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                            <div class="widget widget-chart-two">
                                <div class="widget-heading">
                                    <h5 class="">About The Merchants We ❤️</h5>
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

                    <div class="row sales">

                        <div
                            v-for="merchant of displayedMerchants"
                            :key="merchant.id"
                            class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing"
                        >
                            <div class="card component-card_9">
                                    <img :src="merchant.thumb" class="merchant-thumbnail" alt="widget-card-2">
                                    <div class="card-body">
                                        <p class="meta-date">{{merchant.firstName + ' ' + merchant.lastName}}</p>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div v-if="hasMoreEntries" class="show-more">
                        <img class="loading-ani" src="@/assets/loading.gif" />
                        <!-- <div class="btn-show-more" @click="showMoreEntries">Show More Merchants</div> -->
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
import numeral from 'numeral'
import superagent from 'superagent'

const API_ENDPOINT = `https://api.bitcoincash.site/v1`
// const API_ENDPOINT = `http://localhost:8080/v1`

/* Initialize constants. */
const ENTRIES_PER_PAGE = 9

export default {
    components: {
        //
    },
    data: () => {
        return {
            merchants: null,
            numDisplayed: null,
            hasMoreEntries: null,
            isLoading: null,
        }
    },
    computed: {
        displayedMerchants() {
            if (!this.merchants) {
                return []
            }

            const displayed = []

            for (let i = 0; i < this.numDisplayed; i++) {
                if (!this.merchants[i]) continue

                if (!this.merchants[i].thumb) continue

                displayed.push(this.merchants[i])
            }

            // TODO: Pagination does not work with this type of sorting.
            // displayed.sort(function (a, b) {
            //     if (a.name.toUpperCase() < b.name.toUpperCase()) {
            //         return -1
            //     }
            //     if (a.name.toUpperCase() > b.name.toUpperCase()) {
            //         return 1
            //     }
            //     return 0
            // })

            return displayed
        },

        numMerchantsDisplay() {
            return numeral(this.merchants.length).format('0,0')
        },
    },
    methods: {
        async init() {
            /* Initialize infinite scroll handler. */
            window.onscroll = () => {
                if ((window.innerHeight + window.pageYOffset + 75) >= document.body.offsetHeight) {
                    // NOTE: We add a slight delay for effect.
                    if (!this.isLoading) {
                        setTimeout(this.showMoreEntries, 1000)
                        this.isLoading = true
                    }
                }
            }

            /* Request Merchants data. */
            const response = await superagent.get(API_ENDPOINT + '/merchants')

            const data = response.body
            // console.log('Merchants data:', data)

            /* Handle all photos. */
            Object.keys(data).forEach(_merchantid => {
                /* Set merchant. */
                const merchant = data[_merchantid]
                // console.log('MERCHANT', merchant)

                /* Set thumbnail URL. */
                const id = merchant.id
                const firstName = merchant.firstName
                const lastName = merchant.lastName

                let thumb

                if (merchant.storefrontPhoto && merchant.storefrontPhoto[0] && merchant.storefrontPhoto[0].thumbnails) {
                    thumb = merchant.storefrontPhoto[0].thumbnails.large.url
                }

                /* Validate thumb. */
                this.merchants.push({
                    id,
                    firstName,
                    lastName,
                    thumb,
                })
            })

            /* Reverse the list. */
            this.merchants.reverse()

            // console.log('PEOPLE', this.merchants)
            if (this.merchants.length > this.numDisplayed) {
                this.hasMoreEntries = true
            }

            this.drawChart()

        },

        showMoreEntries() {
            // console.log('SHOW MORE ENTRIES');

            this.isLoading = false

            this.numDisplayed += ENTRIES_PER_PAGE

            if (this.numDisplayed > this.merchants.length) {
                this.numDisplayed = this.merchants.length
            }

            if (this.numDisplayed === this.merchants.length) {
                this.hasMoreEntries = false
            }
        },

        drawChart() {
            let chart
            let options

            options = {
                chart: {
                    fontFamily: 'Nunito, sans-serif',
                    height: 365,
                    type: 'area',
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: false
                    },
                },
                colors: ['#1b55e2', '#e7515a'],
                dataLabels: {
                    enabled: false
                },
                subtitle: {
                    text: 'Onboarded',
                    align: 'left',
                    margin: 0,
                    offsetX: -10,
                    offsetY: 35,
                    floating: false,
                    style: {
                        fontSize: '14px',
                        color:  '#888ea8'
                    }
                },
                title: {
                    text: this.numMerchantsDisplay,
                    align: 'left',
                    margin: 0,
                    offsetX: -10,
                    offsetY: 0,
                    floating: false,
                    style: {
                        fontSize: '25px',
                        color:  '#bfc9d4'
                    },
                },
                series: [{
                    name: 'Merchants',
                    data: [ 128, 250, 436, 660, 738, this.merchants.length ]
                }],
                labels: [ 'Jan', 'Feb', 'March', 'April', 'May', 'June' ],
                responsive: [{
                    breakpoint: 575,
                    options: {
                        legend: {
                            offsetY: -30,
                        },
                    },
                }]
            }

            chart = new ApexCharts(
                document.querySelector("#revenueMonthly"),
                options
            )
            chart.render()

        },

    },
    created: function () {
        this.merchants = []
        this.isLoading = false

        this.numDisplayed = ENTRIES_PER_PAGE
        this.hasMoreEntries = false
    },
    mounted: function () {
        this.init()

    },
}
</script>

<style scoped>
.merchant-thumbnail {
    height: 300px;
    object-fit: cover;
}

.show-more {
    display: flex;
    margin: 20px 0;
    padding: 15px;
    justify-content: center;
}
.btn-show-more {
    width: 300px;
    padding: 10px;

    border: 1pt solid rgba(90, 90, 180, 0.8);
    border-radius: 20px;

    font-size: 1.7em;
    text-align: center;
    color: white;
    cursor: pointer;

    background-color: rgba(30, 30, 180, 1.0);
}
.loading-ani {
    /*  */
}
</style>
