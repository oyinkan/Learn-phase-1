document.querySelector("#getData").addEventListener("click", getAPI);

function getAPI() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        let result = ``;
        data.forEach((user) => {
            const { name, website } = user;
            result += 
                `<div class="user-wrapper">
                    <h3>${name}</h3>
                    <a href="http://${website}" target="_blank">${website}</a>
                </div>`;
            document.getElementById("users").innerHTML = result;
        });
    })
    .catch(err => console.log(`Error with message: ${err}`));
}