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

    <FirstStep></FirstStep>
    <SecondStep></SecondStep>
    <ThirdStep></ThirdStep>
    <FourthStep></FourthStep>
    <CutterPage></CutterPage>
    <LastStep></LastStep>
    <Footer></Footer>



</template>

<style>

</style>