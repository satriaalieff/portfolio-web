<template>
    <section id="about" class="container mx-auto pt-20 md:pt-40 grid md:grid-cols-2 gap-20 md:gap-40 px-5 md:px-0 text-neutral-100">
        <div class="flex flex-col gap-1">
            <h4 class="text-2xl md:text-3xl mb-5">
                About
            </h4>
            <p class="text-base md:text-xl font-medium md:font-semibold">
                Satria Alief Putra Hidayat
            </p>
            <p class="text-base text-neutral-500 hover:text-neutral-100  duration-300">
                Computer Science Student at Padjajaran University who are interested in Website Development, especially
                <span class="text-neutral-100 duration-300">Front-End</span>
                Website. Mastering several programming languages,
                especially
                <span class="text-neutral-100 duration-300">JavaScript</span>.
                Can fully utilize several Web Development technologies, such as
                <span class="text-neutral-100 duration-300">Vue.js</span>,
                <span class="text-neutral-100 duration-300">Tailwind</span>,
                Webpack, Git.
                Currently learning to master
                <span class="text-neutral-100 duration-300">React</span>.
            </p>
            <div class="flex gap-3 mt-5 items-center">
                <a href="https://www.linkedin.com/in/satriaalieff/">
                    <svg class="hover:scale-95 duration-75" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 256 256">
                        <g fill="none">
                            <rect width="256" height="256" fill="#fff" rx="60" />
                            <rect width="256" height="256" fill="#0a66c2" rx="60" />
                            <path fill="#fff"
                                d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4" />
                        </g>
                    </svg>
                </a>
                <a href="mailto:satrialief0@gmail.com">
                    <svg class="hover:scale-95 duration-75" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 256 256">
                        <g fill="none">
                            <rect width="256" height="256" fill="#f4f2ed" rx="60" />
                            <path fill="#4285f4"
                                d="M41.636 203.039h31.818v-77.273L28 91.676v97.727c0 7.545 6.114 13.636 13.636 13.636" />
                            <path fill="#34a853"
                                d="M182.545 203.039h31.819c7.545 0 13.636-6.114 13.636-13.636V91.675l-45.455 34.091" />
                            <path fill="#fbbc04"
                                d="M182.545 66.675v59.091L228 91.676V73.492c0-16.863-19.25-26.477-32.727-16.363" />
                            <path fill="#ea4335"
                                d="M73.455 125.766v-59.09L128 107.583l54.545-40.909v59.091L128 166.675" />
                            <path fill="#c5221f"
                                d="M28 73.493v18.182l45.454 34.091v-59.09L60.727 57.13C47.227 47.016 28 56.63 28 73.493" />
                        </g>
                    </svg>
                </a>
                <a href="https://wa.me/6281293015156">
                    <svg class="hover:scale-95 duration-75" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 256 258">
                        <defs>
                            <linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%">
                                <stop offset="0%" stop-color="#1faf38" />
                                <stop offset="100%" stop-color="#60d669" />
                            </linearGradient>
                            <linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%">
                                <stop offset="0%" stop-color="#f9f9f9" />
                                <stop offset="100%" stop-color="#fff" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#logosWhatsappIcon0)"
                            d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004" />
                        <path fill="url(#logosWhatsappIcon1)"
                            d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z" />
                        <path fill="#fff"
                            d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64" />
                    </svg>
                </a>

            </div>
        </div>
        <div class="flex flex-col md:justify-self-end">
            <h4 class="text-2xl md:text-3xl mb-5 md:text-end">
                Skills
            </h4>
            <ul class="flex flex-col md:text-end text-base text-neutral-500">
                <li class="hover:text-neutral-100 duration-75 cursor-default">Vue</li>
                <li class="hover:text-neutral-100 duration-75 cursor-default">Tailwind</li>
                <li class="hover:text-neutral-100 duration-75 cursor-default">Webpack</li>
                <li class="hover:text-neutral-100 duration-75 cursor-default">AJAX</li>
                <li class="hover:text-neutral-100 duration-75 cursor-default">Node</li>
                <li class="hover:text-neutral-100 duration-75 cursor-default">WebSocket</li>
                <li class="hover:text-neutral-100 duration-75 cursor-default">PWA</li>
                <li class="hover:text-neutral-100 duration-75 cursor-default">API</li>
                <li class="hover:text-neutral-100 duration-75 cursor-default">ES6</li>
                <li class="hover:text-neutral-100 duration-75 cursor-default">JavaScript</li>
                <li class="hover:text-neutral-100 duration-75 cursor-default">CSS</li>
                <li class="hover:text-neutral-100 duration-75 cursor-default">HTML</li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {}
</script>