import {Link} from 'react-router-dom';

function Main() {
  return (
    <div className='min-h-screen bg-[#711E36]'>
      <div className='flex justify-center items-center pt-2'>
        <div className='flex items-center justify-between gap-7 rounded-2xl h-9 w-2/5 px-6 bg-[#C88259]'>
          <span>Chilli and Chill</span>

          <div className='flex items-center gap-7'>
            <Link to='/'>Главная</Link>
            <Link to='/catalog'>Каталог блюд</Link>
          </div>

          <button className='px-3 py-1 '>RU</button>
        </div>
      </div>
    </div>
  );
}

export default Main;