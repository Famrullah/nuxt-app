<template>
  <section class="wrapper">
    <div class="home-page">
      <div class="home-page__layout">
        <leftComponent :data="data1" />
      </div>
      <div class="home-page__layout">
        <rightComponent :data="data2" />
      </div>
    </div>
  </section>
</template>

<script>
import './index.scss'
import { data1, data2 } from '../data'
import leftComponent from './left-component'
import rightComponent from './right-component'

export default {
  components: {
    leftComponent,
    rightComponent
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
