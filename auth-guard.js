firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "/index.html";
    }
})

const logout = () => {
    firebase.auth().signOut().then(() => {
        // Limpar o localStorage
        localStorage.removeItem("uid");
        localStorage.removeItem("email");

        window.location.href = "/index.html";
    }).catch(console.log);
};
