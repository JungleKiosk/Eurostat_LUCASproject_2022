<script>
import { goalsArray } from "../data/goalsOnuGrid.js"
import Footer from '../components/Footer.vue';


export default {
    name: "Home",
    data() {
        return {
            goalsArray
        }
    },
    components: {
        Footer
    },
    methods: {
        getImagePath: function (name) {
            return new URL(`../assets/img/${name}`, import.meta.url).href
        }
    }
}


</script>


<template>
    <main>
        <section class="jumbotron">
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-12 col-lg-6 bg_row_img py-5 my-2 align-content-center introduce">
                        <h1><strong>Hi, I'm </strong><span class="txt_title_thin">FRA</span></h1>
                        <p>
                            I have a master's degree in Planning and Management of Agro-Territorial, Forest and
                            Landscape:
                            <a href="https://corsi.unibo.it/2cycle/LandscapePlanningManagement" target="_blank"><span
                                    class="txt_primary color_txt_link"> PROGESA</span> </a><br>
                            The study program contribute to the pursuit of the <br><span
                                class="txt_primary color_txt_link" target="_blank"> UN 2030 Agenda for
                            </span>
                            <a href="https://www.un.org/sustainabledevelopment/" target="_blank"><span
                                    class="txt_primary color_txt_link" target="_blank">Sustainable
                                    Development Goals.</span> </a> <br>
                            I have a passion for the environment and for technology.<br>
                        </p>
                        <hr>
                        <p>
                            In April 2022 I accepted an assignment from <a href="https://ec.europa.eu/eurostat"><span
                                    class="txt_primary color_txt_link">Eurostat</span></a> to
                            carry out
                            data collection for the <span class="txt_primary">LUCAS2022</span> project.
                        </p>
                        <p>
                            On this website you will find the explanation of how to optimize the work of the <span
                                class="txt_primary">LUCAS Detector</span>;
                            by the use of open source software.
                        </p>
                        <p>
                            If you want to know more about the LUCAS project click the button below.
                        </p>

                        <div class="link_lucas text-center py-2">
                            <a href="https://ec.europa.eu/eurostat/web/lucas"
                                class="btn text-light zoom-effect lucas_link" target="_blank"><strong>LUCAS
                                    website</strong></a>
                        </div>
                    </div>

                    <div class="col-12 col-lg-4 d-flex flex-wrap goals mx-4 col_goals_onu">
                        <div class="col-3 text-center p-2" v-for="goal in goalsArray" :key="goal.img">
                            <a :href="goal.link" target="_blank">
                                <img class="rounded-4 zoom-effect-goals" :src="getImagePath(goal.img)" alt="Goal Image">
                            </a>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12" style="height: 50px;"></div>
                </div>

                <div class="row justify-content-center my-2">
                    <div class="col-12 text-center ">
                        <h3>Estimated technical and logistical requirements</h3>
                    </div>
                    <div class="col-4 col-lg-6 req_list font-monospace text-center py-4">
                        <span class="py-2 "><span class="txt_title_thin">SHORTEST</span> route / </span>
                        <span class="py-2"><span class="txt_title_thin">VIABILITY</span> by car / </span>
                        <span class="py-2"><span class="txt_title_thin">WALKING</span> distance / </span>
                        <span class="py-2"><span class="txt_title_thin"> TRAVEL</span> time / </span>
                        <span class="py-2">daily <span class="txt_title_thin">CONSUPTION</span> / </span>
                        <span class="py-2"><span class="txt_title_thin">ECOLOGICAL</span> footprint</span>
                    </div>
                </div>


                <div class="row">
                    <div class="text-center mb-4">
                        <h1><span class=" txt_title_thin">STACK</span> </h1>
                    </div>
                    <div class="col-12 col-lg-3 mb-3">
                        <div class="card bg-dark text-white rounded-4">
                            <div class="text-center py-3">
                                <img class="text-center img_card" src="../assets/img/logo/qgis.png" alt="">
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Title</h4>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
                                    mollitia voluptas? Voluptatibus ratione minus excepturi enim harum possimus
                                    distinctio dolorem magni? Labore alias numquam totam a impedit quae quibusdam ab.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 mb-3">
                        <div class="card bg-dark text-white rounded-4">
                            <div class="text-center py-3">
                                <img class="text-center img_card" src="../assets/img/logo/python.svg" alt="">
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Title</h4>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
                                    mollitia voluptas? Voluptatibus ratione minus excepturi enim harum possimus
                                    distinctio dolorem magni? Labore alias numquam totam a impedit quae quibusdam ab.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 mb-3">
                        <div class="card bg-dark text-white rounded-4">
                            <div class="text-center py-3">
                                <img class="text-center img_card" src="../assets/img/logo/ge.png" alt="">
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Title</h4>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
                                    mollitia voluptas? Voluptatibus ratione minus excepturi enim harum possimus
                                    distinctio dolorem magni? Labore alias numquam totam a impedit quae quibusdam ab.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 mb-3">
                        <div class="card bg-dark text-white rounded-4">
                            <div class="text-center py-3">
                                <img class="text-center img_card" src="../assets/img/logo/gmaps.svg" alt="">
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Title</h4>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
                                    mollitia voluptas? Voluptatibus ratione minus excepturi enim harum possimus
                                    distinctio dolorem magni? Labore alias numquam totam a impedit quae quibusdam ab.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>
    <Footer></Footer>
</template>

<style >
.img_card {
    width: 50%;
}



</style>