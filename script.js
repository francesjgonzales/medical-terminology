/* const clean = DOMPurify.sanitize(index.html, { WHOLE_DOCUMENT: true });
 */


axios.get('https://symphonious-heliotrope-7b674a.netlify.app/getAllSubmitted')
    .then(function (response) {
        // handle success
        const allData = response.data
        console.log(allData.term);

        let allMedicalTerm = allData.map((medData) => {
            return `<td>${medData}</td>`
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
