axios.get('https://medical-terminology.onrender.com/getAllSubmitted')
    .then(function (response) {
        // handle success
        const allData = response.data
        console.log(allData);

        let allMedicalTerm = allData.map((medData) => {
            return `<tr><td>${medData.term}</td> <td> ${medData.definition}</td> <td>${medData.category}</td></tr> `
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