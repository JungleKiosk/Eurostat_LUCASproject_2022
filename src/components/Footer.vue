<script setup>


</script>


<template>
    <footer id="footer" class="p-5 bg-dark">
        <div class="row justify-content-center mt-5">

            <div class="col-sm-4 col-md-3 text-center">
                <h3 class="">Follow me</h3>
                <a href="https://github.com/JungleKiosk"><img class="icon_social mx-2" src="../assets/img/logo/github_footer.svg" alt=""></a>
                <a href="https://www.linkedin.com/in/francescominutella/"><img class="icon_social mx-2" src="../assets/img/logo/linkedin_footer.svg" alt=""></a>
                <a href="https://www.youtube.com/@JungleKiosk"><img class="icon_social mx-2" src="../assets/img/logo/youtube_footer.svg" alt=""></a>
            </div>

        </div>

        <div class="row justify-content-center mt-5">

            <div class="col-12 col-lg-6">
                <h5>My Projects</h5>
                <ul>
                    <li>🌳<a class="txt_primary color_txt_link"
                            href=" https://junglekiosk.github.io/QGIS_forest_suitability/" target="_blank"> Forest
                            Suitability</a></li> <br>
                    <li>🛰️<a class="txt_primary color_txt_link"
                            href="https://junglekiosk.github.io/QGIS_RS_NDVI_CIgreen/" target="_blank"> NDVI &
                            CIgreen</a></li><br>
                    <li>♨️<a class="txt_primary color_txt_link"
                            href="https://junglekiosk.github.io/QGIS_SoilDegradation/" target="_blank"> Soil
                            Degradation</a></li><br>
                    <li>🌰<a class="txt_primary color_txt_link" href="https://junglekiosk.github.io/QGIS_zoning/"
                            target="_blank"> Chestnut Zoning</a></li><br>
                    <li>🗺️<a class="txt_primary color_txt_link" href="https://junglekiosk.github.io/QGIS_SoilTexture/"
                            target="_blank"> Mapping Soil Texture</a></li><br>
                </ul>
            </div>
            <div class="col-12 col-lg-2">
                <h5>Contacts</h5>
                <ul>
                    <li>+39 3311874661</li>
                    <li>eso.fra24@gmail.com</li>
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