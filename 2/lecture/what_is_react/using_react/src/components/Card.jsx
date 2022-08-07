import { useState } from 'react';
import Modal from './Modal';

function Card({ title, image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="card">
        <img className="card__img" src={image} alt="" />
        <p className="card__title">{title}</p>
        <button className="btn" id="reactBtn" onClick={openModal}>
          Enroll
        </button>
      </div>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </>
  );
}

export default Card;
