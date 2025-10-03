<script setup lang="ts">
import { onMounted, computed } from 'vue';
import gsap from 'gsap';

interface Props {
    generalBg?: string;
    secondaryBgs?: string[];
}

const props = withDefaults(defineProps<Props>(), {
    generalBg: '/images/default-bg.jpg', // fallback
    secondaryBgs: () => [], // пустой массив по умолчанию
});

onMounted(() => {
    const tl = gsap.timeline();

    tl.fromTo(
        ".image-layer",
        {
            clipPath: "polygon(-4vw 0vh, 0vw 0vh, 0vw 100%, -4vw 100%)"
        },
        {
            keyframes: [
                {
                    clipPath: "polygon(35vw 0vh, 65vw 0vh, 65vw 100%, 35vw 100%)",
                    duration: 1.2,

                },
                {
                    clipPath: "polygon(104vw 0vh, 108vw 0vh, 108vw 100%, 104vw 100%)",
                    duration: 1.2,

                }
            ],
            ease: "power2.inOut",
            stagger: 0.18
        }
    );
    tl.add(startSecondaryAnimation, "-=2.8");
    function startSecondaryAnimation() {
        const titleTl = gsap.timeline();

        titleTl
    .to(".hero__pic", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // раскрытие изображения
      duration: 2.8,
      ease: "power2.inOut"
    }, "+=.2")
    .to(".hero__title", {
      x: 0, // движение заголовка
      duration: 2.7,
      ease: "power2.inOut"
    }, "<");
    }
});
</script>

<template>
    <div class="hero overflow-hidden h-[calc(100vh-43px)] relative bg-cover bg-center bg-no-repeat "
        :style="{ backgroundImage: `url(${props.generalBg})` }">
        <div class="hero__title absolute w-full translate-x-[-110%] bottom-[84px]">
            <div class="hero__pic max-w-8xl py-3  left-0 right-0 mx-auto  clip-path-hidden">
                <img class="max-w-none h-full max-h-[195px]" src="/images/title.svg" alt="">
            </div>
        </div>
        <div class="images-container absolute top-0 left-0 w-full h-full z-[2]" v-show="secondaryBgs.length">
            <div v-for="(secondaryImage, index) in secondaryBgs" :key="index"
                class="image-layer absolute top-0 left-0 w-full z-[4] h-full bg-cover bg-center bg-no-repeat"
                :style="{ backgroundImage: `url(${secondaryImage})` }"></div>
        </div>
    </div>
</template>

<style scoped>
.image-layer {
    clip-path: polygon(-4vw 0vh, 0vw 0vh, 0vw 100%, -4vw 100%);
}
.clip-path-hidden {
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); /* изначально скрыт */
}
</style>