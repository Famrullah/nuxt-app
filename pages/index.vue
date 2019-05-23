<template>
  <section class="wrapper">
    <div class="home-page">
      <div class="home-page__layout">
        <li v-for="(item, index) in data1" :key="item[index]" class="timeline">
          <div
            class="border"
            :class="{
              hidden: index === data1.length - 1,
              isSentBorder: item.status === 'sent',
              isApprovedBorder: item.status === 'approved'
            }"
          ></div>
          <div class="img-container">
            <img
              :src="item.photo"
              class="img"
              :class="{
                isWaitingBorderRadius: item.status === '',
                isSentBorderRadius: item.status === 'sent',
                isApprovedBorderRadius: item.status === 'approved'
              }"
            />
          </div>
          <div class="text ">
            <p class="name">{{ item.first_name }} {{ item.last_name }}</p>
            <p
              class="message"
              :class="{
                isSentText: item.status === 'sent'
              }"
            >
              {{ item.message }}
            </p>
            <p class="date">{{ item.date_time }}</p>
          </div>
          <!-- <button @click="testFunc(data1.length)">klik</button> -->
        </li>
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

export default {
  components: {},
  data() {
    return {
      data1: data1,
      data2: data2,
      show: data1.length
    }
  },
  methods: {
    testFunc(index) {
      console.log(index)
    }
  }
}
</script>
