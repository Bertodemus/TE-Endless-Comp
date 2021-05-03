export async function getStepsData() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge')
    return res.json()
  }