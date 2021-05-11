const form = document.querySelector("#form");
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const inputText = form.elements.query.value;
    const config = { params: { q: inputText } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);

    showImage(res.data);

})

const showImage = (shows) => {

    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }

}