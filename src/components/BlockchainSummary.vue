<template>
    <div class="widget widget-one">
        <div class="widget-heading">
            <h6 class="">Blockchain Summary</h6>
        </div>
        <div class="w-chart">
            <div class="w-chart-section">
                <div class="w-detail">
                    <p class="w-title">Current BCH Price</p>
                    <p class="w-stats">{{usd}}</p>
                </div>
                <div class="w-chart-render-one">
                    <div id="total-users"></div>
                </div>
            </div>

            <div class="w-chart-section">
                <div class="w-detail">
                    <p class="w-title">Current BCH Volume</p>
                    <p class="w-stats">~217k tx/day</p>
                </div>
                <div class="w-chart-render-one">
                    <div id="paid-visits"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* Import modules. */
import ApexCharts from 'apexcharts'
import numeral from 'numeral'
import superagent from 'superagent'

export default {
    props: {
        msg: String
    },
    data: () => {
        return {
            usd: null,
        }
    },
    methods: {
        async init() {
            console.log('Initializing blockchain summary..')

            this.usd = 'n/a'

            const result = await superagent.get('https://api.telr.io/v1/ticker/quote/BCH')
            console.log('RESULT', result)

            if (result.body) {
                const body = result.body

                const price = body.price
                this.usd = numeral(price.toFixed(2)).format('$0,0.00')
            }
        }
    },
    created: function () {
        this.init()
    },
    mounted: function () {

        let chart
        let spark

        spark = {
            chart: {
                id: 'unique-visits',
                group: 'sparks2',
                type: 'line',
                height: 80,
                sparkline: {
                    enabled: true
                },
                dropShadow: {
                    enabled: true,
                    top: 1,
                    left: 1,
                    blur: 2,
                    color: '#e2a03f',
                    opacity: 0.7,
                }
            },
            series: [{
                data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25]
            }],
            stroke: {
              curve: 'smooth',
              width: 2,
            },
            markers: {
                size: 0
            },
            grid: {
              padding: {
                top: 35,
                bottom: 0,
                left: 40
              }
            },
            colors: ['#e2a03f'],
            tooltip: {
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function formatter() {
                            return '';
                        }
                    }
                }
            },
            responsive: [{
                breakpoint: 1351,
                options: {
                   chart: {
                      height: 95,
                  },
                  grid: {
                      padding: {
                        top: 35,
                        bottom: 0,
                        left: 0
                      }
                  },
                },
            },
            {
                breakpoint: 1200,
                options: {
                   chart: {
                      height: 80,
                  },
                  grid: {
                      padding: {
                        top: 35,
                        bottom: 0,
                        left: 40
                      }
                  },
                },
            },
            {
                breakpoint: 576,
                options: {
                   chart: {
                      height: 95,
                  },
                  grid: {
                      padding: {
                        top: 45,
                        bottom: 0,
                        left: 0
                      }
                  },
                },
            }

            ]
        }

        chart = new ApexCharts(document.querySelector("#total-users"), spark)
        chart.render()

        spark = {
            chart: {
              id: 'total-users',
              group: 'sparks1',
              type: 'line',
              height: 80,
              sparkline: {
                enabled: true
              },
              dropShadow: {
                enabled: true,
                top: 3,
                left: 1,
                blur: 3,
                color: '#009688',
                opacity: 0.7,
              }
            },
            series: [{
              data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69]
            }],
            stroke: {
              curve: 'smooth',
              width: 2,
            },
            markers: {
              size: 0
            },
            grid: {
              padding: {
                top: 35,
                bottom: 0,
                left: 40
              }
            },
            colors: ['#009688'],
            tooltip: {
              x: {
                show: false
              },
              y: {
                title: {
                  formatter: function formatter() {
                    return '';
                  }
                }
              }
            },
            responsive: [{
                breakpoint: 1351,
                options: {
                   chart: {
                      height: 95,
                  },
                  grid: {
                      padding: {
                        top: 35,
                        bottom: 0,
                        left: 0
                      }
                  },
                },
            },
            {
                breakpoint: 1200,
                options: {
                   chart: {
                      height: 80,
                  },
                  grid: {
                      padding: {
                        top: 35,
                        bottom: 0,
                        left: 40
                      }
                  },
                },
            },
            {
                breakpoint: 576,
                options: {
                   chart: {
                      height: 95,
                  },
                  grid: {
                      padding: {
                        top: 35,
                        bottom: 0,
                        left: 0
                      }
                  },
                },
            }
            ]
        }

        chart = new ApexCharts(document.querySelector("#paid-visits"), spark)
        chart.render()


    },
}
</script>

<style scoped>
/*  */
</style>
