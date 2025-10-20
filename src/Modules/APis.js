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
         const imgUrl = response?.data?.images?.original?.url;
         if (imgUrl){
            success(imgUrl, element);
         }else{
            console.warn("no valid image in response: ", response);
            faliur(element);
         }
      })
      .catch((error)=>{
          console.error("Network or parsing error:", error);
         faliur(element);
      }) 

 }
 const success =function(link, element){
   element.src = link;
 }
 const faliur = function(element){
   element.removeAttribute("src");
   element.alt = "Oops... Something went wrong!!!"
 }

 export{
    memeSearch,
    fetchMemes,
 }