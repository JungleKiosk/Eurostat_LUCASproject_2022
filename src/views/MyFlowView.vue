<script>
import MenuToggle from './MenuToggle.vue';
import FirstStep from '../components/FirstStep.vue';
import SecondStep from '../components/SecondStep.vue';
import ThirdStep from '../components/ThirdStep.vue';
import FourthStep from '../components/FourthStep.vue';
import CutterPage from '../components/CutterPage.vue';
import LastStep from '../components/LastStep.vue';
import Footer from '../components/Footer.vue';


export default {
    name: "Home",
    data() {
        return {
        }
    },
    components: {
        MenuToggle, FirstStep, SecondStep, ThirdStep, FourthStep, CutterPage, LastStep, Footer
    }
}


</script>


<template>

    <MenuToggle />
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-12 text-center">
                <h1>my <span class="txt_title_thin">FLOW</span> </h1>
            </div>
        </div>
    </div>


    <FirstStep></FirstStep>
    <SecondStep></SecondStep>
    <ThirdStep></ThirdStep>
    <FourthStep></FourthStep>
    <CutterPage></CutterPage>
    <LastStep></LastStep>
    <Footer></Footer>



</template>

<style></style>