var searchForm = document.querySelector('#search-form');
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();

        //AJAX request - with the API key from Pexels
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                var apiResp = JSON.parse(xhttp.responseText);
                // apiResp.picture.forEach((apiResp.picture) => {
                //     document.querySelector('body').innerHTML = `<p>${apiResp.picture}</p>`;

                //     //rendering to the page
                //     console.log(apiResp.picture,'logging api text');
                // });
                // var container = document.querySelector('#photo-div');
                // var pictureDiv;
                // pictureDiv.innerHTML = `<p>${apiResp}</p>`;
                // container.appendChild('pictureDiv');

                console.log(apiResp.photos,'logging api text');
                var pictureData = apiResp.photos.map(function (item) {
                    return item.src;
                });
                var outerContainer = document.querySelector('#container');
                var container = document.querySelector('#photo-div');
                container.innerHTML = '';
                // outerContainer.innerHTML = '';
                var searchTitle = document.querySelector('#search-title');
                var searchText = document.querySelector('#search-bar').value;
                searchTitle.innerHTML = `${searchText.charAt(0).toUpperCase()+searchText.slice(1)} Photos`;
                pictureData.forEach(function(photo){
                    var pictureDiv = document.createElement('section');
                    pictureDiv.innerHTML = `<img class='thumbnail-pics' src='${photo.large}'>`;
                    container.appendChild(pictureDiv);
                });


            }
        };





        // const client = createClient('563492ad6f91700001000001549a9a446afa4058918b4ab9d5b0fe6e');
        var textValue = document.querySelector('#search-bar').value;

        // client.photos.search({ query, per_page: 1 }).then(photos => { });



        xhttp.open("GET", `https://api.pexels.com/v1/search?query=${textValue}&per_page=40`, true, Headers);
        // xhttp.setRequestHeader('Authorization', 'Bearer ' + '563492ad6f91700001000001549a9a446afa4058918b4ab9d5b0fe6e');
        xhttp.setRequestHeader('Authorization', '563492ad6f91700001000001549a9a446afa4058918b4ab9d5b0fe6e');
        // xhttp.setRequestHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500/');

        xhttp.send();


    });


// API key 563492ad6f91700001000001549a9a446afa4058918b4ab9d5b0fe6e