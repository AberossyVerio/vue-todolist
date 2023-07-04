<template>
    <header class="masthead">
        <div class="container">
            <div class="masthead-subheading">Hello Bang</div>
            <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
            <div class="d-flex gap-3 justify-content-center">
                <a class="btn btn-outline-light btn-xl text-uppercase" href="">Todolist</a>
                <a class="btn btn-outline-light btn-xl text-uppercase" href="">About</a>
                <component :is="currentView" />
            </div>
        </div>
    </header>
</template>
<script setup>
import About from "./About.vue"
import Todo from "./Todopage.vue"
</script>