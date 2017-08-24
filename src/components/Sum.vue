<template>

  <div>
    <div class="row justify-center">
        <q-datetime id="dt" v-model="dt" float-label="日期" style="font-size: x-large; margin-left: 5%" @change="fetchData()"/>
    </div>
    <div class="row justify-center">
        <table class="q-table horizontal-separator loose">
          <thead>
          <tr>
            <th class="text-left">项目</th>
            <th class="text-right">量</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="sum in sums" :key="sum.type">
            <td class="text-left">{{sum.type}}</td>
            <td class="text-right">
              {{Number(sum.amount).toFixed(2) }}
              <span v-if="sum.type ==='睡觉'">小时</span>
              <span v-if="sum.type ==='牛奶'">毫升</span>
            </td>
          </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'

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
        sums: [],
        dt: new Date()
      }
    },
    mounted () {
      this.fetchData()
    },

    methods: {
      fetchData () {
        console.log(moment(this.dt).format('YYYY-MM-DD'))
        axios.get(BACKEND_IP + '/api/records/sum?from=' + moment(this.dt).format('YYYY-MM-DD')).then(function (response) {
          this.sums = response.data
          console.log(this.sums)
        }.bind(this))
      }
    }
  }
</script>
