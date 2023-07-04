<template>
  <div class="container mt-3 mb-3" style="width: 480px;">
		<div class="card rounded-4">
			<div class="card-body">
				<h3 class="card-title d-flex justify-content-center mb-3">Vue To-dos</h3>
				<div class="d-flex flex-row gap-3">
            <input
              v-model="todo"
              type="text"
              class="form-control"
              placeholder="New To Do"
              @keyup.enter="add"
            />
						<button class="btn btn-success" @click="add">✓</button>
				</div>
				<Todoitem :todos="list" @deleteTodo="deleteTodo" @doneTodo="doneTodo" />
        <h6 class="mt-3 ">Done ({{ totalTODO }})</h6>
			</div>
		</div>
	</div>
</template>

<script>
import Todoitem from "./Todoitem.vue";
import { ref, reactive, toRefs, onMounted, computed } from "vue";

export default {
  components: { Todoitem },
  setup() {
    const todo = ref("");
    const todos = reactive({
      list: [],
    });

    onMounted(() => {
      const items = localStorage.getItem("todos");
      todos.list = items ? JSON.parse(items) : [];
    });

    const totalTODO = computed(() => {
      return todos.list.filter((list) => list.isDone == true).length;
    });

    const add = () => {
      todos.list.unshift({
        activity: todo.value,
        isDone: false,
      });
      todo.value = "";
      saveToLocalStorage();
    };

    const deleteTodo = (todoIndex) => {
      todos.list = todos.list.filter((item, index) => {
        if (index != todoIndex) {
          return item;
        }
      });
      saveToLocalStorage();
    };

    const doneTodo = (todoIndex) => {
      todos.list = todos.list.filter((item, index) => {
        if (index == todoIndex) {
          item.isDone = !item.isDone;
        }

        return item;
      });
      saveToLocalStorage();
    };

    const saveToLocalStorage = () => {
      localStorage.setItem("todos", JSON.stringify(todos.list));
    };

    return { todo, ...toRefs(todos), totalTODO, add, deleteTodo, doneTodo };
  },
};
</script>

<!-- <script setup>
  import Todoitem from "./Todoitem.vue";
  import {ref, reactive, onMounted, computed, toRefs} from "vue";

  const todo = ref("");
  const todos = reactive({
    list: [],
  });

  onMounted(() => {
      const items = localStorage.getItem("todos");
      todos.list = items ? JSON.parse(items) : [];
  });

  const totalTODO = computed(() => {
      return todos.list.filter((list) => list.isDone == true).length;
  });

  function add(){

    todos.list.unshift({
      activity: todo.value,
      isDone: false,
    })

    todo.value = "";
    saveToLocalStorage();
  }

  function doneTodo(todoIndex){
    todos.list = todos.list.filter((item, index) => {

      if (index == todoIndex) {
        item.isDone = !item.isDone;
      }

      return item;
    });

    saveToLocalStorage();
  }

  function saveToLocalStorage(){
    localStorage.setItem("todos", JSON.stringify(todos.list));
  }
</script> -->