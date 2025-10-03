<script setup lang="ts">
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const selectedHouses = ref<string>('1');
const selectedRoom = ref<string>('1');
const selectedSquare = ref<string>('1');
</script>
<template>
    <form action="#" class="box-filter flex mt-[-40px] relative z-10">
        <div class="flex flex-1 max-w-[1162px] mx-auto px-4 ">
            <div class="box-filter__control flex-1 py-3 px-8 border-r border-black-500/16 bg-white">
                <div class="box-select">
                    <label for="houses" class="text-sm text-black-500/40 block mb-[3px] tracking-[-0.02em]">Дом</label>
                    <Select id="houses" v-model="selectedHouses">
                        <SelectTrigger class="h-auto border-none w-full w-full shadow-none p-0 focus-visible:outline-none focus:ring-0 focus-visible:ring-0">
                            <SelectValue :placeholder="selectedHouses" class="text-2xl w-full h-auto tracking-[-0.02em]" />
                            <div
                                class="flex items-center justify-center w-[22px] shrink-0 h-[22px] border border-black-500/40 rounded ml-[10px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 shrink-0">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </div>
                        </SelectTrigger>
                        <SelectContent class="bg-white">
                            <SelectGroup>
                                <SelectItem value="1" class="cursor-pointer">
                                    Все дома
                                </SelectItem>
                                <SelectItem value="2" class="cursor-pointer">
                                    Дом 2
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            
            <div class="box-filter__control flex-1 py-3 px-8 border-r border-black-500/16 bg-white">
                <div class="box-select">
                    <label for="rooms"
                        class="text-sm text-black-500/40 block mb-[3px] tracking-[-0.02em]">Комнатность</label>
                    <Select id="rooms" v-model="selectedRoom">
                        <SelectTrigger class=" border-none w-full shadow-none w-full p-0 outline-0 focus-visible:outline-none focus:ring-0 focus-visible:ring-0">
                            <SelectValue  class="text-2xl tracking-[-0.02em] w-full" />
                            <div
                                class="flex items-center justify-center w-[22px] shrink-0 h-[22px] border border-black-500/40 rounded ml-[10px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 shrink-0">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </div>
                        </SelectTrigger>
                        <SelectContent class="bg-white">
                            <SelectGroup>
                                <SelectItem value="1" class="cursor-pointer">
                                    1 комната
                                </SelectItem>
                                <SelectItem value="2" class="cursor-pointer">
                                    2 комнаты
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div class="box-filter__control flex-1 py-3 px-8 border-r border-black-500/16 bg-white">
                <div class="box-select">
                    <label for="square" class="text-sm text-black-500/40 block mb-[3px] tracking-[-0.02em]">Площадь</label>
                    <Select id="square" v-model="selectedSquare">
                        <SelectTrigger class=" border-none shadow-none w-full p-0 outline-0 focus-visible:outline-none focus:ring-0 focus-visible:ring-0">
                            <SelectValue class="text-2xl tracking-[-0.02em] w-full" />
                            <div
                                class="flex items-center justify-center w-[22px] shrink-0 h-[22px] border border-black-500/40 rounded ml-[10px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 shrink-0">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </div>
                        </SelectTrigger>
                        <SelectContent class="bg-white">
                            <SelectGroup>
                                <SelectItem value="1" class="cursor-pointer">
                                    30-40 м<sup>2</sup>
                                </SelectItem>
                                <SelectItem value="2" class="cursor-pointer">
                                    40-50 м<sup>2</sup>
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <Button class="bg-black-500 w-[285px] shrink-0 items-center gap-2 h-full rounded-none">
                <span class="text-2xl text-white block relative top-[-3px] tracking-[-0.02em]">126 квартир</span>
                <i class="inline-flex items-center justify-center bg-yellow-300 shrink-0 rounded w-[22px] h-[22px] text-black-500">
                    <IconsArcDownArrowIcon/>
                </i>
            </Button>
        </div>
    </form>



</template>
<style>
.box-select .lucide-chevron-down {
    display: none;
}
.box-select &[data-size="default"] {
  height: auto !important;
  min-height: auto !important;

}
</style>