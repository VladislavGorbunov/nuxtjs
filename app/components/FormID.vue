<template>
    <div class="form-block d-flex flex-column justify-content-center align-items-center">
        <div class="form-content col-12 col-md-5">
            <Logo />

            <div class="col-12 col-md-12">
                <div class="form-blick"></div>
                <FormInput />
                
            </div> 
        </div>
    </div>
</template>   

<style>
.form-block {
    height: 100%;
}

.form-content {
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(1px);
    padding: 35px 55px;
    border-radius: 20px;
    overflow: hidden;
    min-height: 330px;
    box-shadow: 0 3px 20px -4px #111;
}

.form-blick {
    position: absolute;
    left: calc(50% - 85px);
    top: -60px;
    width: 170px;
    height: 170px;
    background: rgb(17, 192, 183);
    filter: blur(50px);
    border-radius: 50%;
    opacity: 0.4;
    z-index: 0;
}

.form-id {
    padding: 10px;
    border: none;
    background: rgba(255,255,255,0.9);
    border-radius: 6px;
}


</style>