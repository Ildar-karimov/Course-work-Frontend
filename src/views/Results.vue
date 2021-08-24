<template>
  <div class="bg">
    <div class="container">
    <div class="header">
          <h1>Результаты по тесту "{{test.test_name}}"</h1>
    </div>
    <router-link to="/tests" class="to-home">Назад</router-link>
    <br>
    <table>
            <tr><th>Имя</th><th>Итоговый балл</th></tr>
            <tr v-for="(result) in results" :key="result.result_id">
                <td>{{result.result_author}}</td>
                <td>{{result.result_mark}}\100</td>
            </tr>
    </table>
  </div>
  </div>
</template>

<script>
export default{
   name: 'app',
   props: ['id'],
   data(){
     return {
         results:[],
         test:{},
     }
   },
    computed: {
    sortedArray: function() {
  
    }
  },
   mounted() {
     fetch('http://localhost:8082/result/test/'+this.id)
                .then(response => response.json())
                .then(json => {
                    this.results = json
      }),
      fetch('http://localhost:8082/test/'+this.id)
                .then(response => response.json())
                .then(json => {
                    this.test = json
      })
   },
   components: {

   },
   methods:{
  
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
</style>
