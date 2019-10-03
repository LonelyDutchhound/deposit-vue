<template>
  <div id="app">
    <TransactionList />
  </div>
</template>

<script>
import TransactionList from './TransactionList'

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
