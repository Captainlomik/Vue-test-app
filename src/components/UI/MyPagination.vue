<template>
    <div class="page__wrapper">
        <div class="page__el" v-for="page in pages" :key="page" :class="{
            'current': page === pageNumber 
        }">{{ page }}</div>
    </div>
</template>

<script>
export default {
    name: 'my-pagination',
    props: {
        pages: Number,
        pageNumber: Number
    }

}
</script>

<style lang="scss" scoped>
.page {
    &__wrapper {
        display: flex;
        justify-content: center;
        margin: 10px 0;

    }

    &__el {
        padding-right: 10px;
        cursor: pointer;
    }

    &__el:last-child {
        padding-right: 0;
    }
}

.current {
    color: green;
}
</style>