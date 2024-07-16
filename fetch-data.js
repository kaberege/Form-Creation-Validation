async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    try {
        const response = await fetch(apiUrl);                    // Fetch data from API
        const users = await response.json();                     // Convert data from API to json
        dataContainer.innerHTML = "";                            // Clear existing content
        const userList = document.createElement("ul");           // Create the user list
        users.forEach(element => {                               // populate the user list
            const myList = document.createElement("li");
            myList.textContent = element.name;
            userList.append(myList);
        });
        dataContainer.append(userList);                          // Append the user list to the container
    }
    catch (err) {
        dataContainer.innerHTML = "";
        dataContainer.innerHTML = 'Failed to load user data.';
        console.log(err);
    }
}
document.addEventListener("DOMContentLoaded", fetchUserData);     // Run fetchUserData when DOM content is loaded