<script setup>


</script>


<template>
    <footer id="footer" class="p-5 bg-dark">
        <div class="row justify-content-center mt-5">

            <div class="col-sm-4 col-md-3 text-center">
                <h3 class=""></h3>

                <a href="#"><img class="icon_social mx-2" src="../assets/img/logo/github_footer.svg" alt=""></a>
                <a href="#"><img class="icon_social mx-2" src="../assets/img/logo/linkedin_footer.svg" alt=""></a>
                <a href="#"><img class="icon_social mx-2" src="../assets/img/logo/youtube_footer.svg" alt=""></a>

            </div>

        </div>

        <div class="row justify-content-center mt-5">

            <div class="col-3 col-lg-2 col-sm-4 col-md-3">
                <h3>Projects</h3>
                <ul>
                    <li><a href="#">Forest Suitability</a></li>
                    <li><a href="#">Soil Degradation</a></li>
                    <li><a href="#">Chestnut Zoning</a></li>
                </ul>
            </div>
            <div class="col-3 col-lg-2 col-md-3">
                <h3>Stack</h3>
                <ul>
                    <li><a href="#">QGIS</a></li>
                    <li><a href="#">Python</a></li>
                    <li><a href="#">VueJs</a></li>
                </ul>
            </div>

        </div>
    </footer>
</template>

<style scoped>
.icon_social {
    width: 10%;
}


@media (max-width: 786px) {
    .icon_social {
        width: 20%;
    }
}
</style>