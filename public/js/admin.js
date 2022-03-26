const newFormHandler = async(event) => {
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
            document.location.replace('/admin');

        } else {
            alert('Failed to create product');
        }
    }
};

const delButtonHandler = async(event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

<<<<<<< HEAD
        const response = await fetch(`/admin/delete/product/${id}`, {
=======
        const response = await fetch(`/api/product/${id}`, {
>>>>>>> 3dab054c61a31582dfe9f3ef82dab8950e11d795
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/admin');
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