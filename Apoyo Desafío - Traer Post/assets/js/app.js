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
        console.error(e);
    }
}


btnPost.addEventListener('click', Traerdatos);