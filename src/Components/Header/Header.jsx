import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between max-w-7xl mx-auto p-6 border-b-2'>
            <h1 className='text-5xl font-bold'>Knowledged Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;