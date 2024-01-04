
const getparanum = () => {
    const param = new URLSearchParams(window.location.search).get("userId");
    console.log(param);
    fetch(`https://fakestoreapi.com/users/${param}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            displayDectorDetails(data);
        });
}

const displayDectorDetails = (doctor) => {
    console.log(doctor);

    const parent = document.getElementById("user");
    const div = document.createElement("div");
    div.classList.add("singleUser-card");
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
              
        `;
    parent.appendChild(div)
}

getparanum();