<template>
  <div class="transaction-list">
    <p class="transaction-list__title">Детали депозита</p>
    <PeriodSwitcher
     @getPeriod="getPeriod">
    </PeriodSwitcher>
    <TransactionSummary
      :balance="getBalance"
      :totals="getTotals">
    </TransactionSummary>
    <TransactionCard
      v-for="transaction of getTransactions"
      :transaction="transaction"
      :key="transaction.number">
    </TransactionCard>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import TransactionCard from './transactionCard'
  import TransactionSummary from './transactionSummary'
  import PeriodSwitcher from './periodSwitcher'

  export default {
    name: 'transactionList',
    components:{
      TransactionCard,
      TransactionSummary,
      PeriodSwitcher
    },
    data () {
      return {
        period: 'week'
      }
    },
    watch: {
      period(period){
        this.getPeriodTransactions(period);
      }
    },
    computed: {
      ...mapGetters(['getTotals','getBalance', 'getTransactions']),
    },
    methods: {
      ...mapActions(['getPeriodTransactions','setPath']),
      getPeriod() {
        this.period = event.currentTarget.id;
      }
    },
    async mounted(){
      await this.getPeriodTransactions(this.period);
    },
  }
</script>

<style>
  .transaction-list{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .transaction-list__title{
    text-align: center;
    padding: 30px 0 10px;
    font-size: 32px;
    font-weight: 300;
    line-height: 14px;
    letter-spacing: 0.8px;
    color: #1b243c;
  }
</style>