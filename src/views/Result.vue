<template>
  <div class="bg">
    <div class="container">
    <div class="header">
        <h1>Результат теста</h1>
    </div>
    <router-link to="/" class="to-home">Главная</router-link>
            
    <div class="row">
      <div class="main col-md-6 offset-md-3">
      <p>Ваше имя: {{result.result_author}}</p>
      <p>Ваш результат: {{result.result_mark}}\100</p>
    </div>
    </div>

  </div>
  </div>
</template>


<script>
export default{
   name: 'app',
   props: ['id'],
   data(){
     return {
         result:{}
     }
   },
    computed: {
  },
   mounted() {
       fetch('http://localhost:8082/result/'+this.id)
                .then(response => response.json())
                .then(json => {
                    this.result = json
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
    .bg{
      padding-bottom: 395px;
    }
    table {
        margin-top: 2rem;
        width: 100%;
        border-collapse: collapse;
    }

    th,
    td {
        border: @dark 1px solid;
        padding: 5px 20px;
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
    .main{
      margin-top: 100px;
      background-color: #fff;
      font-size: 26px;
      border: 3px solid #000;
      border-radius: 10px ;
    }
</style>