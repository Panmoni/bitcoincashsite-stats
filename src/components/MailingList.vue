<template>
    <div class="widget widget-card-one">
        <div class="widget-content">

            <div class="media">
                <div class="w-img">
                    <img src="assets/img/bitcoincashsite-150x150.png" alt="avatar">
                </div>
                <div class="media-body">
                    <h6>Join Our Mailing List</h6>
                    <p class="meta-date-time">Stay up-to-date with all our latest activities.</p>
                </div>
            </div>

            <div class="p-3">
                <!-- <h5>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </h5> -->

                <form class="email" novalidate action="javascript:void(0);">
                    <div class="form-row">
                        <div class="col-md-12 mb-4">
                            <label for="e_mail">Email</label>
                            <input type="email" class="form-control" id="e_mail" placeholder="" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please fill the Email
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-primary mb-4 mt-2" type="submit">Submit Email</button>
                </form>

                <!-- <div class="w-action">
                    <div class="card-like">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                        <span>551 subscribers</span>
                    </div>
                </div> -->

            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        msg: String
    }
}
</script>

<style scoped>
/*  */
</style>
