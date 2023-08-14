import { ref } from 'vue'

export const getNews = () => {
  const news = ref([])
  const error = ref(null)
  const currentNews = ref(null)
  const currentPage = ref(1)
  const showMore = ref(false)

  const load = async () => {
    try {
      const data = await fetch('http://flems.github.io/test/api/news')
      if (!data.ok) {
        throw new Error('Something wrong wit the news request')
      }

      news.value = await data.json()
    } catch (e) {
      console.error(e)
    }
  }

  const loadMore = async (pageNum) => {
    try {
      const data = await fetch(`http://flems.github.io/test/api/news/${pageNum}`)
      if (!data.ok) {
        throw new Error('Something wrong with the news request')
      }

      currentNews.value = await data.json()
      news.value.items.push(...currentNews.value.items)
    } catch (e) {
      console.error(e)
    }
  }

  return {
    news,
    error,
    load,
    loadMore,
    currentNews,
    currentPage,
    showMore,
  }
}

export default getNews
