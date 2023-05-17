<template>
    <div class="page__wrapper">
        <div class="page__el" v-for="page in pages" :key="page" :class="{
            'current': page === currentPage
        }" @click="changePage(page)" @change="changePage">{{ page }}</div>
    </div>
</template>

<script>
export default {
    name: 'my-pagination',
    data() {
        return {
            currentPage: this.pageNumber
        }
    },
    props: {
        pages: Number,
        pageNumber: Number
    },
    methods: {
        changePage(page) {
            this.currentPage = page
            this.$emit('my-event', { page: this.page })
        }
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
    color: red;
}
</style>