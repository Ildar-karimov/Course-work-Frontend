<template>
  <div class="bg">
    <div class="container">
    <div class="header">
          <h1>Тесты</h1>
    </div>
    <router-link to="/" class="to-home">Главная</router-link>
    <br>
    <table>
            <tr><th>Автор</th><th>Название теста</th><th>Тип теста</th><th>Пройти тест</th><th>Результаты</th></tr>
            <tr v-for="(test) in tests" :key="test.test_id">
                <td>{{test.test_author}}</td>
                <td>{{test.test_name}}</td>
                <td>{{test.test_type}}</td>
                <td style="border:none;padding: 0;
        background-color: transparent;">
                    <button v-on:click="openTest(test)" class="btn btn-success">Пройти</button>
                </td>
                <td style="border:none;padding: 0;">
                    <button v-on:click="openResults(test)" class="btn btn-info">Результаты</button>
                </td>
            </tr>
    </table>
  </div>
  </div>
</template>

<script>
export default{
   name: 'app',
   data(){
     return {
       tests:[],

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
     fetch('http://localhost:8082/test')
                .then(response => response.json())
                .then(json => {
                    this.tests = json
      })
   },
   components: {

   },
   methods:{
     openTest(test){
       this.$router.push('/test/'+ test.test_id);
     },
     openResults(test){
       this.$router.push('/results/'+ test.test_id);
     }
   }
}
</script>

<style scoped lang="less">
    @dark: #1E434C;
    @btn-color:#8D230F;
    .bg{
      padding-bottom: 390px;  
    }
    table {
        margin-top: 2rem;
        width: 100%;
        border-collapse: collapse;
        background-color: gainsboro;
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
    button{
      width: 100%;
      height: 100%;
      border-radius: 0;
      border:1px solid #000;
    }
 
</style>
