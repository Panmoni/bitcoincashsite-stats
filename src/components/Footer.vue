<template>
    <main>
        <hr>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                <div class="row widget-statistic">

                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <h3 class="text-success">Our Favorite Links</h3>

                        <ul>
                            <li><a href="https://bitcoincashsite.com/" target="_blank">https://bitcoincashsite.com</a></li>
                            <li><a href="https://twitter.com/bitcoincashsite" target="_blank">https://twitter.com/bitcoincashsite</a></li>
                            <li><a href="https://instagram.com/bitcoincashsite" target="_blank">https://instagram.com/bitcoincashsite</a></li>
                            <li><a href="https://noise.cash/u/bitcoincashsite" target="_blank">https://noise.cash/u/bitcoincashsite</a></li>
                            <li><a href="https://read.cash/@bitcoincashsite" target="_blank">https://read.cash/@bitcoincashsite</a></li>
                            <li><a href="https://facebook.com/bitcoincashsite" target="_blank">https://facebook.com/bitcoincashsite</a></li>
                            <li><a href="https://www.youtube.com/channel/UCIUzqEAs08a_IJFQHBu8abg" target="_blank">YouTube Channel</a></li>
                            <li><a href="https://twitter.com/bchlatam" target="_blank">https://twitter.com/bchlatam (Spanish)</a></li>
                            <li><a href="https://instagram.com/bchlatam" target="_blank">https://instagram.com/bchlatam</a></li>
                            <li><a href="https://noise.cash/u/bchlatam" target="_blank">https://noise.cash/u/bchlatam</a></li>
                            <li><a href="https://read.cash/@bchlatam" target="_blank">https://read.cash/@bchlatam</a></li>
                            <li><a href="https://facebook.com/bchlatam" target="_blank">https://facebook.com/bchlatam</a></li>
                            <li><a href="https://www.youtube.com/channel/UCjizxJYH0K7oYhW6gQ9iG4g" target="_blank">Bitcoin Cash Latam YouTube</a></li>
                            <li><a href="https://www.reddit.com/r/btc/" target="_blank">https://www.reddit.com/r/btc</a></li>
                            <li><a href="https://www.reddit.com/r/bitcoincash/" target="_blank">https://www.reddit.com/r/bitcoincash</a></li>
                        </ul>
                    </div>

                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <h3 class="text-success">Contact Us</h3>

                        <a mailto="hello@panmoni.com">hello@panmoni.com</a>

                        <div v-if="posts.length">
                            <hr />

                            <h3 class="mb-4 text-success">From Our Blog</h3>

                            <a v-if="posts[0]" :href="posts[0].url" target="_blank">
                                <h4>{{posts[0].title}}</h4>
                                <p>{{posts[0].description}}</p>
                            </a>

                            <hr />

                            <a v-if="posts[1]" :href="posts[1].url" target="_blank">
                                <h4>{{posts[1].title}}</h4>
                                <p>{{posts[1].description}}</p>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        <div class="footer-wrapper">
            <div class="footer-section f-section-1">
                <p class="">
                    Copyright &copy; 2021 <a href="https://panmoni.com" target="_blank">Panmoni</a>. All rights reserved.
                </p>
            </div>

            <div class="footer-section f-section-2">
                <p class="">
                    Built &amp; maintained by <a href="https://modenero.com" target="_blank">modenero</a>.
                </p>
            </div>
        </div>
    </main>
</template>

<script>
/* Import modules. */
import superagent from 'superagent'

const API_ENDPOINT = `https://api.bitcoincash.site/v1`
// const API_ENDPOINT = `http://localhost:8080/v1`

export default {
    data: () => {
        return {
            posts: null,
        }
    },
    methods: {
        async init() {
            const result = await superagent.get(`${API_ENDPOINT}/feed/`)
            // console.log('RESULT (footer):', result)

            if (result.text) {
                const body = result.text
                // console.log('BODY (footer):', body)

                const parsed = new window.DOMParser().parseFromString(body, 'text/xml')
                // console.log('PARSED (footer):', parsed)

                const items = parsed.querySelectorAll('item')
                // console.log('ITEMS', items)

                items.forEach(item => {
                    const id = item.querySelector('guid').innerHTML
                    const title = item.querySelector('title').innerHTML
                    const description = item.querySelector('description').innerHTML
                        .replace('<![CDATA[', '')
                        .replace(']]>', '')
                    const url = item.querySelector('guid').innerHTML

                    this.posts.push({
                        id,
                        title,
                        description,
                        url,
                    })
                })

            }

        },


    },
    created: function () {
        this.posts = []

        this.init()
    },
    mounted: function () {

    },
}
</script>

<style scoped>
/*  */
</style>
