<template>
    <div class="widget widget-one_hybrid widget-total-videos-count">
        <div class="widget-heading">
            <!-- <div class="w-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div> -->
            <h1>{{displayTotal}}</h1>
            <h5 class="">Total Videos Count</h5>
        </div>
    </div>
</template>

<script>
/* Import modules. */
import numeral from 'numeral'
import superagent from 'superagent'

const API_ENDPOINT = `https://api.bitcoincash.site/v1`
// const API_ENDPOINT = `http://localhost:8080/v1`

export default {
    data: () => {
        return {
            videos: null,
        }
    },
    computed: {
        displayTotal() {
            if (!this.videos) return 0

            return numeral(this.videos.length).format('0,0')
        }
    },
    methods: {
        async init() {
            const result = await superagent.get(`${API_ENDPOINT}/videos`)
            // console.log('RESULT', result)

            if (result.body) {
                const body = result.body
                // console.log('BODY:', body)

                Object.keys(body).forEach(videosid => {
                    this.videos.push(body[videosid])
                })
            }

        },

    },
    created: function () {
        this.videos = []

    },
    mounted: function () {
        this.init()

    }
}
</script>

<style scoped>
.widget-total-videos-count .widget-heading .w-icon {
    /* background-color: '#AAA039' */
    color: #fff;
    border: 1px solid #009688;
    background-color: #FF9671;

}
</style>
