
const getGitHubData = async () => {
    const dataPromise = await fetch('https://api.github.com/orgs/octokit/repos');
    const data = await dataPromise

    return data;
}


export default getGitHubData;