


//var d = document.getElementById("table1")


function getsearch() {
    var sear = document.getElementById("search").value
    console.log(sear)
    getdata(sear)

}

function getdata(sear) {
    var ur = "https://deezerdevs-deezer.p.rapidapi.com/search?q="
    ur += sear

    fetch(ur, {
        method: "GET",
        headers: {
            "x-rapidapi-key":
                "88596f40b3mshde19e870a72b70ap1a25edjsnf9709dcd3c67",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
    })
        // proxy chaining
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            return response.data;
        })
        .then((response) => {
            console.log(response)
            for (const article of response) {
                document.getElementById("table1").innerHTML += "<tr>"

                document.getElementById("table1").innerHTML += `<td><img src="${article.album.cover}"/></td>`

                document.getElementById("table1").innerHTML += `<td>${article.album.title}</td>`
                document.getElementById("table1").innerHTML += `<td>${article.title}</td>`


                document.getElementById("table1").innerHTML += "</tr>"
            }

        })

        .catch((err) => {
            console.error(err);
        });
}