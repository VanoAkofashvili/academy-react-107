const enrollBtn = document.getElementById('reactBtn');

enrollBtn.addEventListener('click', openCheckoutModal);

function openCheckoutModal(event) {
  // Backdrop
  const backdrop = document.createElement('div');
  backdrop.setAttribute('id', 'backdrop');
  backdrop.addEventListener('click', closeModal);

  // Modal
  const modal = document.createElement('div');
  modal.setAttribute('id', 'modal');
  modal.classList.add('modal');

  const modalTitle = document.createElement('p');
  modalTitle.textContent = 'Complete payment';

  const cardNumber = document.createElement('input');
  cardNumber.placeholder = 'Card number';

  const nameOnCard = document.createElement('input');
  nameOnCard.placeholder = 'Name on card';

  const checkoutBtn = document.createElement('button');
  checkoutBtn.classList.add('btn');
  checkoutBtn.textContent = 'Complete purchase';

  modal.appendChild(modalTitle);
  modal.appendChild(cardNumber);
  modal.appendChild(nameOnCard);
  modal.appendChild(checkoutBtn);

  const body = document.body;
  body.appendChild(backdrop);
  body.appendChild(modal);
}

function closeModal() {
  const backdrop = document.getElementById('backdrop');
  const modal = document.getElementById('modal');
  backdrop.remove();
  modal.remove();
}
