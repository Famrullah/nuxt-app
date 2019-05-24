<template>
  <div>
    <div v-for="(item, index) in data" :key="item[index]" class="timeline">
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
          isApprovedBorderRadius: item.status === 'On approved'
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
        <div v-for="(attr, i) in item.items" :key="attr[i]" class="more-info">
          <div
            class="line"
            :class="{
              isSentBorder: attr.status === 'sent',
              isApprovedBorder: attr.status === 'approved'
            }"
          ></div>
          <div
            class="box-status"
            :class="{
              isSentBorderRadius: attr.status === 'sent',
              isApprovedBorderRadius: attr.status === 'approved'
            }"
          >
            <p>{{ attr.message }}</p>
            <p
              class="p-l-10"
              :class="{
                isSentBorder: attr.status === 'sent',
                isApprovedBorder: attr.status === 'approved'
              }"
            >
              {{ attr.status }}
            </p>
            <p>{{ attr.date_time }}</p>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  props: ['data'],
  methods: {
    getData() {
      console.log(this.data)
    }
  }
}
</script>
