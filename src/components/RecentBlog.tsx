import React from 'react'
import SectionTitle from './SectionTitle'
import { Posts } from '../misc/types'
import Post from './Post'

interface Props {
  posts: Posts[]
  postImages: string[]
}

const RecentBlog = ({ posts, postImages }: Props): React.JSX.Element => {
  return (
    <div>
      <SectionTitle style='mb-[32px]' title='Recent blog posts' />

      <div className="grid grid-cols-1 xl:grid-cols-2 items-stretch gap-[32px]">
        <Post
          key={posts[0].id}
          id={posts[0].id}
          title={posts[0].title}
          date={posts[0].date}
          mainImage={postImages[posts[0].id - 1]}
          categories={posts[0].categories}
          introText={posts[0].introText}
          containerStyle='xl:row-span-2 lg:grid' />
        <Post
          key={posts[1].id}
          id={posts[1].id}
          title={posts[1].title}
          date={posts[1].date}
          mainImage={postImages[posts[1].id - 1]}
          categories={posts[1].categories}
          introText={posts[1].introText}
          containerStyle='sm:flex sm:items-center sm:gap-[20px]'
          imgStyle="sm:w-[320px] xl:h-[200px]" />
        <Post
          key={posts[2].id}
          id={posts[2].id}
          title={posts[2].title}
          date={posts[2].date}
          mainImage={postImages[posts[2].id - 1]}
          categories={posts[2].categories}
          introText={posts[2].introText}
          containerStyle='sm:flex sm:items-center sm:gap-[20px]'
          imgStyle="sm:w-[320px] xl:h-[200px]" />
        <Post
          key={posts[3].id}
          id={posts[3].id}
          title={posts[3].title}
          date={posts[3].date}
          mainImage={postImages[posts[3].id - 1]}
          categories={posts[3].categories}
          introText={posts[3].introText}
          containerStyle='xl:col-span-2 xl:grid xl:grid-cols-2 xl:items-center xl:gap-[32px]' />
      </div>
    </div>
  )
}

export default RecentBlog
