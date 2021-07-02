<template>
    <div class="widget widget-one_hybrid widget-total-email-count">
        <div class="widget-heading">
            <!-- <div class="w-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div> -->
            <p class="w-value">941</p>
            <h5 class="">Total Email Count</h5>
        </div>

        <div class="widget-content">
            <div class="w-chart">
                <div id="chart-total-email-count"></div>
            </div>
        </div>
    </div>
</template>

<script>
/* Import modules. */
import ApexCharts from 'apexcharts'

export default {
    props: {
        msg: String
    },
    mounted: function () {

        const options = {
            chart: {
                id: 'sparkline1',
                type: 'area',
                height: 80,
                sparkline: {
                    enabled: true
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            series: [{
                name: 'Sales',
                data: [38, 60, 38, 52, 36, 40, 28 ]
            }],
            labels: ['1', '2', '3', '4', '5', '6', '7'],
            yaxis: {
                min: 0
            },
            colors: ['#B39CD0'],
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
            document.querySelector('#chart-total-email-count'), options)

        chart.render()

    }
}
</script>

<style scoped>
.widget-total-email-count .widget-heading .w-icon {
    /* background-color: '#AAA039' */
    color: #fff;
    border: 1px solid #009688;
    background-color: #B39CD0;

}
</style>
