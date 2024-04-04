<script>
export default {
    data() {
        return {
            isSidebarOpen: false,
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
    }
};
</script>



<template>

    <button class="toggle_sidebar_button btn_menu pulp" @click="toggleSidebar"><span>menu</span>
    </button>

    <a href="#" class="scroll-to-top upper_arrow" @click="scrollToTop">
        <i class="fas fa-arrow-up">Go up</i>
    </a>

    <nav class="sidebar" :class="{ 'sidebar-open': isSidebarOpen }">

        <div class="row align-items-center sticky-top">
            <div class="col-6 col-lg-8">
                <h1 class="p-3">menu</h1>
            </div>
            <div class="col-6 col-lg-4 p-3">
                <button class="btn btn-outline-light " @click="toggleSidebar">x</button>
            </div>
        </div>

        <ul class="p-3">
            <li><a class="ancor_menu" href="#step1"></a></li>
            <hr>
            <li><a class="ancor_menu" href="#step2"></a></li>
            <hr>
            <li><a class="ancor_menu" href="#step3"></a></li>
            <hr>
            <li><a class="ancor_menu" href="#step4"></a></li>
            <hr>
            <li><a class="ancor_menu" href="#step5"></a></li>
            <hr>
            <li><a class="ancor_menu" href="#step6"></a></li>
            <hr>
            <li><a class="ancor_menu" href="#step7"></a></li>
            <hr>
            <li><a class="ancor_menu" href="#step8"></a></li>
            <hr>
            <li><a class="ancor_menu" href="#step9"></a></li>
            <hr>
            <li><a class="ancor_menu" href="#step10"></a></li>
            <hr>
            <li><a class="ancor_menu" href="#step11"></a></li>
        </ul>

    </nav>
</template>

<style scoped>
nav::-webkit-scrollbar {
    width: 6px;
}

nav::-webkit-scrollbar-thumb {
    background-color: #020215ca;
    height: 123px;
    border-radius: 50px;
    border: 1px solid #286090ca;
}

nav::-webkit-scrollbar-thumb:hover {
    background-color: #ffbf0065;
    border: 1px solid #ffbf0065;
}

/* nav::-webkit-scrollbar-track {
    border-left: 1px solid #ffbf0065;
}
 */


.sidebar,
.sidebar ul,
.sidebar a {
    list-style-type: none;
    font-family: monospace;
}

a {
    text-decoration: none;
    color: #1dc0bb;
}

li a:hover {
    color: rgba(218, 218, 218, 0.995);
    border-bottom: 2px solid #ffbf0065;

}

.sidebar {
    width: auto;
    background-color: #020215ca;
    position: fixed;
    top: 0;
    bottom: 0;
    left: -100%;
    overflow-y: auto;
    overflow-x: hidden;
    transition: left 0.3s ease;
    z-index: 1000;
    /* Valore più alto di quello delle card */
}


.sidebar-open {
    left: 0;
    /* Mostra la sidebar quando è aperta */
}

.upper_arrow {
    font-weight: bold;
    font-size: large;
    cursor: pointer;
    position: fixed;
    top: 80px;
    right: 25px;
    z-index: 2;
    display: flex;
    align-items: center;
    color: #07d3b1;
    overflow-x: inherit;
}


.toggle_sidebar_button {
    font-weight: bold;
    cursor: pointer;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 2;
    display: flex;
    align-items: center;
    background-color: #27272a65;
    color: #07d3b1;
    border: 1px solid #07d3b1;
    border-radius: 10px;
    overflow-x: inherit;
}

.toggle_sidebar_button:hover {
    background-color: #07d3b1;
    color: #000000;
    border: white;
}


.pulp {
    padding: 10px 20px;
    cursor: pointer;
    animation: pulper 3s infinite ease-in-out;
    /*transition: background-color 0.3s ease, color 0.3s ease; */
}

@keyframes pulper {
    0% {
        transform: scale(1);
        /* Stato normale */
    }

    50% {
        transform: scale(1.1);
        /* Stato ingrandito */
    }

    100% {
        transform: scale(1);
        /* Ritorna allo stato normale */
    }
}
</style>