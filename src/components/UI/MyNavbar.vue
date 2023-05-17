<template>
    <div class="navbar">
        <div>Logo</div>
        <div class="navbar__bts">
            <my-button>Посты</my-button>
            <my-button>О нас</my-button>
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
    justify-content: space-around;
    align-items: center;

    &__bts {
        width: 50%;
    }

    .btn{
        margin-right: 20px;
    }
}
</style>