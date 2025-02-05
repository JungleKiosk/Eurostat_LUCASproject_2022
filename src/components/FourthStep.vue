<script>


import PyAddData from './partials/PyAddData.vue';
import PyShpToCsv from './partials/PyShpToCsv.vue';
import SliderCsvPivot from './partials/SliderCsvPivot.vue';
import ChartCo2 from './partials/ChartCo2.vue';
import ChartLenght from './partials/ChartLenght.vue';
import ChartFuel from './partials/ChartFuel.vue';
import ChartHours from './partials/ChartHours.vue';

export default {
    data() {

        return {
            canPlayVideo: this.checkVideoSupport(),
            showSlider: false,
            activeSlide: 0,
            totalSlides: 4,
            videos: [
                {
                    title: "4. Add data shape file by QGIS Python shell",
                    thumbnail: "https://img.youtube.com/vi/Nn0KPBUGFXQ/hqdefault.jpg",
                    link: "https://youtu.be/Nn0KPBUGFXQ?si=gMYiZbsknz63oWWi"
                }
            ],
        };
    }, components: { PyAddData, PyShpToCsv, SliderCsvPivot, ChartCo2, ChartLenght, ChartFuel, ChartHours },
    methods: {
        checkVideoSupport() {
            const video = document.createElement('video');
            const canPlay = video.canPlayType('video/mp4');
            return canPlay === 'probably' || canPlay === 'maybe';
        },
        toggleSlider() {
            this.showSlider = !this.showSlider; // Inverti il valore della variabile di stato
        },
        prevSlide() {
            this.activeSlide = (this.activeSlide - 1 + this.totalSlides) % this.totalSlides;
        },
        nextSlide() {
            this.activeSlide = (this.activeSlide + 1) % this.totalSlides;
        },
    }
}



</script>

<template>
    <main>
        <div class="container my_flow" id="step4">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-8">


                    <h2> <span class="txt_steps">Fourth Step: </span><span class="txt_title_thin">data entry
                            iteration</span></h2>
                    <p>
                        For calculating the fields of the Attribute Table
                        I wrote a little program in Python console, in order to iterate the process in a loop and
                        increase work efficiency; considering that the routes are in total about thirty
                        I saved a lot of time.
                    </p>


                    <div class="row justify-content-center mt-4">
                        <div v-for="(video, index) in videos" :key="index" class="col-12 col-lg-8">
                            <div class="card mb-4 bg-dark text-info fw-bold text-center">
                                <img :src="video.thumbnail" class="card-img-top" alt="Copertina Video">
                                <div class="card-body">
                                    <h5 class="card-title">{{ video.title }}</h5>
                                    <br>
                                    <a :href="video.link" target="_blank" class="btn btn-primary">Go to Video <img
                                            class="text-center zoom_yt" src="../assets/img/logo/yt.svg" alt=""></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PyAddData></PyAddData>
                    <p>
                        The output of the code is the following attribute table for each hand-modified shortest path,
                        where
                        you see the calculated variables:
                    <div>
                        <li> <span class="tile text-decoration-underline" title="1 + $id">id</span> = numerical
                            identification of the path
                        </li>
                        <li> <span class="tile text-decoration-underline" title="(' $length/1000' )">length_Km</span> =
                            length in kilometers of the route
                        </li>
                        <li> <span class="tile text-decoration-underline" title="('( length_Km/50)*60')">time</span> =
                            time
                            required with an average speed of 50km/h
                        </li>
                        <li> <span class="tile text-decoration-underline" title="('100/4.6')">km_L</span> = consumption
                            medium in uniform regime of my car
                        </li>
                        <li> <span class="tile text-decoration-underline"
                                title="('(( length_Km*2 )/ km_L)')">fuel_eurL</span> = fuel cost for the single path
                        </li>
                        <li> <span class="tile text-decoration-underline" title="('( length_Km*105 )')">CO2_gkm</span> =
                            carbon dioxide emitted by mine machine
                        </li>
                        <span><span></span> please note: the cost of fuel is to be referred to during the period of
                            rising
                            prices due to the war in Ukraine</span>
                    </div>
                    </p>
                    <p>
                        To better manage the data obtained and make statistics of it, I preferred my personal working
                        method,
                        to extrapolate all the Attribute Tables in CSV format, in order to have an easy-to-read dataset
                        from
                        <span class="tile text-decoration-underline"
                            title="In this way it was possible to estimate fuel consumption, in monetary terms and in terms of CO2 emissions.">import
                            in Excel.
                        </span><br>
                        <span class="imp_txt">
                        </span> <br>
                        To do this I wrote another little Python program for
                        optimize times.
                    </p>
                    <PyShpToCsv></PyShpToCsv>

                    <div class="row my-5" id="Stat">

                        <div class="col-12 col-lg-12">
                            <div class="slider_container">
                                <div class="slider" :style="{ transform: `translateX(-${activeSlide * 100}%)` }">

                                    <div class="slide" @click="nextSlide">
                                        <ChartFuel></ChartFuel>
                                    </div>
                                    <div class="slide" @click="nextSlide">
                                        <ChartCo2></ChartCo2>
                                    </div>
                                    <div class="slide" @click="nextSlide">
                                        <ChartLenght></ChartLenght>
                                    </div>
                                    <div class="slide" @click="nextSlide">
                                        <ChartHours></ChartHours>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <button class="btn text-light zoom-effect lucas_link my-4" @click="toggleSlider">{{ showSlider ?
                        'Hide Excel' : 'Original Excel' }}</button>

                    <SliderCsvPivot v-if="showSlider"></SliderCsvPivot>

                </div>

            </div>


        </div>

    </main>
</template>

<style scoped>
ul {
    list-style-type: none;
}

.zoom_yt{
    width: 10%;
}

.slider_container {
    overflow: hidden;
    width: 100%;
}

.slider {
    display: flex;
    transition: transform 0.3s ease-in-out;
}

.slide {
    flex: 0 0 100%;
}

button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>