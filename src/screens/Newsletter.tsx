import React from 'react'
import Subscribe from '../components/Subscribe'
import { useAppSelector } from '../app/hooks'
import Post from '../components/Post'

const Newsletter = (): React.JSX.Element => {
  const data = useAppSelector(state => state.posts)
  const visiblePosts = data.posts.slice(0, 3)

  return (
    <div className='px-[32px] py-[30px]'>
      <Subscribe />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px] pt-[72px]">
        <Post
          categories={visiblePosts[0].categories}
          date={visiblePosts[0].date}
          introText={visiblePosts[0].introText}
          title={visiblePosts[0].title}
          id={visiblePosts[0].id}
          mainImage={data.mainImages[visiblePosts[0].id - 1]}
        />
        <Post
          categories={visiblePosts[1].categories}
          date={visiblePosts[1].date}
          introText={visiblePosts[1].introText}
          title={visiblePosts[1].title}
          id={visiblePosts[1].id}
          mainImage={data.mainImages[visiblePosts[1].id - 1]}
        />
        <Post
          categories={visiblePosts[2].categories}
          date={visiblePosts[2].date}
          introText={visiblePosts[2].introText}
          title={visiblePosts[2].title}
          id={visiblePosts[2].id}
          mainImage={data.mainImages[visiblePosts[2].id - 1]}
          containerStyle='sm:col-span-2 lg:col-span-1'
        />
      </div>
    </div>
  )
}

export default Newsletter
