<template>
    <h2 id="projects" class="text-neutral-200 text-3xl md:text-5xl w-full text-center pt-2">Projects</h2>
    <section class="container mx-auto grid px-5 md:px-12 mt-10 z-40">
        <!-- 1 -->
        <div
            class="panel rounded w-full min-h-screen flex flex-col gap-2 md:gap-5 py-2 md:py-5 px-3 md:px-10 bg-neutral-200 text-neutral-800">
            <div class="w-full flex justify-between items-center">
                <h3 class="text-base md:text-2xl font-semibold">Fitivities
                    <span class="text-neutral-500 font-normal">(Under Development)</span>
                </h3>
                <p class="text-sm text-neutral-500">Current</p>
            </div>

            <div class="flex-grow w-full h-full rounded group flex relative overflow-hidden">
                <div
                    class="flex-grow sm:group-hover:scale-105  bg-[url('./assets/website-fitivities-mobile.jpg')] sm:bg-[url('./assets/website-fitivities.jpg')] sm:group-hover:bg-[url('./assets/website-fitivities-2.jpg')] bg-cover bg-top sm:duration-1000">
                </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
                <p class="text-sm col-span-1 font-semibold">
                    <span class="font-normal">Technologies :</span> Vue.js, Tailwind, Backend Integration <br>
                    <span class="font-normal hidden md:block">Features : Midtrands Payment, Add Review, QR Code
                        Integration</span>
                </p>
                <p class="col-span-1 text-sm md:text-base">Fitivities is the official website of a gym, offering
                    comprehensive information
                    about its facilities, classes, and membership options</p>
            </div>
        </div>

        <!-- 2 -->
        <div
            class="panel rounded w-full min-h-screen flex flex-col gap-2 md:gap-5 py-2 md:py-5 px-3 md:px-10 bg-neutral-800 text-neutral-200">
            <div class="w-full flex justify-between items-center">
                <h3 class="text-base md:text-2xl font-semibold">Movie List</h3>
                <p class="text-sm text-neutral-500">2024</p>
            </div>

            <a class="flex-grow w-full h-full rounded cursor-pointer group flex relative overflow-hidden"
                href="https://gatito-movie-list.netlify.app/" target="_blank">
                <div
                    class="flex-grow sm:group-hover:scale-105  bg-[url('./assets/website-movie-list-mobile.jpg')] sm:bg-[url('./assets/website-movie-list.jpg')] sm:group-hover:bg-[url('./assets/website-movie-list-2.jpg')] bg-cover bg-top sm:duration-1000">
                </div>
                <span class="absolute right-4 top-4 opacity-0 group-hover:opacity-100 text-white duration-300 bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 256">
                        <path fill="currentColor"
                            d="M202.83 114.83a4 4 0 0 1-5.66 0L132 49.66V216a4 4 0 0 1-8 0V49.66l-65.17 65.17a4 4 0 0 1-5.66-5.66l72-72a4 4 0 0 1 5.66 0l72 72a4 4 0 0 1 0 5.66" />
                    </svg>
                </span>
            </a>
            <div class="grid grid-cols-2 gap-5">
                <p class="text-sm col-span-1 font-semibold">
                    <span class="font-normal">Technologies :</span> Webpack, Tailwind, AJAX, Public API<br>
                    <span class="font-normal hidden md:block">Features : Search Film, Film Category</span>
                </p>
                <p class="col-span-1 text-sm md:text-base">Movie List is a comprehensive website that displays an
                    extensive list of movies
                    using data from the public MovieDB API</p>
            </div>
        </div>

        <!-- 3 -->
        <div
            class="panel rounded w-full min-h-screen flex flex-col gap-2 md:gap-5 py-2 md:py-5 px-3 md:px-10 bg-neutral-200 text-neutral-800">
            <div class="w-full flex justify-between items-center">
                <h3 class="text-base md:text-2xl font-semibold">FlavorQuest</h3>
                <p class="text-sm text-neutral-500">2023</p>
            </div>

            <a class="flex-grow w-full h-full rounded cursor-pointer group flex relative overflow-hidden"
                href="https://gatito-flavor-quest.netlify.app/" target="_blank">
                <div
                    class="flex-grow sm:group-hover:scale-105  bg-[url('./assets/website-flavor-quest-mobile.jpg')] sm:bg-[url('./assets/website-flavor-quest.jpg')] sm:group-hover:bg-[url('./assets/website-flavor-quest-2.jpg')] bg-cover bg-top sm:duration-1000">
                </div>
                <span class="absolute right-4 top-4 opacity-0 group-hover:opacity-100 text-white duration-300 bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 256">
                        <path fill="currentColor"
                            d="M202.83 114.83a4 4 0 0 1-5.66 0L132 49.66V216a4 4 0 0 1-8 0V49.66l-65.17 65.17a4 4 0 0 1-5.66-5.66l72-72a4 4 0 0 1 5.66 0l72 72a4 4 0 0 1 0 5.66" />
                    </svg>
                </span>
            </a>
            <div class="grid grid-cols-2 gap-5">
                <p class="text-sm col-span-1 font-semibold">
                    <span class="font-normal">Technologies :</span> Webpack, Tailwind, AJAX, API<br>
                    <span class="font-normal hidden md:block">Features : Add Review, Add to Favorite</span>
                </p>
                <p class="col-span-1 text-sm md:text-base">FlavorQuest is a comprehensive restaurant recommendation
                    website designed to help
                    users discover the best dining experiences. </p>
            </div>
        </div>

        <!-- 4 -->
        <div
            class="panel rounded w-full min-h-screen flex flex-col gap-2 md:gap-5 py-2 md:py-5 px-3 md:px-10 bg-neutral-800 text-neutral-200">
            <div class="w-full flex justify-between items-center">
                <h3 class="text-base md:text-2xl font-semibold">Bookshelf</h3>
                <p class="text-sm text-neutral-500">2023</p>
            </div>

            <a class="flex-grow w-full h-full rounded cursor-pointer group flex relative overflow-hidden"
                href="https://gatito-bookshelf.netlify.app/" target="_blank">
                <div
                    class="flex-grow sm:group-hover:scale-105  bg-[url('./assets/website-bookshelf-mobile.jpg')] sm:bg-[url('./assets/website-bookshelf.jpg')] sm:group-hover:bg-[url('./assets/website-bookshelf-2.jpg')] bg-cover bg-top sm:duration-1000">
                </div>
                <span class="absolute right-4 top-4 opacity-0 group-hover:opacity-100 text-white duration-300 bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 256">
                        <path fill="currentColor"
                            d="M202.83 114.83a4 4 0 0 1-5.66 0L132 49.66V216a4 4 0 0 1-8 0V49.66l-65.17 65.17a4 4 0 0 1-5.66-5.66l72-72a4 4 0 0 1 5.66 0l72 72a4 4 0 0 1 0 5.66" />
                    </svg>
                </span>
            </a>
            <div class="grid grid-cols-2 gap-5">
                <p class="text-sm col-span-1 font-semibold"><span class="font-normal">Technologies :</span> Browser
                    Local Storage</p>
                <p class="col-span-1 text-sm md:text-base">Bookshelf is a user-friendly website that serves as a digital
                    bookshelf, allowing
                    users to store and manage the books they are currently reading and have already read</p>
            </div>
        </div>

        <!-- 5 -->
        <div
            class="panel rounded w-full min-h-screen flex flex-col gap-2 md:gap-5 py-2 md:py-5 px-3 md:px-10 bg-neutral-200 text-neutral-800">
            <div class="w-full flex justify-between items-center">
                <h3 class="text-base md:text-2xl font-semibold">Gatito Store</h3>
                <p class="text-sm text-neutral-500">2023</p>
            </div>

            <a class="flex-grow w-full h-full rounded cursor-pointer group flex relative overflow-hidden"
                href="https://gatito-store.netlify.app/" target="_blank">
                <div
                    class="flex-grow sm:group-hover:scale-105  bg-[url('./assets/website-store-mobile.jpg')] sm:bg-[url('./assets/website-store.jpg')] sm:group-hover:bg-[url('./assets/website-store-2.jpg')] bg-cover bg-top sm:duration-1000">
                </div>
                <span class="absolute right-4 top-4 opacity-0 group-hover:opacity-100 text-white duration-300 bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 256">
                        <path fill="currentColor"
                            d="M202.83 114.83a4 4 0 0 1-5.66 0L132 49.66V216a4 4 0 0 1-8 0V49.66l-65.17 65.17a4 4 0 0 1-5.66-5.66l72-72a4 4 0 0 1 5.66 0l72 72a4 4 0 0 1 0 5.66" />
                    </svg>
                </span>
            </a>
            <div class="grid grid-cols-2 gap-5">
                <p class="text-sm col-span-1 font-semibold"><span class="font-normal">Technologies :</span> Tailwind</p>
                <p class="col-span-1 text-sm md:text-base">Gatito Store is a sleek and modern landing page for an online
                    shop specializing in
                    high-quality computer peripherals</p>
            </div>
        </div>

        <!-- 6 -->
        <div
            class="panel rounded w-full min-h-screen flex flex-col gap-2 md:gap-5 py-2 md:py-5 px-3 md:px-10 bg-neutral-800 text-neutral-200">
            <div class="w-full flex justify-between items-center">
                <h3 class="text-base md:text-2xl font-semibold">Games Catalogue
                    <span class="text-neutral-500 font-normal">(Not deployed)</span>
                </h3>
                <p class="text-sm text-neutral-500">2024</p>
            </div>

            <div class="flex-grow w-full h-full rounded group flex relative overflow-hidden">
                <div
                    class="flex-grow group-hover:scale-105 bg-[url('./assets/website-games-catalogue.png')] group-hover:bg-[url('./assets/website-games-catalogue-2.png')] bg-cover bg-top duration-1000">
                </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
                <p class="text-sm col-span-1 font-semibold">
                    <span class="font-normal">Technologies :</span> PHP, Apache, Dataset<br>
                    <span class="font-normal hidden md:block">Features : Search Games, Sort by</span>
                </p>
                <p class="col-span-1 text-sm md:text-base">Games Catalogue is an extensive online platform dedicated to
                    providing a
                    comprehensive catalog of games across various genres and platforms</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style scoped>
.bounce {
    rotate: 45deg;
    animation: bounce 1s infinite;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
        transform: translateY(-15%);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
}
</style>