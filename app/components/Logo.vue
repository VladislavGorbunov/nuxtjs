<template>
    <div class="logo-block mb-3">
        <NuxtLink to="https://vk.com" target="_blank" class="pe-3 text-white-50 link-underline link-underline-opacity-0">
            <img src="/img/vk.svg" class="vk-logo d-block mx-auto mb-3">
        </NuxtLink>
        <p class="logo text-center mt-0 mb-0">AnonViewer</p>  
        
        <p class="logo-p text-center text-white">Смотрите данные ВКонтакте анонимно</p>
    </div>
</template>   

<style>
.vk-logo {
    position: absolute;
    right: 25px;
    top: 25px;
    width: 36px;
    z-index: 1;
    transform: rotate(10deg);
}

.logo {
    font-size: 32px;
    font-weight: bold;
    color: #fff;
}

.logo-p {
    font-size: 14px;
    margin: 0 !important;
}
</style>