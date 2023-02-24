<template>
    <div>
        <v-row>
            <v-col cols="9">
                <h5>Users Directory</h5>
            </v-col>

            <v-col cols="3">
                <addUser />
            </v-col>
        </v-row>
        <section class="team1 cid-tvKEWW53Yo" id="team1-14">



<div class="container">
    <div class="row justify-content-center">

        <div class="col-sm-6 col-lg-3">
            <div class="card-wrap">
                <div class="image-wrap">
                    <img src="../../assets/images/team1.jpg">
                </div>
                <div class="content-wrap">
                    <h5 class="mbr-section-title card-title mbr-fonts-style align-center m-0 display-7">
                        <strong>John Smith</strong>
                    </h5>
                    <h6 class="mbr-role mbr-fonts-style align-center mb-3 display-4">
                        <strong>Programmer</strong>
                    </h6>



                </div>
            </div>
        </div>
    </div>
</div>
</section>
    </div>
</template>

<script>
import addUser from './addCustomer/add-user.vue'

    export default {
        components: { addUser },
        data() {
            return {
                search: '',
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Users'
    })
</script>