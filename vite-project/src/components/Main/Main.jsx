import { useState } from 'react';
import profile from '../../imagens/profile.png';
import Popup from './components/Popup/Popup.jsx';   
import Card from './components/Popup/components/Card/Card.jsx';
import NewCard from './components/Popup/components/NewCard/NewCard.jsx';
import EditProfile from './components/Popup/components/EditProfile/EditProfile.jsx';
import EditAvatar from './components/Popup/components/EditAvatar/EditAvatar.jsx';

const cards = [
    {
      isLiked: false,
      _id: '5d1f0611d321eb4bdcd707dd',
      name: 'Yosemite Valley',
      link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
      owner: '5d1f0611d321eb4bdcd707dd',
      createdAt: '2019-07-05T08:10:57.741Z',
    },
    {
      isLiked: false,
      _id: '5d1f064ed321eb4bdcd707de',
      name: 'Lake Louise',
      link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
      owner: '5d1f0611d321eb4bdcd707dd',
      createdAt: '2019-07-05T08:11:58.324Z',
    },
  ];

export default function Main() {
const[popup,setPopup]=useState(null); 

const newCardPopup={ title: 'New card', children: <NewCard /> };
const editProfilepopup={ title: 'Edit profile', children: <EditProfile /> };
const editAvatarpopup={ title: 'Edit profile picture', children: <EditAvatar /> };

function handleOpenPopup(popup) {
  setPopup(popup);
}

function handleClosePopup() {
  setPopup(null);
}

  return (

    console.log(cards),
    <main className='content'>
        <section className='content__profile'>
          <div className='content__avatar-container'>
            <img
              src={profile}
              alt='Foto de perfil'
              className='content__avatar'
            />
            <button
              className='profile__avatar-edit'
              aria-label='Alterar foto do perfil'
              type='button'
                onClick={() => handleOpenPopup(editAvatarpopup)}
            ></button>
          </div>
          <div className='profile'>
            <h1 className='profile__name'>Jacques Cousteau</h1>
            <button
              className='profile__edit'
              aria-label='Editar perfil'
              type='button'
                onClick={() => handleOpenPopup(editProfilepopup)}
            ></button>
            <h2 className='profile__role'>Explorador</h2>
          </div>
          <button
            className='profile__add'
            aria-label='Adicionar cards'
            type='button'
            onClick={() => handleOpenPopup(newCardPopup)}
          ></button>
        </section>
        <section className='elements'></section>
        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </main>
    );
}