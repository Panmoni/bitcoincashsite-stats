<template>
    <div class="widget widget-card-two">
        <div class="widget-content">

            <div class="media">
                <div class="w-img">
                    <img src="assets/img/g-8.png" alt="avatar">
                </div>
                <div class="media-body">
                    <h6>Our 50 Newest People</h6>
                    <p class="meta-date-time">Help us welcome them to the Bitcoin family!</p>
                </div>
            </div>

            <div class="card-bottom-section">
                <!-- <h5>Last 50 people our team onboarded to Bitcoin</h5> -->
                <div class="img-group">
                    <img
                        v-for="person of newPeopleThumbs"
                        :key="person.id"
                        :src="person.thumb"
                        :alt="person.firstName + ' ' + person.lastName + '\n' + person.country"
                        :title="person.firstName + ' ' + person.lastName + '\n' + person.country"
                        class="person-thumb bs-tooltip"
                        @click="openPerson(person.id)"
                    >
                </div>
                <a href="javascript://" class="btn" @click="loadPeople">Show All ({{newPeopleDisplay}}) People</a>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="peopleModal" tabindex="-1" role="dialog" aria-labelledby="peopleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <!-- <div class="modal-header">
                        <h5 class="modal-title" id="peopleModalLabel">{{currentPersonName}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        </button>
                    </div> -->
                    <div class="modal-body">
                        <img :src="currentPersonUrl" width="100%" />
                    </div>
                    <div class="modal-footer">
                        {{currentPersonName}}
                        <!-- <button class="btn" data-dismiss="modal">Close</button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
/* global $ */

/* Import components. */
import numeral from 'numeral'
import superagent from 'superagent'

/* Set constants. */
const API_ENDPOINT = `https://api.bitcoincash.site/v1`
// const API_ENDPOINT = `http://localhost:8080/v1`

const NUM_PEOPLE_DISPLAYED = 50

export default {
    props: {
        msg: String
    },
    data: () => {
        return {
            people: null,
            thumbs: null,
            totalNewPeople: null,
            currentPersonName: null,
            currentPersonUrl: null,
        }
    },
    computed: {
        newPeopleDisplay() {
            if (!this.totalNewPeople) {
                return 'n/a'
            } else {
                return numeral(this.totalNewPeople).format('0,0')
            }
        },

        newPeopleThumbs() {
            if (!this.people || !this.people.length) {
                return []
            }

            const thumbs = []
            const reversed = JSON.parse(JSON.stringify(this.people)).reverse()

            for (let i = 0; i < NUM_PEOPLE_DISPLAYED; i++) {
                // FIXME: For now we just take the newest entries.
                thumbs.push(reversed[i])
            }

            return thumbs
        },
    },
    methods: {
        openPerson(_personid) {
            console.log('PERSON', _personid)

            const person = this.people.find(person => {
                return person.id === _personid
            })

            /* Set current person name. */
            this.currentPersonName = person.firstName + ' ' + person.lastName + ' • ' + person.country

            /* Set current person url. */
            this.currentPersonUrl = person.thumb

            $('#peopleModal').modal({
                show: true
            })
        },

        loadPeople() {
            this.$router.push('people')
        },

    },
    created: function () {
        this.people = []

        this.totalNewPeople = null

    },
    mounted: async function () {
        /* Request People data. */
        const response = await superagent.get(API_ENDPOINT + '/people')

        const data = response.body
        // console.log('People data:', data)

        /* Set number of people. */
        this.totalNewPeople = Object.keys(data).length

        /* Handle all photos. */
        Object.keys(data).forEach(_personid => {
            /* Set person. */
            const person = data[_personid]
            // console.log('PERSON', person)

            /* Validate wallet photo (thumbnails). */
            if (!person.walletPhoto || !person.walletPhoto[0].thumbnails) {
                return
            }

            /* Set thumbnail URL. */
            const id = person.id
            const firstName = person.firstName
            const lastName = person.lastName
            const country = person.country
            const thumb = person.walletPhoto[0].thumbnails.large.url

            /* Validate thumb. */
            if (thumb) {
                this.people.push({
                    id,
                    firstName,
                    lastName,
                    country,
                    thumb,
                })
            }

        })

    },
}
</script>

<style scoped>
.person-thumb {
    cursor: pointer;
}
</style>
