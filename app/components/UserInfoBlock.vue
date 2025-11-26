<template>
    <div class="header">
        <div class="header-content container">
                <div class="form-block d-flex flex-column justify-content-center align-items-center">
                    <div class="form-content col-12 col-md-10">

                        <div class="col-12 col-md-12">
                            <div class="form-blick"></div>

                            <h1 class="text-center fs-3 text-white">Иван Пирогов</h1>
                        </div> 
                    </div>
                </div>
            
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