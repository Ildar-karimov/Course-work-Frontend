<template>
  <div class="bg">
      <div class="home container">
    <div class="header">
      <h1>Конструктор тестов</h1>
    </div>

    <div class="row buttons">
        <router-link to="/tests" class="col-md-4">
          <img src="../assets/img/test.svg" alt="тесты">
          <p class="bg-p">Тесты</p>
        </router-link>
        <router-link to="/create-test" class="col-md-4">
          <img src="../assets/img/new.svg" alt="создать тест">
          <p class="bg-p">Создать тест</p>
        </router-link>
        <router-link to="/question" class="col-md-4">
          <img src="../assets/img/3.svg" alt="создать вопрос">
          <p class="bg-p">Создать вопрос</p>
        </router-link>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style lang="less">
@bg-color : #2F2FA2;
@dark-bg : #3AAFA9 ;
@btn-color: #17252A;
@header-color: #553D67;
.bg{
  background: url('../assets/img/bg1.jpg');
  padding-bottom: 285px;
  img{
    width: 25%;
  }
  &-p{
    margin-top: 5px;
    margin-bottom: -10px;
    font-size: 20px;
  }
}
  .home {
    &-btn{
      
    }
    a{
      padding: 20px;
      border: 2px solid gray;
      background-color: green;
      text-decoration: none;
      color: #fff;
      &:hover{
        background: darken(green,7%);
        color: #fff;
    }  
    }
  }
  .header{
        padding: 6px;
        background: @btn-color;
        border-radius: 0 0 4px 4px ;
        h1{
            font-family: sans-serif;
            text-align: center;
            font-size: 3.5rem;
            color: #fff;
            font-weight: 600;
        }
        a{
          margin-top: 4px;
          margin-left: 4px;
          display: inline-block;
          width: 100%;
        }
    }
    .buttons{
      margin-top: 200px;
      
    }
</style>
