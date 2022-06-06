<template>
    <div>
<section id="team2-d" class="team2 cid-t3TJWWB4No mbr-parallax-background">
    
    <div class="mbr-overlay" style="opacity: 0.9; background-color: rgb(206, 191, 175);">
    </div>
    <div class="container">
        <div class="card">
            <div class="card-wrapper">
                <div class="row align-items-center">
                    <div class="col-12 col-md-5">
                        <div class="image-wrapper">
                            <img src="/assets/images/team1.jpg" alt="Mobirise">
                        </div>
                    </div>
                    <div class="col-12 col-md">
                        <div class="card-box">
                            <h5 class="card-title mbr-fonts-style m-0 display-5">
                                <strong>{{ loggedInUser.firstname }} {{ loggedInUser.lastname }}</strong>
                            </h5>
                            <h6 class="mbr-fonts-style mb-3 display-4">
                                <strong>{{ loggedInUser.email }}</strong>
                            </h6>
                            <p class="mbr-text mbr-fonts-style display-7">
                                A bit about you: {{ loggedInUser.email }}
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
</section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
      middleware: 'auth',
      head: {
          title: 'My Account'
      },
      computed: {
        ...mapGetters(['loggedInUser']),
      },
    }
</script>