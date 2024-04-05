<script setup>


</script>


<template>
    <footer id="footer" class="p-5">
        <div class="row mt-5">
            <h4>Contacts</h4>
            <div class="col-3">
                <img class="icon_github" src="../assets/img/logo/github_footer.svg" alt="">
                <img class="icon_github" src="../assets/img/logo/github_footer.svg" alt="">
                <img class="icon_github" src="../assets/img/logo/github_footer.svg" alt="">
            </div>
            <div class="col-3">
                <p>
                    <img class="icon_contact" src="../assets/img/logo/mail.png" alt="">
                    eso.fra24@gmail.com
                </p>
            </div>

            <div class="col-6">

            </div>

        </div>
    </footer>
</template>

<style scoped>

#footer {

background-color: #000000;
}

.icon_github {
    width: 20%;
}

.icon_contact {
    width: 30%;
}

@media (max-width: 786px) {
.icon_contact {
    width: 60%;
}
}

</style>