import { useSelector, useDispatch } from 'react-redux';
import { setUser, unsetUser } from './reducers/user/userSlice';

function App() {
  const dispatch = useDispatch();

  const { email, fullName } = useSelector((state) => state.user);

  return (
    <div>
      <h2>Datos del usuario:</h2>
      <p>Email: {email}</p>
      <p>Nombre completo: {fullName}</p>

      <button
        className="btn btn-primary"
        onClick={() =>
          dispatch(
            setUser({
              email: 'lorenzo@asd.com',
              fullName: 'Ric Script',
              token: '123456',
            })
          )
        }
      >
        Click Set User!
      </button>

      <button
        className="btn btn-primary"
        onClick={() =>
          dispatch(
            unsetUser()
          )
        }
      >
        Click Unset User!
      </button>
    </div>
  );
}

export default App;
