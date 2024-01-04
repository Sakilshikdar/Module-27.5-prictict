const loadServices = () => {
    fetch("https://fakestoreapi.com/users")
        .then((res) => res.json())
        .then((data) => displayUsers(data))
        .catch((err) => console.log(err));
};

const displayUsers = (doctors) => {
    doctors?.forEach((doctor) => {
        // console.log(doctor);
        const parent = document.getElementById("doctors");
        const div = document.createElement("div");
        div.classList.add("doc-card");
        div.innerHTML = `
                <img class="user_img" src="./images/man-1.jpg" alt="" />
        <h2>Name: ${doctor.name.firstname} ${doctor.name.lastname}</h2>
                <h3>Phone: ${doctor.phone}</h3>
                <h4>Email: ${doctor.email}</h4>
                <h5>Address: ${doctor.address.city}</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                  numquam!
                </p>
              <h3>${doctor.id}</h3>
                <button > <a target="_blank" href="details.html?userId=${doctor.id
            }">Details</a> </button>
          `;

        parent.appendChild(div);
    });
};


loadServices();
