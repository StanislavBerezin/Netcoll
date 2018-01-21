/*

    ////////////////////////////////////
    //////////////INTRO PAGE////////////
    ///////////////////////////////////
    1) Mobile respnsivness for the top menu => should have a dropdown for login, register
        Currently doesnt work correctly

    2) Need to add section ('About us')
        Design of your choice

    3) Functionality to compare passwords on UI
        veeValidate

    4) Footer
        Need to add some stuff there

    5) Section SIMPLER AND QUICKER SUPPORT THAT IS NEEDED
        Dont worry about it at the moment, as its planned out to put vector images after


    5) Make "how it works" section tabs smaller rather than 100% width, maybe add some cool icons
       
    6) Responses that we recieve from server when something is wrong should be displayed as "toast with error"
        recieved from server, the same for success (not really needed but would be cool)
        Not really needed but would be cool

    7) Add a 404 page
       Design of your choice

    8) Registration form data validation:
        a) Don't validate username field until the user has entered something (currently validates on load)
        b) Implement password mismatch validation
        c) Keep a list of university options, validate input based on known list of universities. Don't let the enter an unknown uni.
        d) Don't make the registration form disapppear when you click away from it; only when you click the x to close it
    
    9) Add titles to HTML pages
    ////////////////////////////////////
    //////////////INTRO FINISHED////////////
    ///////////////////////////////////

    
    //////////////////////////////
    ///////DASHBOARD///////////////
    //////////////////////////////
    
    localhost:8080/dashboard
    1) Nav bar if it gets less than 850px, the navbar should fold and mobile menu should start working instead
        {
            in that navbar, remove logo
            the rest is the same
        }
        
        The rest is ok on this route, the same for http://localhost:8080/dashboard/unit/CAB202 all good there
        http://localhost:8080/dashboard/findUnit/s here is also all good,
        http://localhost:8080/dashboard/purchasedArticles, also seems good
        http://localhost:8080/dashboard/article/12, also seems to be ok,

        
        But double check it, and think from a user prespective, what thing shoud we add there
        if its all good, then i hope its ok
    Sidemenu IMPORTANT
    2) Adding and removing units => will be done through adding units to the array 'units' and removing it from there

    /////////////////////////////
    ///////DASHBOARD FINISHED///////////////
    //////////////////////////////
    



     //////////////////////////////
    ///////Profile ///////////////
    //////////////////////////////

    at http://localhost:8080/dashboard/profile/1

    check that out and make any comments or anything u think we need to add

    MOST IMPORTANTLY, to toggle bettwen what accounts u view
    go to folder profile/Profile.vue, theres in data() u can see
        isGeneral: false,
        isCreator: true,
        isOwn: true,

    for example now its set as if you are the cretor and own that page, 
    if u switch isOwn to false, that would mean that somebody else is viewing the creator
        maybe that somebody else wants to book a session etc. Check all of them out, and add or comment the things that u think
    we need to add


     //////////////////////////////
    ///////Profile done///////////////
    //////////////////////////////


    


    //ARTICLE (need to work more)
            {

                3)share section for facebook to get discounts for further buyings

            }


    //Profiles
    REGULAR USER{
        
        Regular users should see when they have their sessions set


    CONTENT CREATORS{

            If you are the content creator{
                1) Set booking times{
                    need to make it more dynamic with a better table
                    drowdown inside of table to set pricing
                }
                3) Create article{
                    4) If user hasn't bought the article only certain parts should be shown, a content creator choses which ones
                }
            }

            If you are VIEWING content creator profile{
                

                }
                

                In the future will add chat etc, but for the moment is not that crucial
            }

            AT the later stage
            3) Payment system when booked (modals) (at the later stage)
            4) Chat (socket IO, example) (at the later stage)
    }


THIGS THAT HAVENT BEEN IMPLEMENTED YET BUT NEEDS TO BE
    CHAT
        Need to create a chat component that can be used throughout the entire webapp
        can setup a simple firebase account and use that as the db for socket.io connection

    
    //Payment methods
    //will need to check if stripe provides their own UI for payment or we can use our own.
    1) Setup the top-up credit modal
    2) widhdraw modal

    
    THINGS TO THINK
    1) Need to think of a mobile chat app so that our users can communicate without a laptop
        Its pretty important
        




*/

