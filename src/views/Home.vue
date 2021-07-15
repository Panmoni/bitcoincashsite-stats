<template>
    <main>

        <!-- BEGIN LOADER -->
        <div id="load_screen" v-if="showLoading"> <div class="loader"> <div class="loader-content">
            <div class="spinner-grow align-self-center"></div>
        </div></div></div>
        <!--  END LOADER -->

        <!-- <Navbar /> -->

        <!--  BEGIN MAIN CONTAINER  -->
        <div class="main-container" id="container">

            <div class="overlay"></div>
            <div class="search-overlay"></div>

            <!--  BEGIN CONTENT PART  -->
            <div id="content" class="main-content">
                <div class="layout-px-spacing">

                    <div class="page-header text-white">
                        <div class="page-title">
                            <h3>BitcoinCashSite Statistics</h3>
                        </div>

                        <div v-if="usd">
                            BCH/USD &bullet; {{usd}} <small>({{displayPctChg}})</small>
                        </div>
                        <div v-else>
                            loading...
                        </div>
                    </div>

                    <div class="row layout-top-spacing">

                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing clickable" @click="loadPeople">
                            <TotalNewPeople />
                        </div>

                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing clickable" @click="loadMerchants">
                            <TotalNewMerchants />
                        </div>

                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing clickable" @click="loadContractors">
                            <TotalContractorCount />
                        </div>

                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing clickable" @click="loadCities">
                            <TotalActiveCities />
                        </div>

                        <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                            <!-- <Spotlight /> -->
                            <NewestPeople />
                        </div>

                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                            <MailingList />
                        </div>

                        <!-- <div class="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                            <BlockchainSummary />
                        </div> -->

                        <!-- <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
                            <Expenses />
                        </div> -->

                        <!-- <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
                            <Ads />
                        </div> -->

                    </div>

                    <div class="row layout-top-spacing">

                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                            <div class="row widget-statistic">

                                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3" @click="loadEvents">
                                    <TotalEventCount />
                                </div>

                                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3" @click="loadFeedback">
                                    <TotalFeedbackCount />
                                </div>

                                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" @click="loadVideos">
                                    <TotalVideoCount />
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="row layout-top-spacing">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing clickable" @click="loadCourses">
                            <TotalActiveCourses />
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
            <!--  END CONTENT PART  -->

        </div>
        <!-- END MAIN CONTAINER -->

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Page is still in development...</h5>
                        <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <svg> ... </svg>
                        </button> -->
                    </div>
                    <!-- <div class="modal-body">
                        <p class="modal-text">Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. </p>
                    </div> -->
                    <div class="modal-footer">
                        <button class="btn" data-dismiss="modal"><i class="flaticon-cancel-12"></i> Dismiss</button>
                        <!-- <button type="button" class="btn btn-primary">Save</button> -->
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>

<script>
/* Import modules. */
import numeral from 'numeral'
import superagent from 'superagent'

/* Import components. */
// import Ads from '@/components/Ads.vue'
// import BlockchainSummary from '@/components/BlockchainSummary.vue'
// import Expenses from '@/components/Expenses.vue'
import Footer from '@/components/Footer.vue'
import MailingList from '@/components/MailingList.vue'
import NewestPeople from '@/components/NewestPeople.vue'
// import Spotlight from '@/components/Spotlight.vue'
import TotalActiveCities from '@/components/TotalActiveCities.vue'
import TotalActiveCourses from '@/components/TotalActiveCourses.vue'
import TotalContractorCount from '@/components/TotalContractorCount.vue'
// import TotalEmailCount from '@/components/TotalEmailCount.vue'
import TotalEventCount from '@/components/TotalEventCount.vue'
import TotalFeedbackCount from '@/components/TotalFeedbackCount.vue'
import TotalNewMerchants from '@/components/TotalNewMerchants.vue'
import TotalNewPeople from '@/components/TotalNewPeople.vue'
import TotalVideoCount from '@/components/TotalVideoCount.vue'

export default {
    components: {
        // Ads,
        // BlockchainSummary,
        // Expenses,
        Footer,
        MailingList,
        NewestPeople,
        // Spotlight,
        TotalActiveCities,
        TotalActiveCourses,
        TotalContractorCount,
        // TotalEmailCount,
        TotalEventCount,
        TotalFeedbackCount,
        TotalNewMerchants,
        TotalNewPeople,
        TotalVideoCount,
    },
    data: () => {
        return {
            showLoading: null,
            usd: null,
            change24h: null,
        }
    },
    computed: {
        displayPctChg() {
            if (!this.change24h) {
                return 'n/a'
            }

            if (this.change24h > 0) {
                return '+' + numeral(this.change24h / 100.0).format('0.00%')
            } else {
                return numeral(this.change24h / 100.0).format('0.00%')
            }

        },
    },
    methods: {
        async init() {
            console.log('Initializing blockchain summary..')

            const result = await superagent.get('https://api.telr.io/v1/ticker/quote/BCH')
            // console.log('RESULT', result)

            if (result.body) {
                const body = result.body
                // console.log('QUOTE (body):', body)

                const price = body.price
                this.usd = numeral(price.toFixed(2)).format('$0,0.00')

                this.change24h = body.percent_change_24h
            }
        },

        loadCities() {
            this.$router.push('cities')
        },

        loadContractors() {
            this.$router.push('contractors')
        },

        loadEmails() {
            this.$router.push('emails')
        },

        loadCourses() {
            this.$router.push('courses')
        },

        loadEvents() {
            // this.$router.push('events')
        },

        loadFeedback() {
            // this.$router.push('feedback')
        },

        loadMerchants() {
            this.$router.push('merchants')
        },

        loadPeople() {
            this.$router.push('people')
        },

        loadVideos() {
            // this.$router.push('videos')
        },

    },
    created: function () {
        this.showLoading = false

        this.init()
    },
    mounted: function () {
        // $('#exampleModal').modal('show')
    },
}
</script>

<style scoped>
/*  */
</style>
