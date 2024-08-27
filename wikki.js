let mainContainer = document.getElementById('searchResults');
let inputText = document.getElementById('searchInput');
let spin = document.getElementById('spinner');

let eachResult = function(eachItem) {
    //console.log(eachItem.title);
    //console.log(eachItem.link);
    //console.log(eachItem.description)
    spin.classList.add('d-none')
    let subContainer = document.createElement('div')
    subContainer.classList.add('result-item')
    mainContainer.appendChild(subContainer);


    let anchorEl = document.createElement('a')
    anchorEl.href = eachItem.link;
    anchorEl.target = "_Blank"
    anchorEl.textContent = eachItem.title;
    subContainer.appendChild(anchorEl);

    let breakEl = document.createElement('br');
    subContainer.appendChild(breakEl);



    let anchorE2 = document.createElement('a')
    anchorE2.href = eachItem.link;
    anchorE2.target = "_Blank"
    anchorE2.classList.add('result-url')
    anchorE2.textContent = eachItem.link;
    subContainer.appendChild(anchorE2);

    let peraE3 = document.createElement('p');
    peraE3.textContent = eachItem.description;
    peraE3.classList.add('link-description');
    subContainer.appendChild(peraE3)


}



let searchResults = function(jsondata) {
    //console.log(jsondata.search_results[0]);
    for (let eachItem of jsondata.search_results) {
        eachResult(eachItem)

    }
}


let inputEnter = function(Event) {
    if (event.key === "Enter") {
        mainContainer.textContent = "";
        let inputTextValue = inputText.value;

        let url = "https://apis.ccbp.in/wiki-search?search=" + inputTextValue;
        let options = {
            method: "GET"
        }
        spin.classList.remove('d-none')
        fetch(url, options)
            .then(function(response) {
                return response.json()
            })
            .then(function(jsondata) {
                searchResults(jsondata)

            });
    }
}

inputText.addEventListener('keydown', inputEnter);