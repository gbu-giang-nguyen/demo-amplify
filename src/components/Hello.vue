<script setup lang="ts">
import {onMounted, ref} from 'vue';

const num = ref(1);
const plus = () => {
    num.value++;
}

const data = ref<Record<any, any>[]>([])

onMounted(() => {
    fetch('https://fake-json-api.mock.beeceptor.com/users')
        .then((res) => res.json())
        .then((d) => {
            data.value = d;
        })
})
</script>

<template>
    <h1>Helo Work</h1>
    <p>{{ num }}</p>
    <button @click="plus">+</button>
    <p v-for="d in data">{{ d.name }}</p>
</template>