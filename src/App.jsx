import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMarks = blog => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks)
  }

  const handleMarkAsRead = (time, id) => {
    const newTime = readingTime + time;
    setReadingTime(newTime);
    const remaining = bookMarks.filter(bookMark => bookMark.id !== id);
    setBookMarks(remaining)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex  max-w-7xl mx-auto'>
        <Blogs handleBookMarks={handleBookMarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
