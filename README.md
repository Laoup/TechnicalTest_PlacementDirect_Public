# Technical Test PlacementDirect


## Description:

_______________________

This project has been made for a technical test for Placement Direct company.

## Special wink i adress to the recruiter/reviewer:

_______________________

For suit the technical stack of *Placement Direct* i used **NestJS** but i want emphasize that i never used **NestJS** before.
I choose **NestJS** for demonstrate i can adapt myself and learn fast new things.


## Goal of the project:

____________________

This project has two parts. The first one is an API who use **NodeJS / NestJS**.
That API serve data about users registered on the website. The sensible *endpoints* are protect with **JWT** and **passport**

The seconde one is a web-app made with **VueJS**


## How to run the project:

__________________________

1. Database / JWT configuration
  - Create a database with phpMyAdmin (or another tool)
  - Go to **.env** file (root directory of the **API**) and enter the name of the database you created; the name of your sql user and is password.
  You will also have two enter a JWT secret sign.

2. Run the project
  - Open two terminals
  - In **api-placement-direct** folder run one term with the cmd: *yarn start*
  - In **web-placement-direct** folder run your other term with the cmd: *npm run serve*

3. Additional informations
  - I suggest you (deer user / recruiter) to firstly register some user on the */connection* page. Your three first register user are going to have insurances link with them.

### Techno I used:

____________________

For the front part i used ***VueJS***, with **Vuex**.
For the backend part (the api) i used ***NodeJS/NestJS*** with **JWT**, **Passport** and **Sequelize**.
For the BDD i used ***SQL***.

For fake some datas like contracts, i also used **JSONPlaceholder** (https://jsonplaceholder.typicode.com/)

The communication between Front and Back is assume by **Axios**


### Critical regard on the project:

________________________

There is some *bad points* i want emphasize and propose some amelioration axes.

1. VERY DANGEROUS !
  - The Vuex storage has been persisted with *localStorage* that not a good thing. All the information of the user are clear.
  I suggest to solve this trouble by only send unsensitive information in the token payload.
  And add a csrfToken in a secure cookie (send by the API) and return the sensitive information through axios request ONLY when the jwt AND the csrfToken are validate by the api.
2. Use of *Vuelidate*
  Use of vuelidate for add error message on forms and protect the inputs of wrong data.
3. Check the time life of JWT
