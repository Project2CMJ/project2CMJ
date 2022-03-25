const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#product-name').value.trim();
  const price = document.querySelector('#product-price').value.trim();
  const description = document.querySelector('#product-desc').value.trim();

  if (name && price && description) {
    const response = await fetch(`/api/admin/product`, {
      method: 'POST',
      body: JSON.stringify({ name, price, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/product');
      
    } else {
      alert('Failed to create product');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/admin/product/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/product');
    } else {
      alert('Failed to delete product');
    }
  }
};

document
  .querySelector('.new-product-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.product-list')
  .addEventListener('click', delButtonHandler);
