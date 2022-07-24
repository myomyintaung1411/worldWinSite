<template>
    <div class="drag-verify">
        <div class="range" :class="verifyResult ? 'success' : ''">
            <div class="block" @mousedown="onStart" @touchstart="onStart">
                <!-- <i :class="verifyResult ? successIcon : startIcon"></i> -->
                <div v-if="verifyResult" class="__icon">
                <CheckIcon class="text-[#03c5e5] w-5 h-5 " ></CheckIcon>
                </div>
                <div v-else class="__icon">
                <ChevronDoubleRightIcon  class="  w-5 h-5 " ></ChevronDoubleRightIcon>
                </div>
            </div>
            <span class="text">
                {{ verifyResult ? successText : startText }}</span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {
    ref
} from 'vue'
import {
  ChevronDoubleRightIcon ,
  CheckIcon ,
  ExclamationCircleIcon,
} from "@heroicons/vue/solid";
const emit = defineEmits(['update:value'])
defineProps({
    value: {
        type: Boolean, defalut: false,
    }, // Success icon  
    // successIcon: {
    //     type: String, default: 'iconfont icon-status-nor',
    // }, 
    successText: {
        type: String, default: ' Verify success ',
    }, // The start icon  
    // startIcon: {
    //     type: String, default: 'iconfont icon-login-slid',
    // }, 
    startText: {
        type: String, default: ' Drag the slider to the far right ',
    },
})
const verifyResult = ref(false) // The verification results  
const isTouch = 'ontouchstart' in document.documentElement
const moveEvent = isTouch ? 'touchmove' : 'mousemove'
const upEvent = isTouch ? 'touchend' : 'mouseup' // Slider touch start  
const onStart = (ev: MouseEvent | TouchEvent) => {
    let disX = 0 // Slider movement distance  
    const iconWidth = 40 // Slide icon width  
    const ele = document.querySelector('.drag-verify .block') as HTMLElement
    const startX = (ev as MouseEvent).clientX || (ev as TouchEvent).touches[0].pageX
    const parentWidth = ele.offsetWidth
    const MaxX = parentWidth - iconWidth
    if (verifyResult.value) {
        return false
    } // Touch the slider to move  
    const onMove = (e: MouseEvent | TouchEvent) => {
        const endX = (e as MouseEvent).clientX || (e as TouchEvent).touches[0].pageX
        disX = endX - startX
        if (disX <= 0) {
            disX = 0
        } if (disX >= MaxX - iconWidth) {
            disX = MaxX
        } ele.style.transition = '.1s all'
        ele.style.transform = `translateX(${disX}px)`
    } // Slider touch end  
    const onEnd = () => {
        if (disX !== MaxX) {
            ele.style.transition = '.5s all'
            ele.style.transform = 'translateX(0)'
        } else {
            // Successful implementation  
            verifyResult.value = true
            emit('update:value', verifyResult.value)
        }
        document.removeEventListener(moveEvent, onMove)
        document.removeEventListener(upEvent, onEnd)
    }
    document.addEventListener(moveEvent, onMove)
    document.addEventListener(upEvent, onEnd)
}
</script>
<style  scoped>
.drag-verify {
    width: 100%;
}

.drag-verify .range {
    background-color: #ececee;
    position: relative;
    border-radius: 1rem;
    transition: 1s all;
    user-select: none;
    color: #666;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
}

.drag-verify .range.success {
    background-color: #03c5e5;
    color: #fff;
}

.drag-verify .range.success .text {
    position: relative;
    z-index: 1;
}

.drag-verify .range.success .block .__icon{
    color: #03c5e5;
}

.drag-verify .range .block {
    display: block;
    position: absolute;
    left: calc(-100% + 40px);
    width: 100%;
    height: 100%;
    background: #03c5e5;
    border-radius: 4px;
    overflow: hidden;
}

.drag-verify .range .block .__icon {
    position: absolute;
    right: 0;
    width: 40px;
    height: 100%;
    font-size: 20px;
    color: #c8c9cc;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>