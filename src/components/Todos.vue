<template>
    <div class="container">
        <h1 class="text-center">list todos</h1 >

            <div class="form-group mb-1">
                <input  v-model="title" type="text" placeholder="Nouveau Todo ..." class="form-control" />
            </div>

            <button v-if="myTodo" @click="updateTodo" class="btn btn-warning btn-block mb-4">
                Modifier 
            </button>

            <button v-else @click="addTodo" class="btn btn-primary btn-block mb-4">
                Ajouter 
            </button>
            
            

            
        <ul class="list-group">
            <li class="list-group-item " v-bind:key="todo.id"  v-for="todo in todos" >
                   <Todo :todo="todo" v-on:deleteOnTodo="deleteOnTodo" @updateTodo="editTodo" />
                   
            </li>
            
        </ul>
    </div>
</template>

<script>
import Todo from './Todo.vue'
import axios from 'axios';
export default {
  components:{Todo},
    name : 'todos',
    
    data(){
        return {
            todos:[],
            'title' : '',
            myTodo: null,
        }
    },
    methods:{
        updateTodo(){
            let todo ={
                ...this.myTodo,
                title: this.title
            }
            axios.put('http://localhost:3000/todos/'+todo.id, todo)
            .then(res => {
                this.todos = this.todos.map(t => {
                    if (res.data.id === t.id) {
                        return res.data;
                        
                    }
                    return t;
                })
                this.title ='';
                this.mytodo = null;
            })
        },
        getTodos(){
            axios.get('http://localhost:3000/todos')
            .then(res => this.todos = res.data)
            .catch(err => console.log(err))
        },
        deleteOnTodo(id){
            if (confirm('are u choure you want to delete this todo')) {
                axios.delete(`http://localhost:3000/todos/${id}`)
            .then(() => {
                this.todos = this.todos.filter(todo => todo.id !== id)
            })
            .catch(err => console.log(err))
            }
        },
        addTodo(e){
            e.preventDefault();
            let newTodo={
                'title': this.title,
                'conplated' : true
            }
            axios.post('http://localhost:3000/todos', newTodo)
            .then(res => {
                this.todos = [res.data, ...this.todos];
                this.title = ''
            })

        },
        editTodo(todo){
            
            this.myTodo = todo;
            this.title = todo.title;
        }
        
    },
    created(){
        this.getTodos();
    }
}
</script>

<style>

</style>