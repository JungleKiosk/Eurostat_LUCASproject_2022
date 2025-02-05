<script setup>
import { ref, provide, onMounted } from 'vue';
import { RouterView } from 'vue-router';

const isLightMode = ref(localStorage.getItem('lightMode') === 'true');

// Funzione per cambiare modalità light/dark
function toggleMode() {
  isLightMode.value = !isLightMode.value;
  localStorage.setItem('lightMode', isLightMode.value);
  updateBodyClass();
}

// Funzione per aggiornare la classe nel `<body>` per tutta l'app
function updateBodyClass() {
  if (isLightMode.value) {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
  } else {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  }
}

// Applichiamo il tema corretto all'avvio
onMounted(() => {
  updateBodyClass();
});

// Condividiamo la variabile `isLightMode` e la funzione `toggleMode()` con gli altri componenti
provide('isLightMode', isLightMode);
provide('toggleMode', toggleMode);
</script>


<template>

  <!-- <div class="cursor-light" :class="{ 'hidden': cursorMoving }" ref="cursorLight"></div> -->




  <!-- <video autoplay muted loop id="bgVideo" class="video">
      <source src="./assets/img/video/waterfall.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video> -->

  <div class="container-fluid bg-dark py-4">

    <!-- <div class="lt-animation-top"></div> -->

    <div class="row justify-content-center ">
      <div class="col-12 col-lg-12 text-center gap-5">
        <!-- Utilizza RouterLink per creare bottoni -->
        <RouterLink active-class="active" to="/">
          <button class="rounded-2 btn_bg_green mx-1">
            <span>HOME</span>
          </button>
        </RouterLink>

        <RouterLink active-class="active" to="/lucas">
          <button class="rounded-2 btn_bg_green mx-1">
            <span>LUCAS</span>
          </button>
        </RouterLink>

        <RouterLink active-class="active" to="/Objective">
          <button class="rounded-2 btn_bg_green mx-1">
            <span>Objective</span>
          </button>
        </RouterLink>

        <RouterLink active-class="active" to="/MyFLOW">
          <button class="rounded-2 btn_bg_green mx-1">
            <span>GIS flow</span>
          </button>
        </RouterLink>

        <RouterLink active-class="active" to="/Video">
          <button class="rounded-2 btn_bg_green mx-1">
            <span>Video</span>
          </button>
        </RouterLink>

        <!-- Bottone per cambiare modalità -->
        <button @click="toggleMode" class="toggle-mode-btn btn">
          {{ isLightMode ? '🌙' : '☀️' }}
        </button>
      </div>
    </div>
  </div>


  <RouterView />

</template>

<style>
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

/* .content-container {
  position: relative;
} */

img {
  width: 70%;
}

.btn_bg_green {
  background-color: transparent;
  color: #ffffff;
  border: none;
  cursor: pointer;
  overflow: hidden;
}

.btn_bg_green:hover {
  color: #22ad96;
  ;
  text-decoration: underline;
}

.btn_bg_purple {
  background-color: transparent;
  color: #22ad96;
  ;
  border: none;
  cursor: pointer;
  overflow: hidden;
}

.btn_bg_purple:hover {
  text-decoration: underline;
}

/* Modalità scura (default) */
.dark-mode {
  background-color: #121212;
  color: white;
}

/* Modalità chiara */
.light-mode {
  background-color: rgb(183, 183, 183);
  color: black;
}




@keyframes l-top-passing {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}
</style>