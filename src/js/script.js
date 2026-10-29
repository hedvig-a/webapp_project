window.onload = function () {


    fetch('https://api.npoint.io/63c7205cc41a9edbb178')
        .then((response) => response.json())
        .then((json) => json.forEach((json) => {
            console.log("profileImageURL: ", json.profileImageURL, "username: ", json.username, "date: ", json.date, "imageURL: ", json.imageURL, "content: ", json.content);
            makePost(json);

        }));


}

function makePost(json) {
    // Terve postituse DIV
    let postDiv = document.createElement("div");
    postDiv.className = "post";

    //-----------------------------------


    let altProfileImage = document.createElement("img");
    altProfileImage.className = "account-img";
    altProfileImage.src = "res/images/me.png"; //Siia võiks saada selle profiili mis on lehel
    altProfileImage.alt = "profile"

    let profileImage = document.createElement("img");
    profileImage.className = "account-img";
    profileImage.src = json.profileImageURL;
    profileImage.alt = "profile"

    let username = document.createElement("h3");
    username.textContent = json.username;
    username.className = "account-name"; //Pole veel CSS-s

    let date = document.createElement("p");
    date.textContent = json.date;
    date.className = "post-date"; //Pole veel CSS-s

    let content = document.createElement("p");
    content.textContent = json.content;
    content.className = "account-content"; //Pole veel CSS-s

    let image = document.createElement("img");
    image.src = json.imageURL;
    image.className = "post-img"; //Pole veel CSS-s
    image.alt = "image";

    let infoDiv = document.createElement("div");
    infoDiv.className = "post-info";

    let kasutajaInfoArea = document.createElement("a");
    kasutajaInfoArea.href = "#";

    //Kui profiili pilti pole siis lisab alternatiivse pildi.
    if (json.profileImageURL) {
        kasutajaInfoArea.appendChild(profileImage);
    } else {
        kasutajaInfoArea.appendChild(altProfileImage);
    }

    infoDiv.appendChild(kasutajaInfoArea);
    infoDiv.appendChild(username);
    infoDiv.appendChild(date);
    postDiv.appendChild(infoDiv);

    let postImageDiv = document.createElement("div");
    postImageDiv.className = "post-image";
    postImageDiv.appendChild(image);

    postDiv.appendChild(infoDiv);

    //Kui pilti ei ole, siis pilti ei lisata postitusse.
    if (json.imageURL) {
        postDiv.appendChild(postImageDiv);
    }

    postDiv.appendChild(content);

    document.getElementById("post-list").appendChild(postDiv);
}
