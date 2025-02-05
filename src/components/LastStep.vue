<script>


export default {
    data() {

        return {

            videos: [
                {
                    title: "5. Join Excel to Attribute Table by QGIS",
                    thumbnail: "https://img.youtube.com/vi/AOFmzcMYqbw/hqdefault.jpg",
                    link: "https://youtu.be/AOFmzcMYqbw?si=rlltZo840ph2a1O9"
                }
                ,
                {
                    title: "6.  From Shape file to KML by MMQGIS",
                    thumbnail: "https://img.youtube.com/vi/-joRX934yrg/hqdefault.jpg",
                    link: "https://youtu.be/-joRX934yrg?si=UPllPG6bXTAV3oXr"
                }
            ]
        };
    }

}



</script>

<template>
    <main>
        <div class="container my_flow margin_final" id="step5">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-8">
                    <h2> <span class="txt_steps">Fifth Step: </span><span class="txt_title_thin">import into Google My
                            Maps</span></h2>
                    <p>
                        for personal convenience I prefer to use the mobile phone as a navigator to reach the vicinity
                        of
                        the point
                        Lucas by car. To do this it is necessary to transform the SHP obtained from the previous
                        explanations into KML or
                        another format that can be loaded in the MyMaps Google environment. To do this, you can proceed
                        as
                        described
                        Previously, I prefer to use the MMQGIS plugin.
                    </p>

                    <p>
                        From this arises the need to be able to view the data relating to each point in Google My Maps,
                        in
                        order to be able to better optimize the trips knowing in advance the LUCAS parameters required
                        for
                        each point.
                    </p>

                    <p>
                        Among the material sent to me to carry out the assignment, I used an Excel file to obtain the
                        desired result. In fact, this file contained the ID of each point of my interest and the
                        relative
                        LUCAS parameters to be detected.
                    </p>

                    <hr>
                    <div class="line my-5"></div>
                    <h2 class="text-center">But ...</h2>
                    <h4>
                        ... How can you merge an Excel file with the attribute table of a Shapefile?...
                    </h4>
                    <div class="line my-3"></div>
                    <hr>
                    <div class="container gif_doc">
                        <div class="row justify-content-center">
                            <div class=" col-12 col-lg-6 my-5">
                                <h3 class="text-center">...with the <span class="txt_title_thin">JOIN </span>algorithm!
                                </h3>
                                <img class="text-center" src="../assets/img/dec/DOC_ready_SVG_GIF.gif" alt="">
                            </div>
                        </div>
                    </div>

                    <p>
                        With the JOINbyFIELD algorithm of QGIS it is possible to satisfy this need. The main rule for
                        using the JOIN by field is that (as the name suggests) there is at least one field in common
                        between
                        two different datasets; that is, with the same header name and records (observations) in both
                        datasets, so the length of the field must be the same in both datasets. If these requirements
                        are
                        not satisfied the algorithm does not work.
                    </p>

                    <p class=" text-center">
                        The following video can better explain the use of the QGIS JOIN algorithm
                    </p>

                    <div class="container">
                        <p class=" text-center">
                            Once the KMLs have been obtained, it is possible to create the personal work map in Google
                            My
                            Maps
                            and on a
                            daily basis
                            update it. Below is my personal map and the legend of the icons

                        </p>

                        <div class="row justify-content-center mt-4">
                            <div v-for="(video, index) in videos" :key="index" class="col-12 col-lg-6">
                                <div class="card mb-4 bg-dark text-info fw-bold text-center">
                                    <img :src="video.thumbnail" class="card-img-top" alt="Copertina Video">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ video.title }}</h5>
                                        <br>
                                        <a :href="video.link" target="_blank" class="btn btn-primary">Go to
                                            Video <img class="text-center zoom_yt" src="../assets/img/logo/yt.svg"
                                                alt=""></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>

<style>
.zoom_yt {
    width: 10%;
}

ul {
    list-style-type: none;
}

li span {
    color: chartreuse;
}

.gif_doc {
    margin-bottom: 2rem;
}

.margin_final {
    margin-bottom: 100px;
}
</style>