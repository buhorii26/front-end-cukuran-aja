import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { asyncSetAuthUser } from '../states/authUser/action';
import Header from '../components/Header';
import Footer from '../components/Footer';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };

  return (
    <>
      <Header />
      <section className="login-page">
        <article className="login-page__main">
          <h2>
            Login
          </h2>

          <LoginForm login={onLogin} />
          <p>
            Belum punya akun?
            {' '}
            <Link to="/register">Daftar disini</Link>
          </p>
        </article>
      </section>
      <Footer />
    </>
  );
}

export default LoginPage;
