<template>
    <div class="w-full absolute place-self-center px-5 lg:px-10 xl:px-16">
        <div
            class="container m-auto w-full py-3 md:py-5 px-1 md:px-1 flex justify-between items-center sm:border-b-neutral-500 sm:border-b-[0.1px]">
            <h1 class="bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text text-lg">Satria.
            </h1>
            <ul id="hamburger-menu"
                class="z-50 flex flex-col sm:flex-row justify-center md:justify-normal items-center gap-32 sm:gap-8 lg:gap-16 fixed top-0 bottom-0 -right-full left-full opacity-0 sm:opacity-100 backdrop-blur duration-300 sm:static">
                <li><a href="#projects"
                        class="cursor-pointer text-xl sm:text-base text-neutral-500 hover:text-neutral-100 duration-150 scroll-smooth">Projects</a>
                </li>
                <li><a href="#about"
                        class="cursor-pointer text-xl sm:text-base text-neutral-500 hover:text-neutral-100 duration-150 scroll-smooth">About</a>
                </li>
                <li><a href="#contact"
                        class="cursor-pointer text-xl sm:text-base text-neutral-500 hover:text-neutral-100 duration-150 scroll-smooth">Contact</a>
                </li>
            </ul>
            <button class="z-50 fixed right-5 sm:hidden" @click.prevent="hamburgerOpen()">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="none" stroke="#737373" stroke-linecap="round" stroke-width="1.5"
                        d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        const hamburgerMenu = document.getElementById('hamburger-menu');
        const navigation = document.querySelectorAll('a');

        for (let i of navigation) {
            i.addEventListener('click', () => {
                hamburgerMenu.classList.remove('right-0');
                hamburgerMenu.classList.add('-right-full');
                hamburgerMenu.classList.remove('left-0');
                hamburgerMenu.classList.add('left-full');
                hamburgerMenu.classList.remove('opacity-100');
                hamburgerMenu.classList.add('opacity-0');
            });
        }
    },
    methods: {
        hamburgerOpen() {
            const hamburgerMenu = document.getElementById('hamburger-menu');
            hamburgerMenu.classList.toggle('-right-full');
            hamburgerMenu.classList.toggle('right-0');
            hamburgerMenu.classList.toggle('left-full');
            hamburgerMenu.classList.toggle('left-0');
            hamburgerMenu.classList.toggle('opacity-0');
            hamburgerMenu.classList.toggle('opacity-100');
        }
    }
}
</script>