import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({ handleBookMarks, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog
                    handleBookMarks={handleBookMarks}
                    key={blog.id}
                    handleMarkAsRead={handleMarkAsRead}
                    blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookMarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blogs;