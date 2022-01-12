import { useState } from 'react';
import BlogList from './BlogList';
const Home = () => {
  const title = 'Home Page ';
  const [blogs, setBlogs] = useState([
    {
      title: 'My new website',
      body: 'Lorem ipsum dolor sit amet...',
      author: 'mario',
      id: 1,
    },
    {
      title: 'Welcome Party!',
      body: 'Lorem ipsum dolor sit amet...',
      author: 'luigi',
      id: 2,
    },
    {
      title: 'Web dev top tips!',
      body: 'Lorem ipsum dolor sit amet...',
      author: 'yoshi',
      id: 3,
    },
  ]);

  return (
    <div className='home'>
      <h2>{title}</h2>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
