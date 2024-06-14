<template>
    <main class="px-5 font-primary flex flex-col">
        <Navbar></Navbar>
        <Hero></Hero>
        <Projects></Projects>
        <About></About>
        <Footer></Footer>
    </main>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Projects from './components/Projects.vue';
import About from './components/About.vue';
import Footer from './components/Footer.vue';

export default {
    components: {
        Navbar,
        Hero,
        Projects,
        About,
        Footer
    }
}
</script>

<style scoped>
main {
    background-image: url('./assets/bg-pattern.png');
    background-repeat: repeat;
    background-position: center;
    min-height: 100vh;
}
</style>