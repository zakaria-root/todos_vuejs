<template>
    <div class="row ">
<div class="col-12">
<a href="#!" class="list-group-item list-group-item-action">
        
<div class="row align-items-center">
    <div class="col-auto">
        <!-- Avatar -->


    </div>
    <div class="col ml--2">
        <div class="d-flex justify-content-between align-items-center ">
            <div  >
                       
       <label class="label ">
  <div class="toggle">
    <input class="toggle-state " type="checkbox" name="check"  @click="complated(todo)" />
    <div class="indicator"></div>
  </div>
</label>

                <!-- <input type="checkbox" class="form-check-input" @click="complated(todo)" > -->
               
                 
               
                
            </div>
            <div style="color:rgb(8, 117, 160)" :class="[{
                    'is_complated' : todo.conplated
                },'mb-0 text-sm py-4 text-center']">
               <h4>  {{ todo.title }}</h4>
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
        complated(todo){
            todo.conplated = !todo.conplated;
            console.log(todo.conplated);
            this.$emit('dotoComplated', todo);
        },
        deleteTodo(id){
            this.$emit('deleteOnTodo' ,id);

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


.label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: #394a56;
}

.label-text {
  margin-left: 16px;
}

.toggle {
  isolation: isolate;
  position: relative;
  height: 30px;
  width: 60px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow:
    -8px -4px 8px 0px #ffffff,
    8px 4px 12px 0px #d1d9e6,
    4px 4px 4px 0px #d1d9e6 inset,
    -4px -4px 4px 0px #ffffff inset;
}

.toggle-state {
  display: none;
}

.indicator {
  height: 100%;
  width: 200%;
  background: #ecf0f3;
  border-radius: 15px;
  transform: translate3d(-75%, 0, 0);
  transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  box-shadow:
    -8px -4px 8px 0px #ffffff,
    8px 4px 12px 0px #d1d9e6;
}

.toggle-state:checked ~ .indicator {
  transform: translate3d(25%, 0, 0);
}
.indicator {
    height: 100%;
    width: 200%;
    background:     #35bfbaad;
    border-radius: 15px;
    transform: translate3d(-75%, 0, 0);
    transition: transform 0.4s cubic-bezier(1, -0.07, 0.16, 1.04);
    box-shadow: -8px -4px 8px 0px #befff4, 8px 4px 12px 0px #73b1a6;
}
.btn-info {
    color: #fff;
    background-color: #2abdba;
}
.bg-info {
    background-color: #20a7a4 !important;
}
</style>