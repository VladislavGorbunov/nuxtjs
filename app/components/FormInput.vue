<script setup lang="ts">
    let user_input = ref('')
    let submitFlag = ref(false)
    let nullInputFlag = ref(false)
    let userInfo = ref()
    let id_user = ref()
    let userNull = ref(false)
    let success = ref(false)

    // const props = defineProps(['foo'])
    
    function submitForm() {
        let [link, id] = user_input.value.split('id')
        let reg = /[0-9]+/g
        id_user.value = user_input.value.match(reg)?.join('')
        
        if (id_user.value == null) {
            nullInputFlag.value = true
            submitFlag.value = false
        } else {
            nullInputFlag.value = false
            submitFlag.value = true
            getUserInfo(id_user.value)
        }
    }


    async function getUserInfo (id: number) {
        const data: any = await $fetch('/api/usersGet', {
            method: 'POST',
            body: { id: id},
        })

        if (data) {
            userNull.value = false
            // submitFlag.value = false
            // console.log(data.first_name)
            // userInfo.value = data
            setTimeout(() => {
                success.value = true
            }, 3000)
            
            setTimeout(() => {
                navigateTo(`/user/id${id}`)
            }, 6000)
            
        } else {
            userNull.value = true
            submitFlag.value = false
            console.log('Ошибка')
        }
    }
</script>

<template>
    <div v-if="userInfo">
        {{ userInfo.first_name }}
    </div>

    <div v-else>
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

    <div class="alert alert-danger text-center mb-3" v-if="userNull">
        Не удалось найти пользователя с таким ID
    </div>

    <div v-if="!submitFlag">
        <FormButton @click="submitForm" />
    </div>

    <div class="alert alert-primary text-center mb-3" v-if="submitFlag && !success">
        Получаем информацию пользователя {{ id_user }}...
    </div>

    <div class="alert alert-success text-center mb-3" v-if="success">
        Нашли пользователя, сейчас покажем данные.
    </div>

    <FormLinks />
    </div>
   
    
</template>