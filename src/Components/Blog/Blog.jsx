import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Blog = ({ blog, handleBookMarks, handleMarkAsRead }) => {
    const { id, cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mt-10 pb-10 border-b-2'>
            <img className='mt-8 rounded-lg' src={cover} alt="" />
            <div className='flex justify-between my-5'>
                <div className='flex gap-2 '>
                    <img className='w-14 h-14' src={author_img} alt="" />
                    <div>
                        <h2>{author}</h2>
                        <h2>{posted_date}</h2>
                    </div>
                </div>
                <div className='flex gap-1 items-center'>
                    <h2>{reading_time} min read</h2>
                    <button onClick={() => handleBookMarks(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-5xl font-bold'>{title}</h1>
            <p className='my-5'>
                {
                    hashtags.map((hashtag, idx) => <span className='ms-2' key={idx}><a> #{hashtag} </a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time, id)} className='font-bold text-blue-500 underline'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;