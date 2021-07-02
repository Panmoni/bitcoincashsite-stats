<template>
    <div class="widget widget-one_hybrid widget-referral">
        <div class="widget-heading">
            <!-- <div class="w-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div> -->
            <h1>{{displayTotal}}</h1>
            <h5 class="">Total New Contractors</h5>
        </div>

        <div class="widget-content">
            <div class="w-chart">
                <div id="chart-total-new-contractors"></div>
            </div>
        </div>
    </div>
</template>

<script>
/* Import modules. */
import ApexCharts from 'apexcharts'
import numeral from 'numeral'
import superagent from 'superagent'

const API_ENDPOINT = `https://api.bitcoincash.site/v1`
// const API_ENDPOINT = `http://localhost:8080/v1`

export default {
    data: () => {
        return {
            total: null,
        }
    },
    computed: {
        displayTotal() {
            if (!this.total) return 0

            return numeral(this.total).format('0,0')
        }
    },
    methods: {
        async init() {
            const result = await superagent.get(`${API_ENDPOINT}/stats/contractors`)
            // console.log('RESULT', result)

            if (result.body) {
                const body = result.body
                // console.log('BODY:', body)

                if (body.total) {
                    this.total = body.total

                    this.drawGraph()
                }
            }

        },

        drawGraph() {
            const options = {
                chart: {
                    id: 'sparkline1',
                    type: 'area',
                    height: 100,
                    sparkline: {
                        enabled: true
                    },
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                },
                series: [{
                    name: 'Contractors',
                    data: [ 38, 51, 62, 75, 93, 138, this.total ]
                }],
                labels: ['1', '2', '3', '4', '5', '6', '7'],
                yaxis: {
                    min: 0
                },
                colors: ['#AAA039'],
                tooltip: {
                    x: {
                        show: false,
                    }
                },
                fill: {
                    type:"gradient",
                    gradient: {
                        type: "vertical",
                        shadeIntensity: 1,
                        inverseColors: !1,
                        opacityFrom: .40,
                        opacityTo: .05,
                        stops: [45, 100]
                    }
                },
            }

            const chart = new ApexCharts(
                document.querySelector('#chart-total-new-contractors'), options)

            chart.render()

        },

    },
    created: function () {
        this.total = 0

    },
    mounted: function () {
        this.init()

    }
}
</script>

<style scoped>
/*  */
</style>
