<template>
    <div>
        <div class="row">
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
        </div>
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
</style>