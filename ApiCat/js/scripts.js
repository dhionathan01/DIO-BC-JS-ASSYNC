const BASE_URL = 'https://thatcopy.pw/catapi/rest/'; // Api a ser consumida
const catBtn = document.getElementById('new_cat');
const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
    
        return json.webpurl;
    } catch (erro) {
        console.log(erro.message);
    }
};

const loadImg = async () => {
    const catImg = document.getElementById('cats');
    catImg.scr = await getCats();
}

catBtn.addEventListener('cliki', loadImg);

loadImg();

