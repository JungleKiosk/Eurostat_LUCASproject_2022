<script>
import Footer from '../components/Footer.vue';

export default {
    name: "VideoView",
    data() {
        return {
            videos: [
                {
                    title: "1. Final Result",
                    thumbnail: "https://img.youtube.com/vi/3JjZnE-iQ6M/hqdefault.jpg",
                    link: "https://youtu.be/3JjZnE-iQ6M?si=M0YwCmoSdmtSqB63"
                },
                {
                    title: "2. Shorter Path by QGIS",
                    thumbnail: "https://img.youtube.com/vi/Wbse3awiWEs/hqdefault.jpg",
                    link: "https://youtu.be/Wbse3awiWEs?si=tQQMnt8CAc71V7q5"
                },
                {
                    title: "3. Ground Control by Google Earth Pro",
                    thumbnail: "https://img.youtube.com/vi/91kFQ2DMe50/hqdefault.jpg",
                    link: "https://youtu.be/91kFQ2DMe50?si=DMjvBRkMgtp1uedo"
                },
                {
                    title: "4. Add data shape file by QGIS Python shell",
                    thumbnail: "https://img.youtube.com/vi/Nn0KPBUGFXQ/hqdefault.jpg",
                    link: "https://youtu.be/Nn0KPBUGFXQ?si=gMYiZbsknz63oWWi"
                },
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
        }
    },
    components: {
        Footer
    }
}
</script>

<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-8">
                <h1>Video</h1>
            </div>
        </div>

        <div class="row mt-4">
            <div v-for="(video, index) in videos" :key="index" class="col-md-4">
                <div class="card mb-4 bg-dark text-info fw-bold">
                    <img :src="video.thumbnail" class="card-img-top" alt="Copertina Video">
                    <div class="card-body">
                        <h5 class="card-title">{{ video.title }}</h5>
                        <a :href="video.link" target="_blank" class="btn btn-primary">Go to Video</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer></Footer>
</template>

<style scoped>
.card {
    transition: transform 0.1s ease-in-out;
}
.card:hover {
    transform: scale(1.05);
}
</style>
