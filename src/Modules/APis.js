//API requests

//requires API key (should be hidden for security);

//data fetching through the nativ browsers fetch api

//giohy API practice

const rizzLord = "S8VpAUi2kPtV9sXLAEkYoBvjtEmWWzDx";

const giphy = `https://api.giphy.com/v1/gifs/translate?api_key=${rizzLord}&s=`;


 const memeSearch = function(searchOption){
    console.log('giphy api: ')
    const result = giphy+searchOption;

    return result
 }
 const  fetchMemes =function(link , element){
   fetch(link)
      .then((response)=>{
         return(response.json());
      })
      .then((response)=>{
         console.log(response.data.images.original.url);
         element.src = response.data.images.original.url;
      })
      .catch((err)=>{
         console.error(err);
         
      })
 }

 export{
    memeSearch,
    fetchMemes,
 }