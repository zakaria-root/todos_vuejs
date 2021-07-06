<template>
    <div class="container">
        <h1 class="text-center ">LIST DES COURS</h1 >

<!-- Large input -->

            <div class="form-group mb-1">
                <input  v-model="title" type="text" placeholder="Nouveau Todo ..." class="form-control py-3" />
            </div>

            <button v-if="myTodo !== null" @click="updateTodo" class="btn btn-warning btn-block mb-4 py-3">
                Modifier 
                
            </button>

            <button v-else @click="addTodo" class="btn btn-info btn-block mb-4 py-3">
               <b>AJOUTER</b>  
            </button>
            
            
            
        <!-- <ul class="list-group">
            <li class="list-group-item " v-bind:key="todo.id"  v-for="todo in todos" >
                   <Todo :todo="todo" v-on:deleteOnTodo="deleteOnTodo" @updateTodo="editTodo" />
                   
            </li>
            
        </ul> -->

        <ul class="list-group " v-bind:key="todo.id"  v-for="todo in todos">
            <Todo :todo="todo" v-on:deleteOnTodo="deleteOnTodo" @updateTodo="editTodo" />
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
            title : '',
            myTodo: null,
            todos:[],
            
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
                 
               
            })
            this.title ='';
                this.myTodo = null;
            
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
h1{
    color: rgb(8, 117, 160);
}
.form-control {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    color: #56d1f7;
    background-color: #ffffff6b;
    background-clip: padding-box;
    border: 1px solid #22bbef;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: .25rem;
    transition: all .2s linear;
}
.form-control:focus {
    box-shadow: none;
    transition: all .1s linear;
    border-color: #00bfff;
    box-shadow: inset 0px 0px 0px 1px #00bfff;
}

.form-control:focus {
    color: #4f4f4f;
    background-color: #ffffff94;
    border-color: #91e4ff;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(18 102 241 / 25%);
}
</style>