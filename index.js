const greet=(MongoURI, MYSQL_USER_HOST, MYSQL_PASSWORD, MYSQL_BILLING_HOST, MYSQL_NOTIFICATION_HOST)=>{
    console.log(`MongoURI ${MongoURI},
     MYSQL_USER_HOST ${MYSQL_USER_HOST}, MYSQL_PASSWORD ${MYSQL_PASSWORD}, 
     MYSQL_BILLING_HOST ${MYSQL_BILLING_HOST}, MYSQL_NOTIFICATION_HOST ${MYSQL_NOTIFICATION_HOST}`);
};


var arguments = process.argv
const MongoURI=arguments[2];
const MYSQL_USER_HOST=arguments[3];
const MYSQL_PASSWORD= arguments[4];
const MYSQL_BILLING_HOST= arguments[5];
const MYSQL_NOTIFICATION_HOST= arguments[6];

greet(MongoURI, MYSQL_USER_HOST, MYSQL_PASSWORD, MYSQL_BILLING_HOST, MYSQL_NOTIFICATION_HOST);