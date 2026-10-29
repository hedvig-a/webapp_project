window.onload = function () {


    /*    fetch('https://api.npoint.io/63c7205cc41a9edbb178')
            .then((response) => response.json())
            .then((json) => json.forEach((json) => {
                console.log("profileImageURL: ", json.profileImageURL, "username: ", json.username, "date: ", json.date, "imageURL: ", json.imageURL, "content: ", json.content);
                makePost(json);

            }));
    */

    const postData = [
        {
            "profileImageURL": "",
            "username": "bot_59743",
            "date": "20/10/2026",
            "imageURL": "",
            "content": "Iceland has a population smaller than Tampa yet we let them sit there at the UN all smug. Always bragging about how they have cured their society of like IBS and it turns out the one guy who had it just moved away."
        },
        {
            "profileImageURL": "https://i.imgur.com/9uUeGK5.png",
            "username": "drblight",
            "date": "18/10/2026",
            "imageURL": "",
            "content": "The Pestilenceeeee"
        },
        {
            "profileImageURL": "https://i.imgur.com/c88M9jF.png",
            "username": "tonylolz",
            "date": "10/10/2026",
            "imageURL": "",
            "content": "âÌ#\u001737ì:šË\u0003éÍ1\u0015Ô\u001Eb~Š³Â,3\u0001´;$¦NŸ9\"’äTØ¦àùñ ˆ5v*·O¾‰´¸]¥\u0001ÍH›Øáô\u0015PS“ EuT\u0013ç»Ñ<Ã›tÑè¹]\u0081©€\u0014~0áÎÊ\u0002åý6„Ô[?äm\u001A\u000EÖÎ|e•!ßgå‹žkã÷°ç\u000E\u0012Å’¡uo¨ù óÌÛ-6Q0br¿ÜL&QùÕ\"H1ÚŽ§ ãûe›Ê››a¸“j\u001CÖ'R¶Õ\u001DÆ·»&à\u0011|Ëh\u0017 (ƒQhg®ïÔ;Y^•\u0004bIÐ‹©&óÒ;\u0017\u0016ãO‘z‡öƒR\u0005D2(u™Ï\u0005’Ö;QÑÌšú©‰î›‹\u0005Ä3è\u0006\u001E_¥¤hWîbT\u000Bx[Æó÷½]h\u001B˜m\u008F„í¾\u001D\u0015tPbÔ‚¨ö8…§i<ÔŽëHíoWÚÿ&\u001CÉz1<\u00AD“ÒŒÕdßèÈ§Z£$y\b4I‡1Ä\u001D÷ò›c|Ó\u008F\u0003t\bVk®ø@rÞY¼ê@\u0014M³”ÕR/HÌ°}z#\u0081Æ»oTi\u0014æK¬‚•\u001Aò,4Oàœâ•~95\u0014êRËO Ö,\u0018Üå\u0015&£p5ÿ\u0019\u0004ñ0!Õtá©GÆì9¬4\u001B[k‹À¡,h¸®åÖ§Z\u0010….[p\u0014ÅU74ð‡“cýá‘Ã0'QÜ\u007F \u001C¨~L×;ŠHF"
        },
        {
            "profileImageURL": "",
            "username": "kensama",
            "date": "10/10/2026",
            "imageURL": "https://i.imgur.com/rLo6qkj.png",
            "content": "Hello Every-nyan!"
        },
        {
            "profileImageURL": "https://i.pinimg.com/736x/5f/95/1e/5f951e532a573dd3590bc28d86d26a04.jpg",
            "username": "lyoncandy",
            "date": "08/10/2026",
            "imageURL": "https://i.imgur.com/tqFOrg6.png",
            "content": "These residents sure are evil..."
        },
        {
            "profileImageURL": "",
            "username": "regularguy",
            "date": "04/10/2026",
            "imageURL": "https://i.imgur.com/GnHb4jj.png",
            "content": "Haha this is how I feel whenever I need to do something"
        },
        {
            "profileImageURL": "",
            "username": "fella",
            "date": "02/10/2026",
            "imageURL": "https://i.imgur.com/rpwZuwZ.jpeg",
            "content": "The perfect man doesn't exi-"
        },
        {
            "profileImageURL": "https://i.pinimg.com/736x/18/ee/d2/18eed243791795492ae336996d6da6d7.jpg",
            "username": "regularguy2",
            "date": "29/09/2026",
            "imageURL": "",
            "content": "Hello! I am looking for an apartment in Tartu!\n I am 43, male, recently divorced. I am deathly allergic to cats but I love em! Can't get enough.\n Let me know if you'd have anything available."
        },
        {
            "profileImageURL": "",
            "username": "donniesocial",
            "date": "29/09/2026",
            "imageURL": "",
            "content": "Does someone know a good lasagne recipe? Something without gluten or tomatoes or cheese or meat or beans or whatever those green leaves are that those italians are obsessed with."
        },
        {
            "profileImageURL": "",
            "username": "googday",
            "date": "29/09/2026",
            "imageURL": "",
            "content": "All right, I've been thinking, when life gives you lemons, don't make lemonade! Make life take the lemons back! Get mad! I don't want your damn lemons! What am I supposed to do with these? Demand to see life's manager!\n Make life rue the day it thought it could give Cave Johnson lemons! Do you know who I am? I'm the man whose gonna burn your house down - with the lemons!"
        }
    ];

    postData.forEach((post) => {
        console.log("profileImageURL: ", post.profileImageURL, "username: ", post.username, "date: ", post.date, "imageURL: ", post.imageURL, "content: ", post.content);
        makePost(post);
    });
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
