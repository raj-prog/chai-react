import { useParams } from 'react-router-dom';

const User = () => {
  const { userid } = useParams();
  return (
    <div className='bg-gray-600 text-white p-4 text-2xl'>User: {userid}</div>
  );
};

export default User;
