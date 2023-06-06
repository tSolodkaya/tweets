Application navigation:

1.  Home component, home page.
2.  Tweets component, page displaying tweets
3.  There is a Go Back button on the tweets page, which leads to the main page.
4.  If the user entered by a non-existent route, he will be redirected to home
    page

Functionality of the application:

1.  When clicking on the Follow button, the text changes to Following. Also the
    color of the button changes. And yours is added to the number of followers.
2.  When the page is updated, the final result of the user's actions is fixed.
    That is, if click on the button and refresh the page - then the button
    remains in place the Following status with the corresponding color and the
    number of followers does NOT decrease to the initial value.
3.  When you click the button again, its text and color change to the original
    state The number of followers also changes.
4.  There is filtering with three options: show all, follow, followings show,
    where all - show all tweets. follow - show tweets with follow status.
    followings - show tweets with following status

Application database:

1. Cards are stored in the Mockapi database, with the following fields: id,
   user, tweets, followers, avatar, isFollow.
2. Three tweets are displayed on one pagination page, the rest is loaded when
   the Load More button is pressed.
