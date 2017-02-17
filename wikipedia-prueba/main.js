$(document).ready(function() {

    // complete the following function
    function getArticles(searchTerm) {
        $.ajax({
            url: "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" + searchTerm,
            // Notice that the dataType is jsonp
            dataType: "jsonp",
            method: 'get',
            success: function(response) {
                console.log(response);
                // use the articleMaker function somewhere in here and then
                // append each article to the DOM using jquery's .append() method
                // append only one time, if you can figure out how. The less DOM
                // manipulation, the better
                response.query.search.forEach(function(article){$('#articlescontainer').append(articleMaker(article.tittle, article.snippet))

                });
            }
        });
    }

    function articleMaker(title, snippet) {
        // create a string called article and write HTML elements inside of it,
        // similar to this:
        var article = " ";
        article +='<a target="_blank" rel="noopener" href= "https://en.wikipedia.org/wiki/'+title +' ">';
        article += '<div class="article">';
        article += '<h3>' + title + '</h3>';
        article += '<p>' + snippet + '</p>';
        article += '</div>';
        article += '</a>';

        // IMPORTANT: make sure each article can be clicked on and takes you to the
        // wikipedia page of that article

        // Lastly, return the article string, which will be used in the success
        // function of your $.ajax get request
        return article;
    }

    // When click on "search" button, run the getArticles function and pass in
    // the value of the search box as a parameter to the getArticles function
    $('#searchButton').click(function() {
        var searchTerm = $('#searchBox').val();
          getArticles(searchTerm);
    });


    // BONUS: delete the searchButton element and it's code above, and do the
    // code below instead.

    // When focused on the search box and the enter/return button is pressed,
    // get the articles and pass the value of the search box to your getArticles
    // function
    $("#searchBox").on("keydown", function(event) {
      // code here
    });

});
