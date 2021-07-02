<template>
    <div class="widget widget-one_hybrid widget-engagement">
        <div class="widget-heading">
            <!-- <div class="w-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </div> -->
            <h1>{{displayTotal}}</h1>
            <h5 class="">Total New Merchants</h5>
        </div>
        <div class="widget-content">
            <div class="w-chart">
                <div id="chart-total-new-merchants"></div>
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
            const result = await superagent.get(`${API_ENDPOINT}/stats/merchants`)
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
                fill: {
                    opacity: 1,
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
                series: [{
                    name: 'Merchants',
                    data: [ 58, 128, 250, 436, 660, 738, this.total ]
                }],
                labels: ['1', '2', '3', '4', '5', '6', '7'],
                yaxis: {
                    min: 0
                },
                colors: ['#009688'],
                tooltip: {
                    x: {
                        show: false,
                    }
                },
            }

            const chart = new ApexCharts(
                document.querySelector('#chart-total-new-merchants'), options)

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
