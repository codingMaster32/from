function saveDataToFirestoreAndLocalStorage(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const code = document.getElementById("code").value;

    // Save data to Firestore
    firebase.firestore().collection("users").add({
        email: email,
        code: code
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

    // Save data to localStorage
    const userData = {
        email: email,
        code: code
    };
    localStorage.setItem("userData", JSON.stringify(userData));

    // Clear input fields
    // document.getElementById("email").value = "";
    // document.getElementById("code").value = "";
}

const userData = JSON.parse(localStorage.getItem('userData'));

console.log(userData)

document.getElementById("submitbtn").addEventListener("click", saveDataToFirestoreAndLocalStorage);