<script setup lang="ts">
    let user_input = ref('')
    let submitFlag = ref(false)
    let nullInputFlag = ref(false)

    let id_user = ref()
    
    function submitForm() {
        let [link, id] = user_input.value.split('id')
        let reg = /[0-9]+/g
        id_user.value = user_input.value.match(reg)?.join('')
        
        console.log(id_user.value)

        if (id_user.value == null) {
            nullInputFlag.value = true
            submitFlag.value = false
        } else {
            nullInputFlag.value = false
            submitFlag.value = true
        }

        
        // if () {
        //     nullInputFlag.value = true
        // } else {
        //     nullInputFlag.value = false
        //     submitFlag.value = true
        // }
    }
</script>

<template>
    <div class="mb-3">
        <label class="form-label text-white"><small>Введите ссылку на страницу или ID пользователя:</small></label>
        <input type="text" v-model="user_input" class="form-control form-id" id="" name="user_id" placeholder="https://vk.com/id890335 или просто 890335">
    </div>
    
    <div class="form-check form-switch mt-1 mb-2">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
        <label class="form-check-label text-light mb-3" for="flexSwitchCheckChecked"><small>Сохранить пользователя в списке избранных</small></label>
    </div>

    <div class="alert alert-warning text-center p-2" v-if="nullInputFlag">
        Введите ID пользователя
    </div>

    <div v-if="!submitFlag">
        <FormButton @click="submitForm" />
    </div>

    

    <div class="alert alert-primary text-center mb-3" v-else>
        Получаем информацию пользователя {{ id_user }}...
    </div>

    <div class="d-flex flex-column flex-md-row">
        <NuxtLink to="/about" class="pe-3 text-white-50 link-underline link-underline-opacity-0"><small>О сервисе</small></NuxtLink>
        <NuxtLink to="/info" class="pe-3 text-white-50 link-underline link-underline-opacity-0"><small>Как это работает?</small></NuxtLink>
        <NuxtLink to="/contacts" class="pe-3 text-white-50 link-underline link-underline-opacity-0"><small>Контакты</small></NuxtLink>
    </div>

    
</template>