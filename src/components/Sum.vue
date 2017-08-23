<template>

  <div class="layout-padding docs-input row justify-center">
    <div class="row">
      <h4>当日总结</h4>
    </div>

    <br/>
    <br/>
    <table class="q-table">
      <thead>
      <tr>
        <th class="text-left">项目</th>
        <th class="text-right">量</th>
        <th class="text-right">备注</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="sum in sums" :key="sum.type">
        <td class="text-left">Item #1</td>
        <td class="text-right">$10.11</td>
        <td class="text-right">101</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'
  const
    BACKEND_IP = 'http://localhost:8080'

  import {
    QDatetime,
    QInput,
    QToggle,
    QField,
    QTooltip,
    QPopover,
    QBtn,
    Toast,
    QLayout,
    QToolbar,
    QToolbarTitle,
    QIcon,
    QList,
    QListHeader,
    QItem
  } from 'quasar'

  export default {
    components: {
      QBtn,
      QDatetime,
      QInput,
      QToggle,
      QField,
      QTooltip,
      QPopover,
      Toast,
      QLayout,
      QToolbar,
      QToolbarTitle,
      QIcon,
      QList,
      QListHeader,
      QItem
    },
    data () {
      return {
        sums: []
      }
    },
    mounted () {
      this.fetchData()
    },

    methods: {
      fetchData () {
        axios.get(BACKEND_IP + '/api/records/sum').then(function (response) {
          this.records = response.data
        }.bind(this))
      }
    }
  }
</script>
