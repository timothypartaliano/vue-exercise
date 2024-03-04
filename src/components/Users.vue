<script setup>
import { useUserStore } from '@/stores/user';
const store = useUserStore()

store.fetchUsers()
</script>
<template>
    <div class="user">
        <ul v-for="user in store.users">
            <li>{{ user.name }}</li>
        </ul>
    </div>
</template>

<style>
.user {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>