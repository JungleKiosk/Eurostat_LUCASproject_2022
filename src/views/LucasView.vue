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

    <div class="container post_jumbo">
        <div class="row justify-content-center ">
            <div class="col-12 col-lg-8 bg_row_img py-4 assignament my-5">

                <h1>What is LUCAS project?</h1>

                <p>The land use / cover area frame survey (LUCAS) is an in-situ survey. It provides detailed information
                    on specific points as well as harmonised and comparable statistics on land use and land cover for
                    the EU territory.

                    3 types of information are obtained from LUCAS surveys:

                </p>

                <ul>
                    <li>microdata: land cover, land use, and environmental parameters associated with the individual
                        points
                        surveyed</li>
                    <li>point and landscape photos in the 4 cardinal directions</li>
                    <li>estimates on land cover and land use, which are produced from microdata based on weighted point
                        data. </li>

                </ul>
                
                <h1>LUCAS <span class="txt_title_thin">Assignament</span> </h1>
                <p>
                    The assignment required data collection at points, of precise coordinates, falling
                    within
                    the
                    province of Verona.<br>
                    The LUCAS data relate to land use and land cover; they tend to be of an agro-forestry
                    nature.
                </p>

                <p>
                    In practical terms, the job was to reach LUCAS points and collect the required data for
                    that
                    particular point, according to the LUCAS regulations and parameters.
                </p>
                <p>
                    The data collection also included <strong>georeferenced photographic images</strong>
                    taken
                    in the North,
                    East,
                    South and West <strong>(NESO)</strong>
                </p>
                <p>
                    This was done with a tablet configured with the dedicated MyLUCAS software, which showed
                    the
                    surveyor's LUCAS points, the relevant forms to be filled in and the section with which
                    to
                    take
                    the georeferenced NESO photographs. <br>

                </p>


            </div>


            <div class="col-12 col-lg-8 py-5 d-flex flex-wrap justify-content-center parameters mb-5">
                <h1 class="text-center">LUCAS <span class="txt_title_thin">Parameters</span></h1>

                <div class="col-11 col-lg-11 param_item">
                    <a href="https://land.copernicus.eu/imagery-in-situ/lucas">
                        <img src="../assets/img/parameters/Copernicus.png" alt="" target="_blank">
                    </a>
                </div>

                <div class="col-4 col-lg-3 px-3 param_item">
                    <a href="https://www.fao.org/3/ap862e/ap862e00.pdf">
                        <img src="../assets/img/parameters/FAO_logo.svg" alt="" target="_blank">
                    </a>
                </div>

                <div class="col-4 col-lg-3 px-3 param_item">
                    <a href="https://inspire.ec.europa.eu/">
                        <img src="../assets/img/parameters/inspirre_logo.png" alt="" target="_blank">
                    </a>
                </div>

                <div class="col-4 col-lg-3 px-3 param_item">
                    <a href="https://ec.europa.eu/eurostat/documents/205002/9722562/Grassland-Modelling-Report.pdf">
                        <img class=" rounded-3" src="../assets/img/parameters/grassland.jpg" alt="" target="_blank">
                    </a>
                </div>

            </div>

        </div>
    </div>



    <Footer></Footer>

</template>

<style>
.img_copernicus {
    width: 90%;
}

.img_parameters {
    width: 80%;
}
</style>