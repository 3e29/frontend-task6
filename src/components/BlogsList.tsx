import React from 'react'
import BlogsParent from './BlogsParent'
import Blog from './Blog'
import Category from './Category'
import { PostSection } from '../misc/types'

interface Props {
  img: string,
  secImages: string[],
  post: PostSection,
  containerStyle?: string,
}

const BlogsList = ({ post, img, secImages, containerStyle }: Props): React.JSX.Element => {
  return (
    <div className={containerStyle}>
      <BlogsParent
        date={post.date}
        title={post.title}
        img={img}
        content={post.sections[0].content}
        desc={post.sections[0].imageDescription}
      />

      {post.sections.slice(1).map((blog, index) =>
        <Blog
          id={index}
          key={index}
          desc={blog.imageDescription}
          img={secImages[index]}
          content={blog.content}
        />
      )}

      <div className="flex items-center gap-[8px]">
        {post.categories.map((cate, index) =>
          <Category
            key={`cate-${index}`}
            category={cate}
          />)}
      </div>
    </div>
  )
}

export default BlogsList
