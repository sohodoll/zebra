<template>
  <Intro />
  <div class="newsWrapper">
    <div v-if="news" class="newsGrid">
      <NewsCard v-for="item in currentNews" :key="item.code" :news="item" />
    </div>
    <div v-if="showMore" class="showMore">
      <button class="loadMoreButton" @click="handleShowMore">Загрузить еще</button>
    </div>
  </div>
</template>

<script>
import getNews from '../composables/getNews'
import Intro from '../components/Intro.vue'
import NewsCard from '../components/NewsCard.vue'
import { onUpdated, ref } from 'vue'

export default {
  name: 'News',
  components: {
    Intro,
    NewsCard,
  },
  setup() {
    const { news, error, load, loadMore } = getNews()
    const currentNews = ref(null)
    const currentPage = ref(1)
    const showMore = ref(false)

    load()

    onUpdated(() => {
      if (news) {
        currentNews.value = news.value.items
      }
      if (news.value.nav.total > 1 && currentPage.value < news.value.nav.total) {
        showMore.value = true
      }
      if (currentPage.value === news.value.nav.total) {
        showMore.value = false
      }
    })

    const handleShowMore = () => {
      loadMore(currentPage.value + 1)
      currentPage.value += 1
    }

    return {
      news,
      error,
      currentNews,
      showMore,
      handleShowMore,
    }
  },
}
</script>

<style>
.newsWrapper {
  padding: 60px 90px;
}

.newsGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
}

.showMore {
  margin: 10px auto;
  max-width: 215px;
}

.loadMoreButton {
  cursor: pointer;
  margin: 0 auto;
  padding: 16px 32px;
  color: #002dbf;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.2px;
  background: white;
  border-radius: 10px;
  border: 1px solid #002dbf;
}
</style>
