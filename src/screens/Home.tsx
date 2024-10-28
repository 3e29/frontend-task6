import React from 'react'
import RecentBlog from '../components/RecentBlog'
import { useAppSelector } from '../app/hooks'
import AllBlog from '../components/AllBlog'
import Pagination from '../components/Pagination'

const Home = (): React.JSX.Element => {
  const data = useAppSelector(state => state.posts)
  const postImages = useAppSelector(state => state.posts.mainImages)

  return (
    <div>
      <h1 className="xl:text-[243px] md:text-[160px]  sm:text-[120px] text-[72px] font-bold uppercase border-y-2 border-slate border-solid text-center my-8">The Blog</h1>

      <div className='px-[32px] py-[30px]'>
        <RecentBlog posts={data.posts.slice(0, 4)} postImages={postImages.slice(0, 4)} />
        <AllBlog
          postsHolderStyle='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-[32px]'
          sectionTitleStyle='lg:mt-8 sm:mt-6 mt-8 mb-[32px]'
          posts={data.visiblePosts}
          postsImages={postImages} />
        <Pagination currentPage={data.page} totalPages={data.pages} />
      </div>
    </div>
  )
}

export default Home
