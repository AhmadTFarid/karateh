function fn() {
    var env = karate.env;
    karate.log("karate.env system property was: " , env);

    if (!env){
        env = "dev"
    }

    var config = {
        BASE_URL: "http://localhost:8080"
    }

    if (env === 'dev') {
        config.BASE_URL = "https://dev.insurance-api.tekschool-students.com";
    }

    if (env === 'qa') {
        config.BASE_URL = "https://qa.insurance-api.tekschool-students.com";
    }
    karate.log("karate config: " , config);
    return config;
}