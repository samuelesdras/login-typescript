import { useContext } from 'react';
import { TextField, CircularProgress } from '@mui/material';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const userContext = useContext(UserContext);

  console.log('profile', userContext);
  return (
    <>
      {!userContext?.user?.firstName && <CircularProgress />}
      <div>
        Bem vindo(a) {userContext?.user?.firstName}{' '}
        {userContext?.user?.lastName}!!
      </div>
      <div>
        <img src={userContext?.user?.image} alt="" />
      </div>
      <div>
        <TextField
          disabled
          id="filled-required"
          label={userContext?.user?.firstName}
          variant="standard"
        />
        <TextField
          disabled
          id="filled-required"
          label={userContext?.user?.lastName}
          variant="standard"
        />
        <TextField
          disabled
          id="filled-required"
          label={userContext?.user?.email}
          variant="standard"
        />
        <TextField
          disabled
          id="filled-required"
          label={userContext?.user?.username}
          variant="standard"
        />
        <TextField
          disabled
          id="filled-required"
          label={userContext?.user?.gender}
          variant="standard"
        />
      </div>
    </>
  );
};

export default Profile;
