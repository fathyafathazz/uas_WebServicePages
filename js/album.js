document.addEventListener("DOMContentLoaded", function() {
    fetch("https://130.162.195.228/mhs714220012/albums")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.getElementById('productTableBody');

            data.forEach(album => {
                const row = tableBody.insertRow();
                row.innerHTML = `
                    <td>${album.title}</td>
                    <td>${album.year}</td>
                    <td>${album.artist_id}</td>
                    <td>${album.price}</td>
                `;
            });
        })
        .catch(error => {
            console.error("There has been a problem with your fetch operation:", error);
        });
});