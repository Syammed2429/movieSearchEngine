let dataDiv = document.getElementById("dataDiv");
let errorGif = document.getElementById('error-msg');


        
    //Fetching the data from the app 
        async function movieData() {
            try {
                let movieName = document.querySelector('.movie-name').value;
                let response = await fetch(`https://www.omdbapi.com/?s=${movieName}&i&apikey=4ec9d444`);
                let result = await response.json();
                // console.log('result:', result)
                let movieResults = result.Search;
                display(movieResults)

            }
            catch (error) {
                // console.log('error:', error);
                alert('Movie is not available');
                errorGif.style.display = 'block';
                setTimeout(() => {
                    location.reload();

                },4000)
                

            }
        }

        //display the movies
        function display(movieResults) {


            dataDiv.innerHTML = '';
            
            movieResults.forEach(function(data){
            console.log('data:', data)
            console.log('movieResultsinn:', movieResults)
                const moviePoster = document.createElement('img');
                const movieName = document.createElement('p');
                const movieYear = document.createElement('p');
                const movieRatings = document.createElement('p');
                const div = document.createElement('div');
                div.classList.add('child-node')
                
                
                moviePoster.src = data.Poster;
                movieName.innerHTML = `Name: ${data.Title}`;
                movieYear.innerHTML = `Year: ${data.Year}`;
                movieRatings.innerHTML = `Ratings: ${data.imdbID}`;
                
                div.append(moviePoster,movieName,movieYear,movieRatings);
                dataDiv.append(div);
                
            });
        }


        