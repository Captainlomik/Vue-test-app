<template>
    <div>
        <input type="text" class="input" :value="modelValue"
        @input="updateInput" >
    </div>
</template>

<script>
    export default {
        name:'my-input',
        props:{
            modelValue:[String, Number]
        },
        methods: {
            updateInput(event){
                this.$emit('update:modalValue', event.target.value)
            }
        },
    }
</script>

<style lang="scss" scoped>

input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
}

</style>