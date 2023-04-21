const { createApp } = Vue;

createApp({

  data() {
    return {
      todos: [],

      newTodo: '',
    }
  },

  methods: {
    getTodos() {
      axios.get('./server.php').then(response => {
        
        console.log(response.data);
        this.todos = response.data;

      });
    },

    addTodo() {
      
      let data = {
        newTodo: "",
      }
      data.newTodo = this.newTodo;
      
      
      axios.post('./server.php', data, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => {

        console.log("chiamata post effettuata", response);
        
        this.getTodos();
      });


      
      this.newTodo = "";
    },

    toggleTodo(todoIndex) {
      

      let data = {
        toggleTodoIndex: 0,
      }
      data.toggleTodoIndex = todoIndex;

      axios.post('./server.php', data, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => {
        
        console.log('risposta del toggle', response.data);

        this.getTodos();
      });


    },


    deleteTodo(todoIndex) {

      let data = {
        deleteTodoIndex: 0
      }
      data.deleteTodoIndex = todoIndex;
      
      axios.post('./server.php', data, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => {
        console.log('indice da cancellare: ', response.data);

        this.getTodos();
      });

    }
  },

  mounted() {
    this.getTodos();
  },

}).mount('#app');