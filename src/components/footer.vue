<template>
    <footer>
        &copy; {{ nowYear }} 
    </footer>
</template>

<script>
    export default {
        data(){
            return{
                nowYear: new Date().getFullYear()
            }
        }
    }
</script>

<style lang="scss" scope>
    footer{
        margin-top: 30px;
        padding: 3px 15px;
        background-color: fade-out(black, .3);
        color: white;
        text-align: center;
        font-size: 12px;
    }
</style>
