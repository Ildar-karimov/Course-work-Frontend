<template>
  <div class="bg">
    <div class="container">
    <div class="header">
          <h1>Тест</h1>
    </div>
    <div class="row" style="padding-left:15px; margin-top:20px">
        <span style="padding-right:5px;">Ваше имя:</span>
        <input type="text" v-model="name" required placeholder="ваше фио">
    </div>
    <table>
            <tr><th>по теме "{{test.test_name}}"</th></tr>
            <tr v-for="(i) in questions1" :key="i.question_id">
                <td>
                  <div class="row">
                    {{i.question_name}}
                  </div>
                  <div class="row">
                    <span>Ваш ответ:</span>
                    <input type="text" v-model="i.answer" required>
                  </div>
                </td>
            </tr>
    </table>
    <button v-on:click="checkAns(questions1)" class="btn btn-success" style="margin-top:65px">Завершить попытку</button>
    <br>
  </div>
  </div>
</template>


<script>
export default{
   name: 'app',
   props: ['id'],
   data(){
     return {
       test:{},
       questions:[],
       questions1:[],
       count:{},
       result:0,
       all: 0,
       name:'',
     }
   },
    computed: {
  },
   mounted() {
       fetch('http://localhost:8082/test/'+this.id)
                .then(response => response.json())
                .then(json => {
                    this.test = json
      }),
      fetch('http://localhost:8082/questiontest/test/'+this.id)
          .then(response => response.json())
          .then(json => {
              this.questions = json
              this.count = this.questions.pop()
              this.questions.push(this.count)
              for(let i = 1; i <= this.count.block; i++){
                const newArr = this.questions.filter((element) => element.block == i )
                const rand = Math.floor(Math.random() * newArr.length)
                this.questions1.push(newArr[rand])
              }
              console.log(this.questions1)
          })
   },
   components: {

   },
   methods:{
     addResult(result,id){
       fetch('http://localhost:8082/result',{
                    body: JSON.stringify({
                        test_id: id,
                        result_author: this.name,
                        result_mark: result,
                    }),
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                  .then(response => response.json())
                  .then(json => {
                    let ans = json
                    this.$router.push('/result/'+ ans.result_id);
                })
     },
     checkAns(questions1){
       this.all = 0
       this.result = 0
       for(let i of questions1){
            switch(i.ontolog){
              case 'A1':
                if(i.answer == i.question_answer){
                  this.result++;
                  i.count_correct++;
                }
                fetch('http://localhost:8082/question/'+i.question_id,{
                    body: JSON.stringify({
                        question_name:i.question_name,
                        question_answer: i.question_answer,
                        type_id: i.type_id,
                        count_correct: i.count_correct,
                        count_all: +i.count_all + 1,
                        ontolog: i.ontolog,
                    }),
                    method:"PUT",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                this.all++;
                break;
              case 'A2':
                if(i.answer == i.question_answer){
                  this.result+=2;
                  i.count_correct++;
                }
                fetch('http://localhost:8082/question/'+i.question_id,{
                    body: JSON.stringify({
                        question_name:i.question_name,
                        question_answer: i.question_answer,
                        type_id: i.type_id,
                        count_correct: i.count_correct,
                        count_all: +i.count_all + 1,
                        ontolog: i.ontolog,
                    }),
                    method:"PUT",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                this.all+=2;
                break;
              case 'B1':
                if(i.answer == i.question_answer){
                  this.result+=3;
                  i.count_correct++;
                }
                fetch('http://localhost:8082/question/'+i.question_id,{
                    body: JSON.stringify({
                        question_name:i.question_name,
                        question_answer: i.question_answer,
                        type_id: i.type_id,
                        count_correct: i.count_correct,
                        count_all: +i.count_all + 1,
                        ontolog: i.ontolog,
                    }),
                    method:"PUT",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                this.all+=3;
                break;
              case 'B2':
                if(i.answer == i.question_answer){
                  this.result+=4;
                  i.count_correct++;
                }
                fetch('http://localhost:8082/question/'+i.question_id,{
                    body: JSON.stringify({
                        question_name:i.question_name,
                        question_answer: i.question_answer,
                        type_id: i.type_id,
                        count_correct: i.count_correct,
                        count_all: +i.count_all + 1,
                        ontolog: i.ontolog,
                    }),
                    method:"PUT",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                this.all+=4;
                break;
              case 'C1':
                if(i.answer == i.question_answer){
                  this.result+=5;
                  i.count_correct++;
                }
                fetch('http://localhost:8082/question/'+i.question_id,{
                    body: JSON.stringify({
                        question_name:i.question_name,
                        question_answer: i.question_answer,
                        type_id: i.type_id,
                        count_correct: i.count_correct,
                        count_all: +i.count_all + 1,
                        ontolog: i.ontolog,
                    }),
                    method:"PUT",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                this.all+=5;
                break;
              default:
                if(i.answer == i.question_answer){
                  this.result++;
                  i.count_correct++;
                }
                fetch('http://localhost:8082/question/'+i.question_id,{
                    body: JSON.stringify({
                        question_name:i.question_name,
                        question_answer: i.question_answer,
                        type_id: i.type_id,
                        count_correct: i.count_correct,
                        count_all: +i.count_all + 1,
                        ontolog: i.ontolog,
                    }),
                    method:"PUT",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                this.all++;
            }
       }
       this.result = Math.round(this.result/this.all *100);
       this.addResult(this.result,this.id)
       //console.log(this.result)
     },
   }
}
</script>

<style scoped lang="less">
    @dark: #1E434C;
    @btn-color:#8D230F;
    table {
        margin-top: 2rem;
        width: 100%;
        border-collapse: collapse;
        background-color: gainsboro;
    }
    span{

    }

    th,
    td {
        border: @dark 1px solid;
        padding: 5px 20px;
    }
</style>
