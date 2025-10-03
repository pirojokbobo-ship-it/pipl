<script setup lang="ts">
useHead({
  title: 'Жилой квартал Пипл',
  meta: [
    {
      name: 'description',
      content: 'Описание страницы'
    }
  ]
})
</script>

<template>
   <SectionsHeader/>

    <SectionsMainHero class="mt-[-70px]" generalBg="images/general-bg.jpg"
        :secondaryBgs="['/images/secondary1.jpg', '/images/secondary2.jpg', '/images/secondary3.jpg', '/images/secondary4.jpg', '/images/secondary5.jpg', '/images/secondary6.jpg']" />
    <SectionsMainFilters/>
    
</template>
