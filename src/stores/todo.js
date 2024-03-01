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

    function changeStatus(id) {
        for (let i = 0; i < todos.value.length; i++) {
            if (todos.value[i].id === id) {
                todos.value[i].completed = !todos.value[i].completed
            }
        }
    }

    function deleteTodo(id) {
        todos.value = todos.value.filter(el => el.id !== id)
    }

    return { todos, create, changeStatus, deleteTodo }
})