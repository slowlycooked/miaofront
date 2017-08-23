<template>

  <div class="layout-padding docs-input row justify-center">
    <table class="q-table">
      <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-right">Price</th>
        <th class="text-right">In Stock</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="text-left">Item #1</td>
        <td class="text-right">$10.11</td>
        <td class="text-right">101</td>
      </tr>
      <tr>
        <td class="text-left">Item #2</td>
        <td class="text-right">$8.88</td>
        <td class="text-right">34</td>
      </tr>
      <tr>
        <td class="text-left">Item #3</td>
        <td class="text-right">$0.15</td>
        <td class="text-right">1670</td>
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
    name: 'milk',
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
        datetime1: new Date(),
        notes: '',
        amount: null
      }
    },
    methods: {
      saveMilk () {
        axios({
          method: 'post',
          url: BACKEND_IP + '/api/records',
          data: {recordDate1: this.datetime1, type: '牛奶', amount: this.amount, notes: this.notes}
        }).then(function (response) {
          console.log(response.status)
          if (response.status === 200) {
            this.toastWithOnDismiss()
          }
          else {
            this.toastFailed()
          }
        }.bind(this))
      },
      toastFailed () {
        Toast.create['negative']({
          html: '提交失败',
          timeout: 1000
        })
      },
      toastWithOnDismiss () {
        Toast.create['positive']({
          html: '提交成功，1秒返回！',
          timeout: 1000,
          onDismiss: () => {
            this.$router.replace('/index')
          }
        })
      }
    }
  }
</script>
