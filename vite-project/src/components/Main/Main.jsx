import { useState } from 'react';
import profile from '../../imagens/profile.png';
import Popup from './components/Popup/Popup.jsx';   
import Card from './components/Popup/components/Card/Card.jsx';
import NewCard from './components/Popup/components/NewCard/NewCard.jsx';
import EditProfile from './components/Popup/components/EditProfile/EditProfile.jsx';
import EditAvatar from './components/Popup/components/EditAvatar/EditAvatar.jsx';
import ImagePopup from './components/Popup/components/ImagePopup/ImagePopup.jsx';

const initialCards =[
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
const[popup,setPopup] = useState(null); 
const [cards, setCards] = useState(initialCards);
const [selectedCard, setSelectedCard] = useState(null)

const newCardPopup={ title: 'New card', children: <NewCard /> };
const editProfilepopup={ title: 'Edit profile', children: <EditProfile /> };
const editAvatarpopup={ title: 'Edit profile picture', children: <EditAvatar /> };

function handleOpenPopup(popup) {
  setPopup(popup);
}

function handleClosePopup() {
  setPopup(null);
}

function handleOpenImagePopup(card) {
  setSelectedCard(card);
  const imagePopupObject = {
    title: '',
    children: <ImagePopup card={card} />,
  };
  setPopup(imagePopupObject);
}

function handleDelete(cardId) {
    setCards(cards.filter(card => card._id !== cardId));
}

function handleLike(cardId) {
    console.log('like clicado para card:', cardId);
    setCards(cards.map(card => card._id === cardId
        ? {...card, isLiked: !card.isLiked} : card
    ))
}

  return (
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
        <section className='cards'>
                {cards.map((card) => (
                    <Card
                    key={card._id} card={card} onImageClick={handleOpenImagePopup} 
                    onDelete= {handleDelete}
                    onLike= {handleLike}/>
                ))}
        </section>
        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}  
      </main>
    );
}