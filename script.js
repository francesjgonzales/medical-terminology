const clean = DOMPurify.sanitize(index.html, { WHOLE_DOCUMENT: true });

axios.get('http://localhost:3000/getAllSubmitted')
    .then(function (response) {
        // handle success
        const allData = response.data
        console.log(allData);

        let allMedicalTerm = allData.map((medData) => {
            return `${medData.term} <br> ${medData.definition}`
        })
        document.querySelector("#showData").innerHTML = allMedicalTerm
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    })
