<template>
  <div class="switcher">
    <div class="switcher__container">
      <div>
        <input class="switcher__input" type="radio" id="week" name="period" @input="$emit('getPeriod')" checked>
        <label for="week" class="switcher__btn">Неделя</label>
      </div>
      <div>
        <input class="switcher__input" type="radio" id="month" name="period" @input="$emit('getPeriod')">
        <label for="month" class="switcher__btn">Месяц</label>
      </div>
      <div>
        <input class="switcher__input" type="radio" id="year" name="period" @input="$emit('getPeriod')">
        <label for="year" class="switcher__btn">Год</label>
      </div>
    </div>
    <div class="switcher__calendar">
      <img src="../assets/switcher-picture.svg">
    </div>
    <SaveButton />
  </div>
</template>

<script>
  import SaveButton from './SaveButton'

  export default {
    name: 'PeriodSwitcher',
    components:{
      SaveButton
    }
  }
</script>

<style>
  .switcher{
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
  }
  .switcher__container{
    width: 300px;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    border-radius: 2px;

  }
  .switcher__input{
    display: none;
  }
  .switcher__btn{
    width: 100px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.21px;
    border-collapse: collapse;
    border: 1px solid #e4e6eb;
    cursor: pointer;
  }
  .switcher__input:checked~label{
    width: 104px;
    height: 54px;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.15);
    border-radius: 2px;
    background: #ffffff;
  }
  .switcher__calendar{
    width: 104px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  @media screen and (min-width: 769px) {

  }
</style>