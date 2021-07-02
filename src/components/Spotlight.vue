<template>
    <div class="widget widget-chart-three">
        <div class="widget-heading">
            <div class="">
                <h5 class="">Onboarding Spotlight</h5>
            </div>

            <div class="dropdown  custom-dropdown">
                <a class="dropdown-toggle" href="index.html#" role="button" id="uniqueVisitors" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                </a>

                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="uniqueVisitors">
                    <a class="dropdown-item" href="javascript://">Open Full</a>
                    <a class="dropdown-item" href="javascript://">Download</a>
                </div>
            </div>
        </div>

        <div class="widget-content">
            <div id="chart-spotlight"></div>
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
              height: 350,
              type: 'bar',
              toolbar: {
                show: false,
              },
              dropShadow: {
                  enabled: true,
                  top: 1,
                  left: 1,
                  blur: 1,
                  color: '#515365',
                  opacity: 0.3,
              }
          },
          colors: ['#5c1ac3', '#ffbb44'],
          plotOptions: {
              bar: {
                  horizontal: false,
                  columnWidth: '55%',
                  endingShape: 'rounded'
              },
          },
          dataLabels: {
              enabled: false
          },
          legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '14px',
                markers: {
                  width: 10,
                  height: 10,
                },
                itemMargin: {
                  horizontal: 0,
                  vertical: 8
                }
          },
          grid: {
            borderColor: '#191e3a',
          },
          stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
          },
          series: [{
              name: 'Merchants',
              data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63]
          }, {
              name: 'People',
              data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70]
          }],
          xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'vertical',
              shadeIntensity: 0.3,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 0.8,
              stops: [0, 100]
            }
          },
          tooltip: {
            theme: 'dark',
              y: {
                  formatter: function (val) {
                      return val
                  }
              }
          }
        }

        const chart = new ApexCharts(document.querySelector("#chart-spotlight"), options)
        chart.render()

    },
}
</script>

<style scoped>
/*  */
</style>
