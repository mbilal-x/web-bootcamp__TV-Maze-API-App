const baseUrl = 'https://api.tvmaze.com/search/shows?q=';
const SearchForm = document.querySelector('#searchForm');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (searchForm[0].value) {
        const searchTerm = searchForm[0].value;
        console.log(`${baseUrl}${searchTerm}`);
        const res = await axios.get(`${baseUrl}${searchTerm}`);

        createShowImage(res.data);
        searchForm[0].value = '';
    }
})

const createShowImage = (shows) => {

    for (result of shows) {
        if (result.show.image) {
            const showImage = document.createElement('img');
            showImage.src = result.show.image.medium;
            document.body.append(showImage);
        }
    }
}
