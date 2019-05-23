<template>
  <section class="wrapper">
    <div class="home-page">
      <div class="home-page__layout">
        <leftComponent :data="data1" />
      </div>
      <div class="home-page__layout">
        <div v-for="(item, index) in data2" :key="item[index]">
          {{ item.status }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import './index.scss'
import { data1, data2 } from '../data'
import leftComponent from './left-component'

export default {
  components: {
    leftComponent
  },
  data() {
    return {
      data1: data1,
      data2: data2
    }
  },
  methods: {}
}
</script>
