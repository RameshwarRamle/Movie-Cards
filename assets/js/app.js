cl = console.log;

const moviecontainer = document.getElementById("moviecontainer");



let setRating = (rating) => {
    if (rating >= 7) {
        return "badge-success";
    } else if (rating >= 5 && rating <= 7) {
        return "badge-warning";
    } else {
        return "badge-danger";
    }
}


let result = '';

movies.forEach(movie => {
    result += `
			<div class="col-12 col-sm-6 col-md-4 mb-4">
                <div class="card">
                    <figure class="moviecard">
                        <img src=${movie.poster} title="movie name" alt="movie name">

                        <figcaption>
                            <div class="titleinfo">
                                <div class="row">
                                    <div class="col-9">
                                        <h2>${movie.title}</h2>
                                    </div>
                                    <div class="col-2">
                                        <h3><span class="badge ${setRating(movie.rating)}">${movie.rating}</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div class="overview">
                                <h2>${movie.title}</h2>
                                <p>${movie.overview}
                                </p>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>`

})
moviecontainer.innerHTML = result;