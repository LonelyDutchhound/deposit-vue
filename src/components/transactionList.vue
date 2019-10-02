<template>
  <div class="wrapper">
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
  .wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>