const getPosts = async () => {
    const promise = await fetch("http://localhost:9999/api/origami");
    const origamis = await promise.json();

    return origamis;
}


export default getPosts;