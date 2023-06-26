// Array of image URLs
const path = "images/";
const images = [
    {
        name: "Eric Self.",
        file: "Eric Self.jfif",
        post: "https://www.instagram.com/p/Cj8A6lZNHuh"
    },
    {
        name: "Esmeralda Self.",
        file: "Esmeralda Self.jpg",
        post: "https://www.instagram.com/p/CZU23vdLLxu"
    },
    {
        name: "Jacob Self.",
        file: "Jacob Self.jpg",
        post: "https://www.instagram.com/p/CY1CAigt7UK"
    },
    {
        name: "Jagger Self.",
        file: "Jagger Self.jpg",
        post: "https://www.instagram.com/p/CYoVUpotTKK"
    },
    {
        name: "Klaus Self.",
        file: "Klaus Self.jpg",
        post: "https://www.instagram.com/p/CYoSV--ts-f"
    },
    {
        name: "Levi Self.",
        file: "Levi Self.jpg",
        post: "https://www.instagram.com/p/CY4XaGYNeWv"
    },
    {
        name: "Michael Self.",
        file: "Michael Self - Clockwork Orange - 1.jfif",
        post: "https://www.instagram.com/p/CbhWX1zsend"
    },
    {
        name: "Michael Self.",
        file: "Michael Self - Clockwork Orange - 2.jfif",
        post: "https://www.instagram.com/p/CbhWX1zsend"
    },
    {
        name: "Michael Self.",
        file: "Michael Self - Clockwork Orange - 3.jfif",
        post: "https://www.instagram.com/p/CbhWX1zsend"
    },
    {
        name: "Michael Self.",
        file: "Michael Self.jfif",
        post: "https://www.instagram.com/p/CbVC9_pMVJw"
    },
    {
        name: "Michael Self-Bowie.",
        file: "Michael Self-Bowie.jpg",
        post: "https://www.instagram.com/p/CbceaOXN-n6"
    },
    {
        name: "Philip Self.",
        file: "Philip Self.jfif",
        post: "https://www.instagram.com/p/Cd-729DIkYK"
    },
    {
        name: "Rufus Self.",
        file: "Rufus Self.jfif",
        post: "https://www.instagram.com/p/CZwQbFJMCiC"
    },
    {
        name: "Smoke break.",
        file: "Smoke break.jfif",
        post: "https://www.instagram.com/p/Cj5xKRLttni"
    },
    {
        name: "Starry, starry night.",
        file: "Starry, starry night.jfif",
        post: "https://www.instagram.com/p/CpQM3QiNyzM"
    },
    {
        name: "Abuelita wayú.",
        file: "Abuelita wayú.jfif",
        post: "https://www.instagram.com/p/CdLLdIfsTvK"
    },
    {
        name: "Amelia Self.",
        file: "Amelia Self.jfif",
        post: "https://www.instagram.com/p/ChXLRnBtRT8"
    },
    {
        name: "Benjamín Self.",
        file: "Benjamín Self.jpg",
        post: "https://www.instagram.com/p/CYq3H85NZFZ"
    },
    {
        name: "Betty Self.",
        file: "Betty Self.jfif",
        post: "https://www.instagram.com/p/CeWRtLDo8gA"
    },
    {
        name: "Bruno Self.",
        file: "Bruno Self.jfif",
        post: "https://www.instagram.com/p/Cdn-loIMNUG"
    },
    {
        name: "Catalina Self.",
        file: "Catalina Self.jpg",
        post: "https://www.instagram.com/p/CYoSbIkNalo"
    },
    {
        name: "Chris Self.",
        file: "Chris Self.jpg",
        post: "https://www.instagram.com/p/CY197oZrMQb"
    },
    {
        name: "Crystal Self.",
        file: "Crystal Self.jpg",
        post: "https://www.instagram.com/p/CbFs3_HNjOo"
    },
    {
        name: "Edgar Self.",
        file: "Edgar Self.jfif",
        post: "https://www.instagram.com/p/CcP5lYSMnxo"
    },
];

function selectRandomElements(arr, num) {
    const shuffled = arr.slice();
    let i = arr.length;
    const result = [];
    while (i-- && result.length < num) {
        const index = Math.floor((i + 1) * Math.random());
        const temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
        result.push(temp);
    }
    return result;
}

const randomImages = selectRandomElements(images, 3);

const paintings = document.querySelectorAll('painting');
for (let i = 0; i < randomImages.length; i++) {
    const paintingLink = document.querySelector(`#painting-link-${i+1}`);
    paintingLink.innerHTML = randomImages[i].name;
    paintingLink.setAttribute("href", randomImages[i].post);
    paintings[i].querySelector('span').textContent = randomImages[i].name;
    paintings[i].querySelector('.img').style.backgroundImage = `url("${path + randomImages[i].file}")`;
}



const music = [
    "David Bowie  Rebel Rebel.mp3",
    "Janis Joplin  Cry Baby.mp3",
    "Janis Joplin  Me and Bobby McGee.mp3",
    "Michael Jackson  Billie Jean.mp3",
    "Michael Jackson  Smooth Criminal.mp3",
    "Michael Jackson Beat It.mp3",
    "Piece of My Heart Official.mp3",
    "Queen  David Bowie  Under Pressure.mp3",
    "Queen  Dont Stop Me Now.mp3",
    "Queen  I Want To Break Free.mp3",
    "Amy Winehouse  Rehab.mp3",
    "Amy Winehouse  You Know Im No Good.mp3",
    "David Bowie  Heroes.mp3"
];

const song = music[Math.floor(Math.random() * music.length)];

const starryNight = document.getElementById("starry-night");
const player = document.querySelector('#player');
player.src = "music/" + song;

document.addEventListener("click", (el)=>{
    if (player.paused) {
        player.play();
    }
});

const malcolm = document.querySelector("#malcolm");
document.querySelectorAll('.p2hover').forEach((el) => {

    el.addEventListener('mousedown', () => {
        togglePlayer(malcolm);
    })
    el.addEventListener('mouseup', () => {
        togglePlayer(lightswitch.checked ? starryNight : player);
    })
})

// function malcolm() {
//     if(!player.getAttribute("malcolm")) {
//         player.setAttribute("malcolm",true);
//         player.src = "music/Malcolm In The Middle.mp3"
//         player.play();
//     }
// }

const lightswitch = document.querySelector("#lightswitch");

lightswitch.addEventListener('change', () => {
    togglePlayer(lightswitch.checked ? starryNight : player);
});

function togglePlayer(starting) {
    const audioElements = document.querySelectorAll('audio');
    const fadeTime = 1000;
    let audioVolume = 1;
    const fadeAudioOut = setInterval(function () {
        if (audioVolume > 0) {
            audioVolume -= 0.1;
            if (audioVolume < 0) {
                audioVolume = 0;
            }
            audioElements.forEach(el => {
                if(el != starting) el.volume = audioVolume;
            })
            // ending.volume = audioVolume;
        } else {
            clearInterval(fadeAudioOut);
            audioElements.forEach(el => {
                if(el != starting) el.pause();
            })
            // ending.pause();
            starting.play();
            const fadeAudioIn = setInterval(function () {
                if (audioVolume < 1) {
                    audioVolume += 0.1;
                    if (audioVolume > 1) {
                        audioVolume = 1;
                    }
                    starting.volume = audioVolume;
                } else {
                    clearInterval(fadeAudioIn);
                }
            }, fadeTime / 10);
        }
    }, fadeTime / 10);
}