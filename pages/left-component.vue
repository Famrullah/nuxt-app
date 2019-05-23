<template>
  <div>
    <li v-for="(item, index) in data" :key="item[index]" class="timeline">
      <div
        class="border"
        :class="{
          hidden: index === data.length - 1,
          isSentBorder: item.status === 'sent',
          isApprovedBorder: item.status === 'approved'
        }"
      ></div>
      <img
        :src="item.photo"
        class="img"
        :class="{
          isWaitingBorderRadius: item.status === '',
          isSentBorderRadius: item.status === 'sent',
          isApprovedBorderRadius: item.status === 'approved'
        }"
      />
      <div class="text ">
        <p class="name">{{ item.first_name }} {{ item.last_name }}</p>
        <p
          class="message"
          :class="{
            isSentText: item.status === 'sent',
            isApprovedText: item.status === 'approved'
          }"
        >
          {{ item.message }}
        </p>
        <p v-if="item.status === 'approved'" class="note">{{ item.note }}</p>
        <p class="date">
          {{ item.date_time }}
        </p>
        <p v-if="item.status === ''">-</p>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  props: ['data']
}
</script>
