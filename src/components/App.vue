<template>
  <div id="app">
    <TransactionList></TransactionList>
  </div>
</template>

<script>
import TransactionList from './transactionList'

export default {
  name: 'app',
  components: {
    TransactionList
  }
}
</script>

<style>
#app {
  background: #f5f6fa;
}
</style>
