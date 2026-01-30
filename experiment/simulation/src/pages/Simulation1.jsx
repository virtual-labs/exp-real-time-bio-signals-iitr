import React from 'react';
import { useNavigate } from 'react-router-dom';

const Simulation3 = () => {
  const navigate = useNavigate();

  return (
	<div className='flex flex-col items-center justify-center min-h-screen'>
	  <h1 className='text-4xl font-bold mb-8'>Adaptive Signal Processing</h1>
	  <div className='flex gap-5'>
				<button
					className='px-6 py-2 rounded-lg bg-blue-button hover:bg-blue-hover text-black font-semibold border-2 border-black'
					onClick={() => navigate('/lms')}
				>
					LMS
				</button>
				<button
					className='px-6 py-2 rounded-lg bg-blue-button hover:bg-blue-hover text-black font-semibold border-2 border-black'
					onClick={() => navigate('/rls')}
				>
					RLS
				</button>
	  </div>
	  <h2 className="p-4 text-xl mt-8">
		Which algorithm you wanna try out
	  </h2>
	</div>
  );
};

export default Simulation3;
