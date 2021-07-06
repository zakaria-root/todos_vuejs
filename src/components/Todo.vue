<template>
    <div class="row ">
<div class="col-12">
<a href="#!" class="list-group-item list-group-item-action">
        
<div class="row align-items-center">
    <div class="col-auto">
        <!-- Avatar -->


    </div>
    <div class="col ml--2">
        <div class="d-flex justify-content-between align-items-center">
            <div class="group-item py-4">
                <h4  
                :class="[{
                    'is_complated' : todo.complated
                },'mb-0 text-sm']">{{ todo.title }}</h4>
            </div>
             <div class="text-right text-muted">
                 <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
   <div @click="updateMyTodo(todo)" class="btn btn-outline-warning btn-rounded py-2"  >
       <i class="fas fa-edit fa-2x"></i>
   </div>

    <div @click="deleteTodo(todo.id)" class="btn btn-outline-danger btn-rounded py-2"> 
        <i class="fas fa-trash fa-2x"></i>
    </div>
                 </div>
            </div>
           
        </div>
        
    </div>
</div>

    </a>
    </div>

        <!-- <div class="row">
            <div class="col-12 ">
                <div  :class="[{
                    'is_complated' : todo.complated
                },'col-4']">
                    {{ todo.title }}
                </div>
                <div class="col-4 offset-8">
                    <button @click="updateMyTodo(todo)" class="btn btn-info btn-sm"  >edite</button>
                    <button @click="deleteTodo(todo.id)" class="btn btn-danger btn-sm"  > delete</button>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    props:[
        'todo',
    ],
    methods:{
        deleteTodo(id){
            this.$emit('deleteOnTodo' , id);

        },
        updateMyTodo(todo){
            this.$emit('updateTodo',todo);
        }
    }

}
</script>

<style>
.is_complated{
    text-decoration: line-through;
}
.list-group-item-action:hover, .list-group-item-action:focus {
    z-index: 1;
    color: #000000;
    text-decoration: none;
    background-color: #eefbffb5;
}
.list-group-item {
    position: relative;
    display: block;
    padding: .5rem 1.5rem;
    color: #262626;
    text-decoration: none;
    background-color: #f0fbff;
    border: 1px solid rgb(77 125 114 / 13%);
}
</style>