import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    balance: {
      income: 0,
      outcome: 0,
    },
    totals: {
      debit: 0,
      credit: 0
    },
    transactions: [],
    paths: {
      weekly: 'https://api.myjson.com/bins/pfnp5',
      monthly: 'https://api.myjson.com/bins/1dufi1',
      year: 'https://api.myjson.com/bins/86hql'
    },
    },
    actions: {
      async getPeriodTransactions({ commit, dispatch}, period) {
        try {
          const path = await dispatch('setPath', period);
          const response = await fetch(path);
          const transactions = await response.json();
          commit('updateTransactions', transactions);
          dispatch('calcTotals');
          dispatch('calcBalance');
        } catch (e) {
          console.log(e)
        }
      },

      setPath({state}, period) {
        const {weekly, monthly, year} = state.paths;
        switch (period) {
          case 'week':
            return weekly;
          case 'month':
            return monthly;
          case 'year':
            return year;
          default:
            return weekly;
        }
      },

      calcTotals({state, commit}) {
        const totals = {
          debit: 0,
          credit: 0,
        };
        state.transactions.forEach( transaction => {
          if (transaction.debit) totals.debit += transaction.debit;
          else totals.credit += transaction.credit;
        });
        commit('updateTotals', totals);
      },

      calcBalance ({state, commit}) {
        const {debit, credit} = state.totals;
        const balance = {
          income: 0,
          outcome: 0,
        };
        balance.outcome = state.balance.income - Number(debit) + Number(credit);
        commit('updateBalance', balance);
      },

    },
    mutations: {
      updateTransactions(state, transactions) {
        state.transactions = transactions;
      },
      updateTotals(state, totals){
        state.totals = totals;
      },
      updateBalance(state, balance){
        state.balance = balance;
      }
    }
});