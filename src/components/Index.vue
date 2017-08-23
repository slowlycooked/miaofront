<template>

    <div>
      <q-list no-border separator>
        <q-list-header>日志</q-list-header>
        <q-item v-for="record in records" :key="record.id">
          <q-item-main>
            <q-item-tile label>
              <span v-if="record.type ==='睡觉'">睡觉开始:</span>
              {{frontEndDateFormat(record.recordDate1)}}
            </q-item-tile>
            <q-item-tile v-if="record.type ==='睡觉'" label>
              <span v-if="record.type ==='睡觉'">睡觉结束:</span>
                {{frontEndDateFormat(record.recordDate2)}}
            </q-item-tile>
            <q-item-tile v-if="record.type !=='睡觉'" label>{{record.type}} : {{record.amount}}
              <span v-if="record.type === '牛奶'" >毫升</span>
              <span v-if="record.type === '油'" >滴</span>
            </q-item-tile>
            <q-item-tile label>备注：{{record.notes}}</q-item-tile>
          </q-item-main>
          <q-item-side right>
            <q-btn round color="primary" icon="delete" @click="deleteRecord(record.id)"/>
          </q-item-side>
        </q-item>
      </q-list>
      <q-item-separator/>
    </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'

  const
    BACKEND_IP = 'http://localhost:8080'

  import {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QItemTile,
    QItemSeparator,
    Dialog,
    Toast
  } from 'quasar'

  export default {
    name: 'index',
    components: {
      QLayout,
      QToolbar,
      QToolbarTitle,
      QBtn,
      QIcon,
      QList,
      QListHeader,
      QItem,
      QItemSide,
      QItemMain,
      QItemTile,
      QItemSeparator,
      Toast
    },
    data () {
      return {
        records: [],
        date: null,
        type: '',
        amount: 0
      }
    },

    methods: {

      fetchRecords () {
        axios.get(BACKEND_IP + '/api/records').then(function (response) {
          this.records = response.data
        }.bind(this))
      },
      frontEndDateFormat (rdate) {
        return moment(rdate).format('MM-DD HH:mm:ss')
      },
      deleteRecord (id) {
        Dialog.create({
          title: '确认',
          message: '确认删除本条记录吗？',
          buttons: [
            {
              label: '取消',
              handler () {
                console.log('取消...')
              }
            },
            {
              label: '确认',
              handler: () => {
                console.log('确认...')
                axios.get(BACKEND_IP + '/api/records/del/' + id).then(function (response) {
                  if (response.status === 200) {
                    Toast.create['positive']({
                      html: '删除成功！',
                      timeout: 1000,
                      onDismiss: () => {
                        this.fetchRecords()
                      }
                    })
                  }
                }.bind(this))
              }
            }
          ]
        })
      }
    },
    mounted () {
      this.fetchRecords()
    }
  }
</script>

