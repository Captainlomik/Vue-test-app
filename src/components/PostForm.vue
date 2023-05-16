<template>
    <form @submit.prevent>
        <h4> Создание поста</h4>
        <my-input type="text" class="input" placeholder="Название" :value="title" @input="post.title = $event.target.value"></my-input>
        <my-input type="text" class="input" placeholder="Описание" :value="body" @input="post.body = $event.target.value"></my-input>
        <my-button class="btn" @click="createPost">Создать</my-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }

        }
    }
}
</script>

<style lang="scss" scoped>
form {
    display: flex;
    flex-direction: column;
}
.btn {
    margin-top: 15px;
    align-self: flex-end;
}
</style>