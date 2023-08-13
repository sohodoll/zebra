import { ref } from 'vue'

export const getNews = () => {
  const news = ref([])
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

  return {
    news,
    error,
    load,
  }
}

export default getNews
