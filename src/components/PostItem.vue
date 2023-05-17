<template>
    <div class="post">
        <div>
            <p>{{ post.id }}</p>
            <p>Название</p> <strong>{{ post.title }}</strong>
            <p>Описание</p> <strong>{{ post.body }}</strong>
        </div>
        <div class="post__btns">
            <my-button @click="$router.push(`/posts/${post.id}`)" >Открыть</my-button>
            <my-button @click="$emit('remove', post)">Удалить</my-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style  lang="scss" scoped>
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__btns{
       display: flex;
    }
}
</style>