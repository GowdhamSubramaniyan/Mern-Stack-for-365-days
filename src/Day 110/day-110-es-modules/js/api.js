export async function getUsers() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
        throw new Error("Failed to load users.");
    }

    return response.json();
}
