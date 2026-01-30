import { Link } from 'react-router-dom';
import Simulation1 from './Simulation3';
import Simulation2 from './Simulation2';
import Simulation3 from './Simulation1';

// Selection page component
const Simulation = () => {
  return (
    <div className='min-h-screen flex flex-col items-center p-20'>
      <header className='w-full max-w-4xl'>
        <h1 className='text-4xl sm:text-5xl font-extrabold leading-tight text-center text-gray-900 mb-60'>
          Adaptive Signal Processing
        </h1>
      </header>

      <main className='flex-1 flex items-start justify-center w-full mt-2'>
        <div className='w-full max-w-3xl mx-auto flex gap-5 justify-center'>
          <Link to="/simulation/1">
            <button className='px-6 py-2 rounded-lg bg-blue-button hover:bg-blue-hover text-center text-black border-2 border-black min-w-[180px]'>
              Stationary_LMS_RLS
            </button>
          </Link>
          <Link to="/simulation/2">
            <button className='px-6 py-2 rounded-lg bg-blue-button hover:bg-blue-hover text-center text-black border-2 border-black min-w-[180px]'>
              AutoRegressive
            </button>
          </Link>
          <Link to="/simulation/3">
            <button className='px-6 py-2 rounded-lg bg-blue-button hover:bg-blue-hover text-center text-black border-2 border-black min-w-[180px]'>
              Non Stationary_LMS_RLS
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Simulation;