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
                        <h5 class="mbr-section-title card-title mbr-fonts-style align-center m-0 display-5">
                            <strong>John Smith</strong>
                        </h5>
                        <h6 class="mbr-role mbr-fonts-style align-center mb-3 display-4">
                            <strong>Programmer</strong>
                        </h6>
                        
                        
                        
                    </div>
                </div>
            </div>

            <div class="col-sm-6 col-lg-3">
                <div class="card-wrap">
                    <div class="image-wrap">
                        <img src="../../assets/images/team2.jpg">
                    </div>
                    <div class="content-wrap">
                        <h5 class="mbr-section-title card-title mbr-fonts-style align-center m-0 display-5">
                            <strong>Sarah Palmer</strong>
                        </h5>
                        <h6 class="mbr-role mbr-fonts-style align-center mb-3 display-4">
                            <strong>Manager</strong>
                        </h6>
                        
                        
                        
                    </div>
                </div>
            </div>

            <div class="col-sm-6 col-lg-3">
                <div class="card-wrap">
                    <div class="image-wrap">
                        <img src="../../assets/images/team3.jpg">
                    </div>
                    <div class="content-wrap">
                        <h5 class="mbr-section-title card-title mbr-fonts-style align-center m-0 display-5">
                            <strong>Jessica Swift</strong>
                        </h5>
                        <h6 class="mbr-role mbr-fonts-style align-center mb-3 display-4">
                            <strong>Analyst</strong>
                        </h6>
                        
                        
                        
                    </div>
                </div>
            </div>

            <div class="col-sm-6 col-lg-3">
                <div class="card-wrap">
                    <div class="image-wrap">
                        <img src="../../assets/images/team4.jpg">
                    </div>
                    <div class="content-wrap">
                        <h5 class="mbr-section-title card-title mbr-fonts-style align-center m-0 display-5">
                            <strong>Helen Smith</strong>
                        </h5>
                        <h6 class="mbr-role mbr-fonts-style align-center mb-3 display-4">
                            <strong>Designer</strong>
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
    }
</script>

<script setup>
    useHead({
        title: 'Users'
    })
</script>