const button = document.getElementById("button");

const post = document.getElementById("post");


button.addEventListener("click", function () {

    fetch("https://jsonplaceholder.typicode.com/posts/1")

        .then(function(response) {

            return response.json();

        })

        .then(function(data) {

            console.log(data);

            post.innerHTML = `
                <h2>${data.title}</h2>

                <p>${data.body}</p>
            `;

        });

});
