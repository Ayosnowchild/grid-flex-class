let githubUrl =
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";
let container = document.getElementById("container");

async function getData() {
  let promise = await fetch(githubUrl);
  let data = await promise.json();
  let display = data.map((item) => {
    return `<div id="main-js">
    <div id="box-js">
        <img src=${item.author.avatar_url} alt="pics" id="img-js"/>
        <div id="section-js">
            <p id="p-js">${item.author.login}</p>
            <a href=${item.author.html_url} id="link-js">Go to ${item.author.login} Github address</a>
        </div>
    </div>
</div>`;
  });
  container.innerHTML = display.join("");
  // elem.innerHTML = data[0].author.login;
  // userImage.src = data[0].author.avatar_url;
  // userAddress.href = data[0].author.html_url;
  console.log(data);
}

getData();
