const GetUserData = async () => {
    const promise = await fetch('https://randomuser.me/api/');
    const data = await promise.json()
    return data.results[0];
}
GetUserData()

export { GetUserData };