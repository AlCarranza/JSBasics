const xhr = new XMLHttpRequest();


xhr.open('GET', './series.json'); // Make the request to the server

xhr.onreadystatechange = function() {

    // readyState has 5 possible values
    // - 0: request not initialized
    // - 1: server connection established
    // - 2: request received
    // - 3: processing request
    // - 4: request finished and response is ready
    if(this.status === 200 && this.readyState === 4) {
        
        const data = JSON.parse(this.responseText);

        data.forEach((movie) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${movie.title}</strong> - ${movie.rate}`;
            document.querySelector('#results').appendChild(li);
        });
        console.log(data);
        
    }
}

xhr.send();
