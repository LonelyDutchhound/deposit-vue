<template>
  <div class="summary__container">
    <div class="summary__field">
      <p class="summary__fieldname">Входящий остаток</p>
      <p class="income">{{balance.income}}</p>
    </div>
    <div class="summary__field">
      <p class="summary__fieldname">Поступления</p>
      <p class="credit">{{totals.credit}}</p>
    </div>
    <div class="summary__field">
      <p class="summary__fieldname">Списания</p>
      <p class="debit">{{totals.debit}}</p>
    </div>
    <div class="summary__field">
      <p class="summary__fieldname">Исходящий остаток</p>
      <p class="outcome">{{balance.outcome}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'transactionSummary',
  props:['balance', 'totals']
}
</script>

<style>
  .summary__container{
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
  }
  .summary__field{
    width: 96%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #ffffff;
  }
  .summary__fieldname{
    width: 100%;
    color: #8b93a6;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    text-transform: uppercase;
    letter-spacing: 0.18px;
    background: #f5f6fa;
    padding: 5px;
  }
  .income,
  .outcome,
  .debit,
  .credit{
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 300;
    line-height: 14px;
    text-transform: uppercase;
    letter-spacing: 0.36px;
    padding: 10px;
    border-collapse: collapse;
    border: 1px solid #f5f6fa;
  }
  .income,
  .outcome{
    color: #1b243c;
  }
  .debit{
    color: #fc5864;
  }
  .credit{
    color: #34b88c;
  }
</style>