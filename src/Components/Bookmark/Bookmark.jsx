import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div>
            <h2 className='p-8 my-5 rounded-lg bg-gray-50  w-4/5 mx-auto'>{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
};

export default Bookmark;