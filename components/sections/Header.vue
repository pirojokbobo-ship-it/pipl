<template>
    <header class="relative z-10">
        <SectionsHeaderPromo :banner-data="{
            title: 'Акция',
            desc: 'Квартиры месяца со скидкой -30%',
            link: '/#'
        }" />
        <div class="relative max-w-8xl mx-auto py-3 flex items-center justify-between ">
            <NuxtLink to="/#">
                <img src="/images/logo.svg" alt="">
            </NuxtLink>

            <div class="inline-flex items-center gap-5">
                <Button type="transparent" class="text-white text-base p-0 cursor-pointer">Заказать звонок</Button>
                <Button type="transparent" class="text-white text-base gap-2 inline-flex items-center p-0 cursor-pointer">
                    <span class="inline-block leading-5 border-b border-white">Выбрать квартиру</span>
                    <i class="inline-flex items-center justify-center bg-yellow-300 shrink-0 rounded w-[22px] h-[22px] text-black-500">
                        <IconsArcDownArrowIcon />
                    </i>
                </Button>

                <Button type="transparent" class="relative w-10 h-10 ml-3 cursor-pointer">
                    <span class="w-10 h-[1px] bg-white absolute mx-auto left-0 right-0 top-4"></span>
                    <span class="w-10 h-[1px] bg-white absolute mx-auto left-0 right-0 top-6"></span>
                </Button>
            </div>
        </div>
    </header>
</template>
