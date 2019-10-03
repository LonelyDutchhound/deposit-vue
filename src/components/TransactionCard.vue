<template>
  <div class="card">
    <div class="card__container">
      <div class="card__field number">
        <span>{{transaction.number}}</span>
      </div>
      <div class="card__field date">
        <span>{{transaction.date}}</span>
      </div>
      <div class="card__field counterparty">
        <span>{{transaction.counterparty}}</span>
      </div>
      <div class="card__field appointment">
        <span>{{transaction.appointment}}</span>
      </div>
      <div class="card__field summ">
        <span>{{value}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'transactionList',
    props:['transaction'],
    computed: {
      value (){
          if (this.transaction.debit) {
            return `- ${new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' })
              .format(this.transaction.debit)}`;
          } else {
            return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' })
              .format(this.transaction.credit);
          }
      },

    }
  }
</script>

<style>
  .card{
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
  }
  .card__container{
    width: 96%;
    display: flex;
    flex-flow: row wrap;
    background: #ffffff;
  }
  .card__field{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8em;
    border-collapse: collapse;
    border: 1px solid #f5f6fa;
    font-size: 16px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.24px;
  }
  .number{
    width: 50%;
  }
  .date{
    width: 50%;
  }
  .counterparty{
    width: 100%;
  }
  .appointment{
    width: 100%;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.21px;
  }
  .summ{
    width: 100%;
    font-size: 24px;
    font-weight: 300;
    line-height: 14px;
    text-transform: uppercase;
    letter-spacing: 0.36px;
  }

@media screen {

}
</style>