let carList = document.querySelector("#car-list");
let darkMode = false;

function loadCars() {
    fetch("js/data.json")
        .then(response => response.json())
        .then(cars => {
            carList.innerHTML = "";

            cars.forEach(car => {
                carList.innerHTML += `
                    <div class="col-lg-4">
                        <div class="card border border-secondary h-100">
                            <div class="card-body d-flex flex-column">
                                <h2>${car.name}</h2>
                                <p class="mb-0">Year: ${car.year}</p>
                                <p class="mb-0">Origin: ${car.origin}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        });
}

function changeTheme() {
    darkMode = !darkMode;

    if (darkMode) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}

document.querySelector("#load-cars").addEventListener("click", loadCars);
document.querySelector("#change-theme").addEventListener("click", changeTheme);

const voteForm = document.querySelector("#vote-form");

voteForm.addEventListener("submit", function (event) {
    if (!voteForm.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }

    voteForm.classList.add("was-validated");
});
