<template>
  <div class="bg">
      <div class="container">
    <div class="header">
          <h1>Cоздать вопрос</h1>
    </div>
    <router-link to="/" class="to-home">Главная</router-link>
    <br>
    <form @submit.prevent="onSubmit">
        <div class="row">
            <p class="col-md-6 offset-md-3">Вопрос:</p>
            <input type="text" class="col-md-6 offset-md-3" v-model="question.name" placeholder="Введите ваш вопрос">
        </div>
        <div class="row">
            <p class="col-md-6 offset-md-3">Ответ на вопрос:</p>
            <input type="text" class="col-md-6 offset-md-3" v-model="question.answer" placeholder="Введите ответ на вопрос">
        </div>
        <div class="row">
            <p class="col-md-6 offset-md-3">Тип вопроса</p>
            <select class="col-md-6 offset-md-3" v-model="question.type">
                <option v-for="(type) in types" v-bind:value="type.type_id">{{type.type_name}}</option>
            </select>
        </div>
        <div class="row">
            <p class="col-md-6 offset-md-3">Сложность вопроса:</p>
            <select class="col-md-6 offset-md-3" v-model="question.ontolog">
                <option >A1</option>
                <option >A2</option>
                <option >B1</option>
                <option >B2</option>
                <option >C1</option>
            </select>
        </div>  
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <button class="btn btn-success" type="submit" >Создать вопрос</button>
            </div>
        </div>
    </form>
    
  </div>
  </div>
</template>

<script>
export default{
   name: 'app',
   data(){
     return {
       question:{},
       types:[],
     }
   },
    computed: {
  },
   mounted() {
     fetch('http://localhost:8082/type')
                .then(response => response.json())
                .then(json => {
                    this.types = json
                })
   },
   components: {

   },
   methods:{
      onSubmit(){
        fetch('http://localhost:8082/question',{
                    body: JSON.stringify({
                        question_name: this.question.name,
                        question_answer: this.question.answer,
                        type_id: this.question.type,
                        count_correct: 0,
                        count_all: 1,
                        ontolog: this.question.ontolog,
                    }),
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                    .then(json => {
                      this.$router.push('/')
                })
                },
   }
}
</script>

<style scoped lang="less">
    @dark: #1E434C;
    @btn-color: #17252A;
    .bg{
        padding-bottom: 215px;
    }
    table {
        margin-top: 2rem;
        width: 100%;
        border-collapse: collapse;
    }

    th,
    td {
        border: @dark 1px solid;
        padding: 5px 10px;
    }
        .to-home{
        text-decoration: none;
        background: green;
        color: #fff;
        padding: 4px 100px;
        border-radius: 0 0 10px 10px;
        &:hover{    
        background: darken(green,7%);
        color: #fff;
        }  
    }
     p{  
            margin-top: 30px;
            margin-bottom: 0px;
            background-color: @btn-color;
            border-radius: 10px 10px 0 0;
            color: #fff;
        }
        .btn{
            margin-top: 40px;
        }
</style>