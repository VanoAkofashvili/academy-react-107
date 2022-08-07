function Modal({ closeModal }) {
  return (
    <>
      <div id="backdrop" onClick={closeModal}></div>
      <div className="modal">
        <p>Complete payment</p>
        <input placeholder="Card number" />
        <input placeholder="Name on card" />
        <button className="btn">Complete purchase</button>
      </div>
    </>
  );
}

export default Modal;
