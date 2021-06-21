import axios from 'axios'

export const fetchData = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return data
}

export const sortPosts = (posts, sortBy) => {
  return [...posts].sort((a, b) => {
    switch (sortBy) {
      case 'SORT Z - A':
        return a.title < b.title ? -1 : 1
      case 'RESET':
        return a.title > b.title ? -1 : 1
      default:
        return a.id < b.id ? -1 : 1
    }
  })
}
