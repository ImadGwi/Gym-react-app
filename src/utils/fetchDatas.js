export const exrecisesOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY,
  },
};



export const youtubeOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
		'x-rapidapi-key': 'process.env.REACT_APP_RAPID_KEY',
	}
}




export const FetchData = async (url, options) => {
  const reponse = await fetch(url, options);
  const data = await reponse.json();

  return data;
};


