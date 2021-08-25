import React from 'react'

function Test() {
    var stringSimilarity = require("string-similarity");

    var similarity = stringSimilarity.compareTwoStrings("healed", "sealed");
    
    var matches = stringSimilarity.findBestMatch('Xin chao moi nguoi', [
        'Hello moi nguoi',
        'Chao moi nguoi',
        'Hi moi nguoi'
      ]);
      
      console.log(" do giong nhau",similarity)
      console.log(matches)
      console.log("minh ơ day",matches.ratings)

    


    return (
        <>
            
            <h1>String</h1>
            <p> Độ giống nhau :  {similarity}  </p>
            <ul >
                <li>
                    Chuỗi giống nhất:  {matches.bestMatch.target} :  {matches.bestMatch.rating}
                </li>  
                {matches.ratings.map(rating => ( 
                    <li key={rating.target}>
                        {rating.target} : { rating.rating}
                    </li>
                 ) )}

            </ul>

        </>
    )
}



export default Test
