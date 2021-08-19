// import useAuthCheck from '../../hooks/useAuthCheck';
import {useFetchUser} from '../../context/userContext';
import useTokenCheck from '../../helper/tokenCheck';
import useDoctorAPI from '../../hooks/useDoctorAPI';
import DoctorCard from '../../components/DoctorCard';

function Home() {
  //const {data: user, isPending, error} = useAuthCheck('http://localhost:5000/api/v1/auth/patient/');
  useTokenCheck();

  const {state} = useFetchUser();
  const {data: doctor} = useDoctorAPI('http://localhost:5000/api/v1/doctor');

  return (
    <div className='wrapper'>
      <div>Home</div>
      {state.isLoading && <div>loading</div>}
      {state.data && <div>{state.data.name}</div>}
      {state.data && <DoctorCard />}
    </div>
  );
}

export default Home;
