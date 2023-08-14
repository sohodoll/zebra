<template>
  <div class="card">
    <div class="highlight">
      <img :src="news.image" />
    </div>
    <div class="contentWrapper">
      <div class="content">
        <div class="date">
          <span class="dateNumber">{{ day }}</span>
          <div class="dateData">
            <span class="dateMonth">{{ month }}</span>
            <span class="dateYear">{{ year }}</span>
          </div>
        </div>
        <h3 class="newsTitle">{{ news.name }}</h3>
        <p class="newsText">{{ news.previewText }}</p>
      </div>
    </div>
    <div class="tags">
      <span class="tag">Новости</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['news'],
  setup(props) {
    const { news } = props
    const date = new Date(news.date)
    const day = date.getDate()
    const month = date.toLocaleString('en-US', { month: 'long' })
    const year = date.getFullYear()

    return {
      news,
      day,
      month,
      year,
    }
  },
}
</script>
<style>
.card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid #0f62fe;
}

.highlight img {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  width: 100%;
}

.contentWrapper {
  padding: 20px 32px 0;
}

.date {
  color: #a1a7b5;
  display: flex;
  align-items: center;
  gap: 4px;
}

.dateNumber {
  font-size: 36px;
}

.dateData {
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  letter-spacing: -0.15px;
}

.newsTitle {
  margin-top: 8px;
  color: #0c5bef;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

.newsText {
  margin-top: 15px;
  color: #222327;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.2px;
}

.tags {
  margin-top: auto;
  padding: 15px 32px 32px;
}

.tag {
  border-radius: 360px;
  background: #f0f6fe;
  padding: 4px 16px;
}
</style>
