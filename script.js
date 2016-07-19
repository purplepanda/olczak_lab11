$(function() {

    $.get('https://www.reddit.com/r/aww/.json', function(requestedData) { //ajax request to GET information from reddit
        // get the first 10 results
        var posts = requestedData.data.children.slice(0, 10);
        //return more data than necessary, figure out how to dump unnecessary data
        //jQuery equivalent of a for each loop
        $.each(posts, function(i, post) {
            var author = post.data.author;
            var title = post.data.title;
            var url = post.data.url;

            //create elements to append to ul
            var listItem = $('<li></li>');
            var divAuthor = $('<div></div>').addClass('author').text(author);
            var divTitle = $('<div></div>').addClass('title').text(title);
            var divUrl = $('<img></img>').attr('src', url);
            //append elements to ul
            listItem.append(divUrl);
            listItem.append(divTitle);
            listItem.append(divAuthor);

            $('#posts').append(listItem);
        });
    });
});
