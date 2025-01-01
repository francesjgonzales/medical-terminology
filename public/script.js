axios.get('http://localhost:10000/getAllSubmitted')
    .then(function (response) {
        // handle success
        const allData = response.data
        console.log(allData);

        let allMedicalTerm = allData.map((medData) => {
            return `<tr><td>${medData.term}</td> <td> ${medData.definition}</td> <td>${medData.category}</td>  
            <td><i class="bi bi-pencil-fill"></i></td> <td><i class="bi bi-trash3-fill"></i></td></tr>`
        }).join("");
        document.querySelector("#showData").innerHTML = allMedicalTerm
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    })