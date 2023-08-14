import { ref } from 'vue'

export const getNews = () => {
  const news = ref([])
  const newNews = ref([])
  const error = ref(null)

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
    console.log(pageNum)
    try {
      const data = await fetch(`http://flems.github.io/test/api/news/${pageNum}`)
      if (!data.ok) {
        throw new Error('Something wrong with the news request')
      }

      newNews.value = await data.json()
      news.value.items.push(...newNews.value.items)
    } catch (e) {
      console.error(e)
    }
  }

  return {
    news,
    error,
    load,
    loadMore,
  }
}

export default getNews
