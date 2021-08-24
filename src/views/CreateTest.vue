<template>
  <div class="bg">
      <div class="container">
      <div class="header">
          <h1>Создание теста</h1>
      </div>
    <router-link to="/" class="to-home">Главная</router-link>

    <form @submit.prevent="onSubmit" class="form">
        <div class="row">
            <p class="col-md-6 offset-md-3">Автор теста:</p>
            <input type="text" class="col-md-6 offset-md-3" v-model="author" placeholder="Ваше фио">
        </div>
        <div class="row">
            <p class="col-md-6 offset-md-3">Название теста:</p>
            <input type="text" class="col-md-6 offset-md-3" v-model="test_name" placeholder="Введите название теста">
        </div>
        <div class="row">
            <p class="col-md-6 offset-md-3">Выберите тему теста:</p>
            <select class="col-md-6 offset-md-3" v-model="type">
                <option v-for="(type) in types" v-bind:value="type.type_id">{{type.type_name}}</option>
            </select>
        </div>
        <br>  
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <button class="btn btn-success" type="submit" >Отобразить вопросы</button>
            </div>
        </div>
    </form>
    <br>
    <div class="row" style="
        border-top: 3px solid #000;">
        <div class="col-md-4 offset-md-4">
            <h3>Выберите вопросы:</h3>
        </div>
    </div>

    <table>
            <tr><th>Вопрос</th><th>ответ</th><th>С.сложность</th> <th>О.сложность</th><th>выбрать</th></tr>
            <tr v-for="(question) in questions" :key="question.question_id">
                <td>{{question.question_name}}</td>
                <td>{{question.question_answer}}</td>
                <td>{{Math.round((question.count_all - question.count_correct) / question.count_all*10) }}\10</td>
                <td>{{question.ontolog}}</td>
                <td style="border:none;padding: 0;">
                    <button v-on:click="addQuestion(question)" class="btn btn-success">+</button>
                </td>
            </tr>
    </table>
    <br>
    <div class="row" style="
        border-top: 3px solid #000;">
        <div class="col-md-4 offset-md-4">
            <h3>Добавленные вопросы:</h3>
        </div>
    </div>
    
    <form @submit.prevent="createTest">
        <table>
            <tr><th>Вопрос</th><th>ответ</th><th>С.сложность</th> <th>О.сложность</th><th>номер вопроса</th><th>удалить</th></tr>
            <tr v-for="(question1) in questions1" :key="question1.question_id">
                <td>{{question1.question_name}}</td>
                <td>{{question1.question_answer}}</td>
                <td>{{Math.round((question1.count_all - question1.count_correct) / question1.count_all*10) }}\10</td>
                <td>{{question1.ontolog}}</td>
                <td>
                    <input type="text" v-model="question1.block" required placeholder="введите номер вопроса">
                </td>
                <td><button v-on:click="delQuestion(question1.question_id)" class="btn btn-danger" style="font-size:20px;padding: 0 10px">&#215</button></td>
            </tr>
        </table>
        <br>    
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <button class="btn btn-success" type="submit" >Создать тест</button>
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
       test:{},
       author:'',
       test_name:'',
       type:'',
       type_name:'',
       types:[],
       questions:[],
       questions1:[],
    
     }
   },
   computed: {
    sortedArray: function() {
      function compare(a, b) {
        if (a.type_id == b.type_id)
          return 1;
        return 0;
      }

      return this.arrays.sort(compare);
    }
  },
   mounted() {
            fetch('http://localhost:8082/type')
                .then(response => response.json())
                .then(json => {
                    this.types = json
                })
            // fetch('http://localhost:8082/question')
            //     .then(response => response.json())
            //     .then(json => {
            //         this.questions = json
                    
            //     })
   },
   components: {

   },
   methods:{
       addtest(test){
                fetch('http://localhost:8082/test',{
                    body: JSON.stringify({
                        test_author: test.author,
                        test_name: test.test_name,
                        test_type: test.type,
                        test_difficult: 60,
                    }),
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                    .then(response => response.json())
                    .then(json => {
                    this.test= json
                    //console.log(this.test)
                })
            },
            onSubmit(){
                if (this.author.trim()){
                    for(let i of this.types){
                        if(i.type_id == this.type){
                            this.type_name = i.type_name
                        }
                    }
                    const newtest = {
                        id: Date.now(),
                        author: this.author,
                        test_name: this.test_name,
                        type: this.type_name
                    }
                    this.addtest(newtest)
                    this.selectQuestions(this.type)
                }
            },
            selectQuestions(id){
                //console.log(id),
                fetch('http://localhost:8082/question/type/'+id)
                .then(response => response.json())
                .then(json => {
                    this.questions = [],
                    this.questions = json
                })
            },
            addQuestion(question){
                for(let i of this.questions1){
                    if(question.question_id == i.question_id){
                        alert('Вопрос уже добавлен');
                        return;
                    }
                }
                this.questions1.push(question);
            },
            delQuestion(id){
                this.questions1 = this.questions1.filter(t => t.question_id !== id)
            },
            createTest(){
                    for(let i of this.questions1){
                        fetch('http://localhost:8082/questiontest',{
                        body: JSON.stringify({
                            question_id: i.question_id,
                            test_id: this.test.test_id,
                            block: i.block,
                            chance: 1,
                        }),
                        method:"POST",
                        headers: {
                            "Content-Type": "application/json",
                        }
                        })
                        .then(json => {
                        })
                    }
                     this.questions1 = [];
                     this.$router.push('/')
            }
   }
}
</script>

<style scoped lang="less">
    @dark: #1E434C;
    @btn-color: #17252A;
    .bg{
        padding-bottom: 50px;
    }
    table {
        margin-top: 2rem;
        width: 100%;
        border-collapse: collapse;
        background-color:gainsboro  ;
        color: #000;
        font-family: sans-serif;
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
    .form{
        p{  
            margin-top: 30px;
            margin-bottom: 0px;
            background-color: @btn-color;
            border-radius: 10px 10px 0 0;
            color: #fff;
        }
    }
    h3{
         background: gainsboro;
         border-radius: 0 0 10px 10px;
    }
</style>