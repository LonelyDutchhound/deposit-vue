<template>
  <div class="btn__container">
    <button class="save__btn">
      <span>Сохранить выписку</span>
      <img src="../assets/save-btn.svg" alt="№">
    </button>
  </div>
</template>

<script>
  export default {
    name: 'SaveButton'
  }
</script>

<style>
  .btn__container{
    width: 18vw;
    min-width: 200px;
    display: flex;
    justify-content: center;
    padding: 10px;
  }
  .save__btn{
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 8px 20px rgba(24, 151, 216, 0.2);
    border-radius: 25px;
    border: none;
    background-color: #ffffff;
    color: #1b243c;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.28px;
  }
</style>