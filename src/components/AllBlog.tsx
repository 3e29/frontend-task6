import React from 'react'
import SectionTitle from './SectionTitle'
import Post from './Post'
import { PostSection } from '../misc/types';

interface Props {
  postsImages: string[]
  posts: PostSection[]
  postsHolderStyle?: string,
  sectionTitleStyle?: string,
  containerStyle?: string,
}

const AllBlog = ({ postsImages, posts, postsHolderStyle, sectionTitleStyle, containerStyle }: Props): React.JSX.Element => {
  return (
    <div className={containerStyle}>
      <SectionTitle style={sectionTitleStyle} title='All blog posts' />

      <div className={postsHolderStyle}>
        {
          posts.map(post =>
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.date}
              mainImage={postsImages[post.id - 1]}
              categories={post.categories}
              introText={post.introText}
            />
          )
        }
      </div>


    </div>
  )
}

export default AllBlog
