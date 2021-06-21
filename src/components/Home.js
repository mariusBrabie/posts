import React, { useState, useEffect } from 'react'
import Posts from './Posts'
import { fetchData, sortPosts } from '../functions/functions'
import { Pagination } from '@material-ui/lab'

export default function Home() {
  const [buttonText, setButtonText] = useState('SORT A - Z')
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)

  const getData = async () => {
    const data = await fetchData()
    setPosts(data)
  }

  const changeButtonText = () => {
    switch (buttonText) {
      case 'SORT A - Z':
        setButtonText('SORT Z - A')
        break
      case 'SORT Z - A':
        setButtonText('RESET')
        break
      default:
        setButtonText('SORT A - Z')
    }
  }

  const onPageChange = (e, value) => {
    setPage(value)
  }

  useEffect(() => {
    getData()
  }, [])

  const lastPostIndex = page * 20
  const firstPostIndex = lastPostIndex - 20
  const currentPosts = sortPosts(posts, buttonText).slice(
    firstPostIndex,
    lastPostIndex
  )

  return (
    <div className='wrapper'>
      <h1>Posts</h1>
      <hr />
      <div className='subheader'>
        <button className='sort-button' onClick={changeButtonText}>
          {buttonText}
        </button>
        <Pagination
          count={posts.length / 20}
          color='primary'
          onChange={onPageChange}
        />
      </div>

      <Posts buttonText={buttonText} posts={currentPosts} />
    </div>
  )
}
