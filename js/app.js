//after receiving the response from API request, generate list of movies
function movieResults(movies){
	console.log(movies);
	var movies_arr = movies.Search
	var moviesHTML = '';
	$.each(movies_arr, function(index, movie){
		moviesHTML += '<li><div class="poster-wrap">';
		if(movie.Poster === 'N/A'){
			moviesHTML +='<i class="material-icons poster-placeholder">crop_original</i>'
		} else {

		moviesHTML += '<img class="movie-poster" src="' + movie.Poster + '">';
	}
		moviesHTML += '</div><span class="movie-title">' + movie.Title + '</span>';
		moviesHTML += '<span class="movie-year">' + movie.Year + '</span></li>';
	})

	if (movies.Error === "Movie not found!"){
		moviesHTML += '<li class="no-movies"><i class="material-icons icon-help">help_outline</i>No movies found that match: ' 
		moviesHTML += $('#search').val() + ' ' + $('#year').val() + '</li>'
	}

	$('#movies').html(moviesHTML);
};

//on submission of form, prevent default behavior and generate AJAX GET request
$('form').on('submit', function(e){
	e.preventDefault();

	//get the value for the title and year search inputs
	var title = $('#search').val();
	var year = $('#year').val();

	//data for query string
	var searchData = {
	"s": title,
	"y": year,
	"type": "movie",
	"r": "json",
	}

	//endpoint for AJAX GET request
	var httpURL = 'http://www.omdbapi.com/?';

	//create an ajax request to the OMDB API
	$.getJSON(httpURL, searchData, movieResults)
})




//specify callback function
	//parse response
	//build html list based on results
//open request
//send request


