import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookMarks, readingTime }) => {
    return (
        <div className="md:w-1/3 mt-10  mx-auto">
            <div className='my-10 p-5 rounded-lg bg-blue-300'>
                <h1 className='text-3xl font-bold'>Spent time on read : {readingTime}</h1>
            </div>
            <div className=' bg-gray-200 p-5  h-fit '>
                <h1 className="text-3xl font-bold text-center">Bookmarked Blogs : {bookMarks.length}</h1>
                {
                    bookMarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>

    );
};
Bookmarks.propTypes = {
    bookMarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;