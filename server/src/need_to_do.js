/* 
go to SERVER folder and write ("npm start")

Authentication{

  i did the signup, and login but havent implemented other validation coz simply didnt make any routes for that yet
  
}

COMMENT => If authenticating routes will get tedious, then dont worry, just do it with responseData
after will add authentication, but would be good if can get it.


After login a user redirected to dashboard => {

     
      must be a route app.get(./getDashboardData, validateRequest, validateUserToken, responseData ) =>{
      
        At first we validate the request itself, of what we are receiving from the client, like if the token 
        is the string etc then call next(). Then we validate and find UserByToken and call next(), after these 2
        succesful checks, we send the data itself which is {
            
            In this case we need to build a somewhat relational usermodel, where a user has
             its own units, or doesnt have any if registered just a while ago
        
        }
        
         
             
      }
}

COMMENT => We need to have  MODEL for UNITS, which is relational to the user. e.g a user have units, better to make
unit model on seperate file in models folder (the same structure as userModel)

When a user presses on "PURCHASED ARTICLES" =>{

        we do the same for the route app.get('/getPurchasedArticles, validateRequest, validateUserToken, responseData)=>{
            
            when all the validations passed, we already know what user is trying to access "Purchased Articles"
            so we send the data of purchased articles. 
        }
}

COMMENT => another relational model, each unit has ARTICLES, same structure as userModel

When a user presses on "Selected Articles" =>{
          
          app.get('/getArticle/:id, validateRequest, validateUserToken, responseData){
               Once all of the validation tests are done, we need to send article details
               like "image" "Author" "Title" "Price" "Crossed Price"(can apply some calculation, should show 
               roughly 20% higher of original" "Star ratings (type: number)" "amount of students"
               
               all of that should be in the model, and u can use function in Authentica
          }
}


//Database stuff:

Need to:
 - Maintain a local list of universities on our server
 - Write a lookup function for the university list. This will be used to validate university names eg. on registration
    - returnAllUniversityNames
 - Maintaina local list of univsersity's courses and subjects on our server
 - Write a lookup function for the subject/code list
    - returnSubjectByName
    - returnSubjectByCode
    - returnSubjects

Objects that schemas need to be created for:
 - Articles
    - articleId
    - Title
    - Contents
    - Image
    - Date Published
    - Author
    - originalPrice
    - isOnSale (bool)
    - currentPrice (ie. current effective price)
    - Purchase count
    - Week number (Week number of the subject that the article relates to). Should be a list of numbers
    - Ratings
    - Average rating (current rating)
    - commentCount
    - positiveCommentCount
    - neutralCommentCount
    - negativeCommentCount
    - percentCommentsPositive
 - Comments on articles
    - comment Author
    - Comment text
    - Comment like count
    - Parent comment (if the comment is a reply to another comment)
    - timeCreated
    - Tags (list of strings)
 - Users
    - userId
    - Purchased articles (list of article ids)
        - purchaseDate
        - articleId
        - purchasePrice
    - Enrolled subjects
        - subjectId
        - isCurrent (bool, indicated whether the student has finished this subject or not)

DB Controller functions that need to be created:
 - Articles:
    returnArticle()
        - Returns title, published date, author, averageRating, comments
    returnAuthorArticleData()
        - Returns an author's metrics to be displayed in the article page, ie. the author's profile picture, publication
          count, follower count, degree
    returnArticleBySubjectCode()
        - Returns a list containing all articles belonging to the specified subject code. This will be used in the Unit
          view. Returns the article image, author, week numbers, purchase count
    returnPurchasedArticlesByUserId()
        - Returns a list of articles that a user has purchased. Will be used in the Unit view. Will return subjectCode,
          subjectName, purchaseDate,

 - Users:
     returnFollowedUsers()
         - Returns a list containing all users that the specified user is following. Will be used in the Unit view

 - Subjects:
     returnSubjectsByUserId()
         - Returns a list containing all the subjects a user is currently enrolled in. This will be used in the Unit view
     returnSubjectByKeyword()
         - Returns a list of subjects matching specified keyword. Will be used for the unit selector