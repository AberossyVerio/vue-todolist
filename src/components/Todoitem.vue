<template>
  <div style="margin-top: 20px;">
    <ul class="list-group">
      <li v-for="(todo, index) in todos" :key="index" class="list-group-item ">
          <div class="d-flex flex-row">
            <div class="col form-check">
              <input 
                  type="checkbox" 
                  @click="done(index)" 
                  class="form-check-input">
              <label v-if="todo.isDone" class="form-check-label">
                  <del>{{ todo.activity }}</del>
              </label>
              <label v-else class="form-check-label">{{ todo.activity }}</label>
            </div>
            <div class="col-auto">
              <div class="col">
                  <button @click="deleteTODO(index)" class="btn btn-danger">
                  x
                  </button>
              </div>
            </div>
          </div>
      </li>
    </ul>
  </div>
</template>
  
  <script>
  export default {
    props: {
      todos: {
        type: Array,
        default: [],
      },
    },
    setup(_props, { emit }) {
      const deleteTODO = (index) => {
        emit("deleteTodo", index);
      };
  
      const done = (index) => {
        emit("doneTodo", index);
      };
  
      return { deleteTODO, done };
    },
  };
  </script>
  