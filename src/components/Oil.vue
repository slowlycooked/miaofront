<template>

  <div class="layout-padding docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <h4>维生素</h4>
      <q-datetime v-model="datetime1" type="datetime" placeholder="时间" />
      <q-input v-model="amount" type="number" placeholder="维生素摄取量" suffix="滴" />
      <q-input v-model="notes" placeholder="备注" />
      <q-btn  color="primary" @click="saveOil" name="submit">保存</q-btn>
    </div>
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
      saveOil () {
        axios({
          method: 'post',
          url: BACKEND_IP + '/api/records',
          data: {recordDate1: this.datetime1, type: '油', amount: this.amount, notes: this.notes}
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
