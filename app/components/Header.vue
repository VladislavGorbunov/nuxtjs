<template>
    <div class="header">
        <div class="header-content">
            <FormID />
        </div>
        
        <div class="header-layout"></div>
    </div>
</template>

<style>
.header-layout {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: rgba(0,0,0,0.7);
    backdrop-filter: blur(0px);
}

.header-content {
    position: relative;
    z-index: 1;
    height: 100%;
}

.header {
  width: 100%;
  height: 100vh;
  background: #111 url("/img/header.jpg") center center no-repeat;
  background-size: cover;
}



</style>