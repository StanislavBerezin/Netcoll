/*

    ////////////////////////////////////
    //////////////INTRO PAGE////////////
    ///////////////////////////////////


    1) Functionality to compare passwords on UI
        veeValidate
       
    2) Responses that we recieve from server when something is wrong should be displayed as "toast with error"
        recieved from server, the same for success (not really needed but would be cool)
        Not really needed but would be cool

    3) Add a 404 page
       Design of your choice

    4) Hook up login and registration (back/front)

    //HOOOK UP///

    1) Need to have interceptor sending tokens back and forth for each request
    2) protected routes

    dashboard{

        1)when logged in or registered => route should be protected
        
            2) The backend should respond for the dashboard view, containing
                (list of units, credit, University)

            3)When searching for the unit, should check and show all units available in DB
            , if unit is not there, allow a student to make 1. Response send to UI
            
            4) Finished Units = > send request to server with auth, to see what units
            are finished for that user = > Same for purchased articles, Following

           UNITS {
               1) send a request to server, based on route params and search for the units articles
                
           }
    }


    ///HOOK UP///


    

    //Profiles
    REGULAR USER{
        
        Regular users should see when they have their sessions set


    CONTENT CREATORS{

            If you are the content creator{
                1) Set booking times{
                   1) need to record the date, and once saved should apply to the calendar
                    2) The table should get the data 
                }
                3) Create article{
                    4) If user hasn't bought the article only certain parts should be shown, a content creator choses which ones
                }
            }


    }


THIGS THAT HAVENT BEEN IMPLEMENTED YET BUT NEEDS TO BE
    CHAT
        Need to create a chat component that can be used throughout the entire webapp
        can setup a simple firebase account and use that as the db for socket.io connection


            AT the later stage
            3) Payment system when booked (modals) (at the later stage)
            4) Chat (socket IO, example) (at the later stage)
    
    //Payment methods
    //will need to check if stripe provides their own UI for payment or we can use our own.
    1) Setup the top-up credit modal
    2) widhdraw modal

    
    THINGS TO THINK
    1) Need to think of a mobile chat app so that our users can communicate without a laptop
        Its pretty important
        




*/

