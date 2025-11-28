
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from '../imagens/around.png';
import line from '../imagens/Line.png';
import profile from '../imagens/profile.png';

function App() {
  return (
    <>
      <div className='page'>
      <header className='header'>
        <img src={logo} alt='logo header' className='header__logo' />
        <img src={line} alt='linha header' className='header__line' />
      </header>
      <main className='content'>
        <section className='content__profile'>
          <div className='content__avatar-container'>
            <img
              src={profile}
              alt='foto de Jacques Cousteau'
              className='content__avatar'
            />
            <button
              className='profile__avatar-edit'
              aria-label='Alterar foto do perfil'
            ></button>
          </div>
          <div className='profile'>
            <h1 className='profile__name'>Jacques Cousteau</h1>
            <button
              className='profile__edit'
              aria-label='Editar perfil'
              type='button'
            ></button>
            <h2 className='profile__role'>Explorador</h2>
          </div>
          <button
            className='profile__add'
            aria-label='Adicionar cards'
            type='button'
          ></button>
        </section>
        <section className='elements'></section>
      </main>
      <footer className='footer'>
        <p className='footer__copyright'>&copy; 2025 Around The U.S.</p>
      </footer>
    </div>
    </>
  )
}

export default App
