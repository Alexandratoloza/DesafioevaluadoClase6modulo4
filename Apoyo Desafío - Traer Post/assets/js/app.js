const btnPost = document.getElementById('btnPost');

async function Traerdatos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
       
        const posts = await response.json();

        const postData = document.getElementById('postData');
        postData.innerHTML = '';

        posts.forEach(post => {
            const listItem = document.createElement('li');
            listItem.textContent = post.title; 
            postData.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
        alert('Ocurrió un error al obtener los posts. Por favor, inténtalo de nuevo más tarde.');
    }
}


btnPost.addEventListener('click', Traerdatos);