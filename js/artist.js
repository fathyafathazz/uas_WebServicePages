        document.addEventListener("DOMContentLoaded", function() {
            fetch("https://130.162.195.228/mhs714220012/artists")
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then(data => {
                    const tableBody = document.getElementById('productTableBody');

                    data.forEach(artist => {
                        const row = tableBody.insertRow();
                        row.innerHTML = `
                            <td>${artist.name}</td>
                            <td>${artist.genre}</td>
                        `;
                    });
                })
                .catch(error => {
                    console.error("There has been a problem with your fetch operation:", error);
                });
        });