<script>
import Footer from '../components/Footer.vue';

export default {
    name: "Home",
    data() {
        return {
        }
    },
    components: {
        Footer
    }
}
</script>


<template>


    <div class="container mt-5" id="Results">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-8">
                <h1>Final <span class="txt_title_thin">Objective</span> </h1>
                <p>
                    The final result of the processing is the creation of a map with <span class="txt_primary">Google My
                        Maps</span>, <br>
                    so as to always have the LUCAS points at hand, which can be consulted quickly and easily by my
                    iPhone,
                    optimize travel and estimate consumption.
                </p>
                <p>
                    By clicking on the button below you can find my personal map in Google My Maps: you will find the
                    LUCAS
                    points, by clicking on the
                    points you will find the <span class="txt_primary">LUCAS Parameters</span> and the relative
                    technical data.
                </p>
                <div class="row justify-content-center text-center">
                    <div class="col-12 col-lg-8 my-5">
                        <a href="https://www.google.com/maps/d/u/0/edit?mid=1fXFFRXNA9Tg7fX0YhKVYhGJwM2-iqa4&usp=sharing"
                            class="btn text-light lucas_link zoom-effect" target="_blank"><strong>Google My
                                Maps</strong>
                        </a>
                        <p class="my-2">Click on the points <br> and routes to view data</p>
                        <p> <small><span class="txt_note">Please note:</span> <br> You will see the points all colored
                                green
                                and
                                purple because
                                as of
                                today the work, therefore the daily update, is finished.</small> </p>
                    </div>
                </div>

                <p>
                    Furthermore, I was able to use the mobile phone holder of my car, without having to resort to the
                    navigator of
                    the tablet provided to me as a work tool to carry out the measurements.
                </p>
                <p>
                    The final result of the processing is the creation of a map with Google My Maps,
                    so as to always have the LUCAS points at hand, which can be consulted quickly and easily from my
                    iPhone. <br>
                    I was able to use my car's mobile phone holder, without having to resort to the navigator on the
                    tablet
                    provided to me as a work tool to carry out the surveys: in addition to being cumbersome to use while
                    driving,
                    road navigation software does not have the same performance as Google Maps ( for example: warning of
                    busy
                    roads, blocked roads, voice navigation...)
                </p>

                <p>
                    Moreover, in this way, I had the data relating to each route at hand, so as to be able to confirm
                    the
                    estimates made:
                <ul>
                    <li class="txt_primary"><strong>path length</strong></li>
                    <li class="txt_primary"><strong>travel time</strong></li>
                    <li class="txt_primary"><strong>fuel consumption</strong></li>
                    <li class="txt_primary"><strong>fuel cost</strong></li>
                    <li class="txt_primary"><strong>carbon dioxide emissions</strong></li>

                </ul>
                </p>

                <p>
                    At the end of the working day, in addition to arranging the collected data in the Eurostat
                    management system
                    ( <a href="https://www.lucassurvey.com/dmt/viewer" target="_blank"><span
                            class="txt_primary color_txt_link">DMT
                            Viewer</span></a>), I was in charge of managing my personal
                    work schedule, in order to update the map daily and
                    distinguish at a glance points beaten from those still to visit. This through the stylization of the
                    points in
                    Google My Maps, changing color: <br>
                <ul>
                    <span>Default:</span>
                    <li><span style="color:red">Red</span> points = NOT visited points</li>
                    <li><span style="color:yellow">Yellow</span> points = NOT visited soil sampling</li>
                    <br>
                    <span>Daily changes:</span>
                    <li><span style="color:greenyellow">Green</span> points = visited points</li>
                    <li><span style="color:rgb(180, 88, 226)">Purple</span> points = visited soil sampling </li>
                </ul>
                </p>
                <br>
                <p>The following <span class="txt_primary">video</span> will give you an idea of my personal work
                    organization.
                </p>
                <div class="line"></div>
                <h4 class="text-center">What you <span class="txt_primary">will See</span></h4>
                <p>
                    <span class="txt_title_thin">Starting the video</span>, you will see my daily workflow. <br>
                    This is the final <span class="txt_title_thin">Results</span>, below you will find all the
                    elaboration <span class="txt_title_thin">Steps</span> (scroll up to view the menu). <br>
                    For my personal organizational
                    convenience,
                    I preferred to discriminate
                    the points with the <span class="txt_title_thin">Soil</span> parameter (yellow points)
                    in order to be able to better manage
                    the collected soil samples.
                    These had to be
                    sent to the laboratory
                    for the relative soil analyses,
                    therefore delivery times
                    were a factor
                    in the goodness
                    of the data collected.
                </p>

                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-3 col-lg-2 text-center">
                            <a href="https://www.youtube.com/watch?v=3JjZnE-iQ6M&list=PLR8J_sq3CKNeNDxQ5qduA0e1RSphD2sfV"
                                target="_blank">
                                <img class="text-center zoom_yt" src="../assets/img/logo/yt.svg" alt="">
                            </a>
                            <span>Click</span>
                        </div>
                    </div>
                </div>



                <hr>
                <div class="line my-5"></div>
                <h2 class="text-center ">But ...</h2>
                <h2 class="text-center">... How to develop a map useful for your goals?</h2>
                <hr>


                <p class="text-center my-5">
                    The purpose of the following sage is to show my personal organization of the surveyor's work LUCAS,
                    to
                    optimize travel in temporal, economic and ecological terms, trying to achieve a good "work economy".
                    <br>
                    The purpose of this document is to explain my personal organization, illustrating for STEP the
                    techniques used
                    for the elaboration of a work map, in order to optimize daily travel.
                </p>

                <p>

                    I want to clarify that the flow methods are the result of my personal logic, which means that
                    the same
                    result can be achieved in other ways and with other technologies. I remain open to constructive
                    criticism and
                    advice, fuel of the open source world

                </p>

                <div class="line my-5"></div>


            </div>
        </div>
    </div>
    <Footer></Footer>

</template>

<style></style>