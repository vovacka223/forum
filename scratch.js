document.addEventListener('DOMContentLoaded', function () {
    const forumSection = document.getElementById('forum');
    const postForm = document.getElementById('post-form');

    postForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const message = document.getElementById('message').value;

        if (username && message) {
            createPost(username, message);
            postForm.reset();
        } else {
            alert('Please enter both username and message.');
        }
    });

    function createPost(username, message) {
        const postContainer = document.createElement('div');
        postContainer.classList.add('post');

        const usernameElement = document.createElement('strong');
        usernameElement.textContent = username;

        const messageElement = document.createElement('p');
        messageElement.textContent = message;

        postContainer.appendChild(usernameElement);
        postContainer.appendChild(messageElement);

        forumSection.appendChild(postContainer);
    }
});