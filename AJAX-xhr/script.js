const xhr = new XMLHttpRequest();


xhr.open('GET', './series.json'); // Make the request to the server
console.log('data');

xhr.onreadystatechange = function() {
    console.log('dat');

    if(this.status === 200 && this.readyState === 4) {
        console.log('data');
        
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
