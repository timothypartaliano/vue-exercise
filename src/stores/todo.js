import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
    const todos = ref([])

    function create(data) {
        let id = todos.value.length ? todos.value[todos.value.length-1].id + 1 : 1
        todos.value.push({
            id,
            name: data.value,
            completed: false
        })
    }
    return { todos, create }
})