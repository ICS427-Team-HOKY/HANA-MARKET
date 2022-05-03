# ICS 427 - HANA MARKET

## Overview
HANA MARKET is a web application featuring a local living community where neighbors come together from second-hand deals to neighborhood information. Through this, users can create a warm and friendly life with local residents. Through HANA MARKET, users can easily and conveniently trade in their neighborhood without packaging or delivery charges. 

<br/>

## Assignment 2: 01/27/2022 - 02/21/2022
## What is complete so far
- Set up a repository for the team (GitHub)
- User dataset
- User Register Page
- User Profile Page
- ESLint plugin with IntelliJ IDEA


## What is pending
- Edit Profile Page
- Items' dataset
- Add & Edit Item Page
- List All Items Page


## List of team members & Assignments

### Keith Okuna

#### Worked on in the project so far: 
   - Finished the report
   - End to end testing (TestCafe)
   - Fuzz testing 
#### Next:
   - Fix API vulnerabilities found during fuzz testing 
   - Photo Upload 
   - Map view 

### Yeji Han

#### Worked on in the project so far: 
   - user dataset
   - profile page
#### Next: 
   - edit profile
   - item dataset
   - add & edit items

<br/>

## Assignment 3: 02/21/2022 - 03/28/2022
## Progress
- Complete edit profile page: If the user does not enter user information on the profile page when registering for the first time, it can be added and modified on the My Profile page
- Complete item's dataset & Add Item page: After registering as a member, the data set work is completed in which the user enters item information (title, image, category, price, condition, description, sales status, address to trade) on the page where they can add the item they want to sell.
- Complete list all item page: page work where users can see all list of items to be sold
- Complete navbar design and modification
- Landing page section1 & section2: Section1 uses image slides and creates a signup button (signup button is not visible when user logs in) / section2 implements a simple explanation of each page in card format. Links to buttons for direct access to list all item page, add item page, and community page (uncompleted)
- After creating a logo image on the sign-up and sign-in pages, additional work is completed

## Link
### GihHub Repository: 
- <a href="https://github.com/ICS427-Team-HOKY/HANA-MARKET"><i class="large github icon"></i>https://github.com/ICS427-Team-HOKY/HANA-MARKET</a>
### Completed Issues: 
- <a href="https://github.com/ICS427-Team-HOKY/HANA-MARKET/projects/2"><i class="large github icon"></i>Milestone 2</a>



## Pending
- Implemented a comment function for each registered item
- Add community page
- Add admin page & features

## Roles and responsibilities

### Keith Okuna

#### New completions: 
   - End to end testing (TestCafe)
#### Current:
   - Integration Testing 
#### Next:
   - New features 

### Yeji Han

#### New completions: 
   - Landing page work (section1 & section2)
   - Item dataset
   - Item list, add, edit (delete) page operations
   - Edit profile page
#### Current:
   - Landing page work (section3)
#### Next:
   - Implement the comment function

<br/>

## Assignment 4: 03/28/2022 - 04/11/2022
## Progress
- Admin page: Administrators can view all registered items and a list of all registered members.
- Comment function: All users can write a comment on the registered item (max height is set to limit the length of the card when the number of characters in the comment is long or there are many comments)
- Major vulnerabilities discovered in the API which allow anyone to insert, modify, and delete data on the server. 


## Link
### GihHub Repository: 
- <a href="https://github.com/ICS427-Team-HOKY/HANA-MARKET"><i class="large github icon"></i>https://github.com/ICS427-Team-HOKY/HANA-MARKET</a>
### Completed Issues:
- <a href="https://github.com/ICS427-Team-HOKY/HANA-MARKET/projects/3"><i class="large github icon"></i>Milestone 3</a>

## Pending
- Add functionality to edit and delete items in the admin page
- Add community page
- Design/edit landing section3 & footer

## Roles and responsibilities

### Keith Okuna

#### New completions: 
- Fuzz testing 

#### Current:
- Fixing fuzz testing vulnerabilities 

#### Next:

### Yeji Han

#### New completions: 
   - Added a comment functionality 
   - Added admin page: view all items & user list
#### Current:
   - Edit footer
#### Next:
   - Add Community page: post, edit, delet functions
   - Complete Landing page

<br/>

## Assignment 5: 04/11/2022 - 05/02/2022
- [The repository](https://github.com/ICS427-Team-HOKY/HANA-MARKET)
- [The final project documentation file]()
- [The release version of our program]()
- [Our wiki page](https://github.com/ICS427-Team-HOKY/HANA-MARKET/wiki)

## Progress

## Roles and responsibilities

### Keith Okuna

#### New completions:
   - Finish the final report
   - Fixing the security holes

### Yeji Han

#### New completions:
   - Create Wiki page
   - Complete Community page
   - Add the functionalities on Community page(add post and comments)
   - Edit My Profile page

## Installation

First, [install Meteor](https://www.meteor.com/install).

Second, download [HANA-MARKET](https://github.com/ICS427-Team-HOKY/HANA-MARKET), and request permission to gain access to HANA-MARKET. 

Third, cd into the app/ directory and install required libraries: meteor:

```
$ meteor npm install
```

## Running the system

After installation, you can run the application by typing:

```
$ meteor npm run start
```
The first time running the application will add default users: 
```
$ meteor npm run start

> meteor-application-template-react@ start /Users/hanyeji/Desktop/github/hany7/HANA-MARKET/app
> meteor --no-release-check --exclude-archs web.browser.legacy,web.cordova --settings ../config/settings.development.json

=> Started proxy.                             
=> Started MongoDB.                           
I20220502-18:24:04.922(9)? Creating the default user(s)
I20220502-18:24:05.010(9)?   Creating user admin@foo.com.
I20220502-18:24:05.162(9)?   Creating user john@foo.com.
I20220502-18:24:05.246(9)? Creating default data.
I20220502-18:24:05.246(9)?   Adding: John (john@foo.com)
I20220502-18:24:05.324(9)?   Adding: Admin (admin@foo.com)
I20220502-18:24:05.329(9)? Creating default item.
I20220502-18:24:05.333(9)?   Adding: High Bio Hack Shoes (john@foo.com)
I20220502-18:24:05.463(9)?   Adding: Vintage Motorcycle Jacket (admin@foo.com)
I20220502-18:24:05.669(9)? Monti APM: completed instrumenting the app
=> Started your app.

=> App running at: http://localhost:3000/
```

### Viewing the running app locally
If everything goes well, the template application appears at http://localhost:3000. 

### ES Lint
We can run ESLint to verify that our code complies with coding standards.
```
meteor npm run lint
```


## Closing thoughts on the outcome of our program 
Since all the team members have already been formed, our team, unlike other teams, carried out the project with two people. Usually 3-4 people do it, but our team has to do it with two people, so one person got the overall code and framework and the other wrote the report. From this lesson, we learned that software development as a whole should focus more on the security aspect of the application, although the functionality and appearance of the page are important. During the creation of this project, our team tried and tested a number of things and discovered that it needed improvement. Also, one of the team members discovered several vulnerabilities in the code. The server allows any API request to initiate data insertion/deletion without verifying the authenticated user.
