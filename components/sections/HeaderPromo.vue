<script setup lang="ts">
interface BannerData {
  title?: string
  desc: string
  link?: string
}

interface Props {
  bannerData?: BannerData | null
  storageKey?: string
}

// Определяем пропсы без withDefaults
const props = defineProps<Props>()

// Устанавливаем значения по умолчанию вручную
const bannerData = props.bannerData ?? null
const storageKey = props.storageKey ?? 'sale-banner-hidden'

const isHidden = ref(true)

onMounted(() => {
  checkVisibility()
})

const checkVisibility = () => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedValue = localStorage.getItem(storageKey)
      isHidden.value = storedValue === 'true'
    } else {
      isHidden.value = false // Показываем, если localStorage недоступен
    }
  } catch (error) {
    console.warn('localStorage not available:', error)
    isHidden.value = false
  }
}

const handleClose = () => {
  try {
    localStorage.setItem(storageKey, 'true')
    isHidden.value = true
  } catch (error) {
    console.warn('Failed to save to localStorage:', error)
  }
}
</script>

<template>
  <div class="py-[9.5px] " v-if="!isHidden">
    <div v-if="bannerData && bannerData?.title && bannerData?.link"
      class="bg-white  relative max-w-8xl  mx-auto  ">
      <div class="relative flex gap-5 items-center justify-center">
        <NuxtLink to="/#" class="py-[5px] px-2 bg-yellow-300 rounded text-xs tracking-[-0.02em]">{{ bannerData.title }}
        </NuxtLink>
        <NuxtLink to="/#" class="text-base border-b border-black-500 relative t-[-2px]">{{ bannerData.desc }}</NuxtLink>
        <Button size="icon" type="transparent" class="cursor-pointer absolute border rounded-sm border-black-500/40 w-[22px] h-[22px] right-0 top-[2px] p-0 "
          :is-box="true" @click="handleClose">
          <IconsCloseIcon class="size-small w-2.5 h-2.5"/>
        </Button>
      </div>

    </div>
    <div v-else-if="bannerData" class="bg-white relative max-w-8xl mx-auto  flex gap-5 items-center justify-center">
      <span class="py-[5px] px-2 bg-yellow-300 rounded text-xs tracking-[-0.02em]">{{ bannerData.title }}</span>
      <span class="text-base border-b border-black-500">{{ bannerData.desc }}</span>
      <Button type="transparent" class="absolute border border-black-500/40 p-0 w-[22px] h-[22px] right-0 top-[2px]"
        :is-box="true" @click="handleClose">
        <IconsCloseIcon />
      </Button>

    </div>
  </div>
</template>
