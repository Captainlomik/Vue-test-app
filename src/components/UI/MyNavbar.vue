<template>
    <div class="navbar">
        <div @click="$router.push('/')">Logo</div>
        <div class="navbar__bts">
            <my-button @click="$router.push('/posts')">Посты</my-button>
            <my-button @click="$router.push('/about')">О нас</my-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-navbar'
}
</script>

<style lang="scss" scoped>
.navbar {
    height: 50px;
    background-color: lightgrey;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 100px;

    .btn{
        margin-right: 20px;
    }
}
</style>