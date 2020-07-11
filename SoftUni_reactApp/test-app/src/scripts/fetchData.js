

const getGitHubData = async () => {
    const dataPromise = await fetch('https://api.github.com/orgs/octokit/repos');
    const data = await dataPromise
   data.json().then( async(response) => {
       console.log(response)
        return  response
    }).catch((err) => {
        console.error(err);
    })
}
