<template>
    <div id="contact"
        class="mt-20 md:mt-40 container mx-auto border-t-[0.1px] border-t-neutral-500 px-5 md:px-0 py-10 md:py-20 flex flex-col md:flex-row justify-between items-center gap-5">
        <h1
            class="bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text w-fit text-3xl md:text-5xl xl:text-7xl">
            Still here?<br>
            Clearly, we need to talk<br>
            <span class="text-neutral-100">Drop me a line!</span>
        </h1>
        <a href="mailto:satrialief0@gmail.com">
            <button
                class="bg-transparent outline outline-1 outline-neutral-500 h-fit text-neutral-500 px-10 md:px-16 xl:px-32 py-1 md:py-2 hover:outline-none hover:bg-neutral-100 hover:text-neutral-900 duration-150 text-lg font-medium flex items-center justify-center gap-2 group">
                <h5>Contact Me</h5>
                <svg class="group-hover:translate-x-2 transition-transform duration-1000"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                    <path fill="currentColor"
                        d="M390.624 150.625L256 16L121.376 150.625l22.628 22.627l95.997-95.998v417.982h32V77.257l95.995 95.995z" />
                </svg>
            </button>
        </a>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
svg {
    rotate: 90deg;
    animation: bounce 1.5s infinite;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
        transform: translateY(-100%);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
}
</style>