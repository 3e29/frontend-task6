import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import BlogsList from '../components/BlogsList'
import AllBlog from '../components/AllBlog'
import Empty from '../components/Empty'
import Subscribe from '../components/Subscribe'

const Blogs = (): React.JSX.Element => {
  const data = useAppSelector(state => state.posts)
  const id = Number(useParams().id)
  const parentPostIndex: number | undefined = data.posts.findIndex(post => post.id === id);
  const visiblePosts = [...data.posts.slice(0, parentPostIndex), ...data.posts.slice(parentPostIndex + 1)]

  if (!data.posts[parentPostIndex] || !id)
    return <Empty msg='No Items Exists' />

  return (
    <div className='px-[32px] py-[30px]'>
      <div className='grid grid-cols-1 sm:grid-cols-3 sm:grid-reverse items-start gap-y-[32px] sm:gap-[32px] mb-[36px]'>
        <BlogsList
          containerStyle='col-span-2'
          img={data.mainImages[data.posts[parentPostIndex].id - 1]}
          secImages={data.secImages}
          post={data.posts[parentPostIndex]}
        />

        <AllBlog
          posts={visiblePosts}
          postsImages={data.mainImages}
          postsHolderStyle='grid grid-cols-1 gap-[32px]'
          sectionTitleStyle='mb-[32px]'
          containerStyle='sm:order-first'
        />
      </div>

      <Subscribe
      />
    </div>
  )
}

export default Blogs
