<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const cursorLight = ref(null);
const cursorMoving = ref(false);
const neonEffect = ref(false);
let timer; // Variabile per il timer

// Funzione per aggiornare lo stato del movimento del cursore
function updateCursorMovement(event) {
  cursorLight.value.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  cursorMoving.value = true; // Imposta lo stato del movimento del cursore su true quando il cursore si muove
  clearTimeout(timer); // Resetta il timer quando il cursore si muove
  timer = setTimeout(() => cursorMoving.value = false, 500); // Imposta lo stato del movimento del cursore su false dopo 1 secondo di inattività
}

// Aggiungi un listener per l'evento mousemove per aggiornare la posizione del pallino verde neon
onMounted(() => {
  window.addEventListener('mousemove', updateCursorMovement);
});

// Rimuovi il listener quando il componente viene smontato per evitare memory leak
onBeforeUnmount(() => {
  window.removeEventListener('mousemove', updateCursorMovement);
});

function toggleNeonEffect() {
  neonEffect.value = !neonEffect.value;
}
onMounted(() => {
  setInterval(toggleNeonEffect, 2000);
});

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
      <div class="col-12 col-lg-3 text-center gap-5">
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

        <RouterLink active-class="active" to="/steps">
          <button class="rounded-2 btn_bg_green mx-1">
            <span>STEPS</span>
          </button>
        </RouterLink>
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
  color: #00fff7;
  text-decoration:underline;
}

.btn_bg_purple {
  background-color: transparent;
  color: #00fff7;
  border: none;
  cursor: pointer;
  overflow: hidden;
}

.btn_bg_purple:hover {
  text-decoration:underline;
}

.lt-animation-top {
  position: absolute;
  width: 100%;
  height: 1px;
  z-index: -1;
}

.lt-animation-top {
  left: 0;
  top: 190px;
  box-shadow: linear-gradient(to right, transparent, 0 0 15px 10px #00fff7);
  background: linear-gradient(to right, transparent, #00fff7);
  animation: l-top-passing 30s linear infinite;
}

.lt-animation-bottom {
  bottom: 0;
  background: linear-gradient(to left, transparent, #8500FF);
  animation: l-bottom-passing 20s linear infinite;
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