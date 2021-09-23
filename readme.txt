1> npm init -y

2> npm i request

3> npm i express

4> npm i nodemon --save-dev
    // it is used to refresh the node application as soon as some file changes
    
    // if nodemon is not working then  
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

5> npm i hbs

6> weatherstack api : 
            BASIC_URL = http://api.weatherstack.com/
    HOW_IT_LOOKS 
        http://api.weatherstack.com/current
            ? access_key = YOUR_ACCESS_KEY
            & query = New York
    LINKS_TO_REFFER
        https://weatherstack.com/quickstart
        https://weatherstack.com/documentation


7> mapbox api :
            BASIC_URL = https://api.mapbox.com/geocoding/v5/mapbox.places/
                        + address
                        + ACCESS_KEY
                        + &limit=1
    HOW_IT_LOOKS 
        https://api.mapbox.com/geocoding/v5/mapbox.places/
                    + address
                    + ACCESS_KEY
                    + &limit=1
    LINKS_TO_REFFER
        https://docs.mapbox.com/api/overview/

8> While running use :
            node app.js    
                or else 
            nodemon app.js -e js,hbs,html,css
