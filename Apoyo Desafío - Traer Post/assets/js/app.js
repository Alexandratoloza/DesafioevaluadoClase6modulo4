const btnPost = document.getElementById('btnPost');

async function Traerdatos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
       
        const posts = await response.json();

        // Limpiamos la lista antes de agregar los nuevos posts
        const postData = document.getElementById('postData');
        postData.innerHTML = '';

        // Iteramos sobre los posts y los agregamos a la lista
        posts.forEach(post => {
            const listItem = document.createElement('li');
            listItem.textContent = post.title; // Mostramos solo el título del post
            postData.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
        alert('Ocurrió un error al obtener los posts. Por favor, inténtalo de nuevo más tarde.');
    }
}

// Manejador de evento para el botón de obtención de posts
btnPost.addEventListener('click', Traerdatos);