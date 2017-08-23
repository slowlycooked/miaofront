<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header">
      <q-btn flat @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title>
        苗苗成长日记
        <span slot="subtitle">开心每一天</span>
      </q-toolbar-title>
      <q-btn class="within-iframe-hide" flat @click="$router.replace('/index')" style="margin-right: 15px">
        <q-icon name="home" />
      </q-btn>
    </q-toolbar>

    <q-scroll-area slot="left" style="width: 100%; height: 100%">
      <q-list-header>菜单</q-list-header>
      <q-side-link item to="/Index">
        <q-item-side icon="list" />
        <q-item-main label="当日明细" />
      </q-side-link>
      <q-item-separator />

      <q-side-link item to="/Milk">
        <q-item-side icon="child care" />
        <q-item-main label="奶" sublabel="记录吃奶情况" />
      </q-side-link>
      <q-side-link item to="/Oil">
        <q-item-side icon="wb_incandescent" />
        <q-item-main label="维生素" sublabel="记录吃维生素情况" />
      </q-side-link>
      <q-side-link item to="/Sleep">
        <q-item-side icon="brightness_2" />
        <q-item-main label="睡觉" sublabel="记录睡觉情况" />
      </q-side-link>
    </q-scroll-area>

    <router-view />

  </q-layout>
</template>

<script>
  import {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QTabs,
    QRouteTab,
    QBtn,
    QIcon,
    QItemSide,
    QItemMain,
    QSideLink,
    QListHeader,
    QScrollArea,
    QItemSeparator
  } from 'quasar'

  export default {
    components: {
      QLayout,
      QToolbar,
      QToolbarTitle,
      QSearch,
      QTabs,
      QRouteTab,
      QBtn,
      QIcon,
      QItemSide,
      QItemMain,
      QSideLink,
      QListHeader,
      QScrollArea,
      QItemSeparator
    },
    data () {
      return {
      }
    }
  }
</script>
