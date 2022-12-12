Important Notes for open project
Note :- I am not sending node module file because when i send node module file than file length is very big.

1-first setup project and goto the directory(assignment)
2-than open the terminal and write npm install(here i used only one extra package react-router-dom)
3-after install all module just write npm start

---

Login Section  
in the login section there are two file js file and css file
Login.js
-->in login.js i take a object initialField which is hold two key email and password.

--> take one state(loginData) because of set and get and also manupulate email and password value and put initial object which is initialField initially

-->destructure email and password(used becausd avoit all time write loginData.email and loginData.password)

-->And also encrypt the password help window.btoa predefind javascript function
-->apply basic validation useing regex
-->store encrypted password in local storage.

---

Dashbord Section
-->in the Dashbord section there are two file also js file and css file
-->in headerSection class section we take one h1 tag and one logOut button where we navigate login page and also clear local storage all times when we click logOut button

-->filter all current user data with help of user_id
and set in the state and also show all field which is a current user_id data in the table

-->filter all current user data in the invitation_update with help of user_id
and set in the state and also append the state and show all field which is a current user_id data in the table ,
note:- invitation_update data append 5 second time interval

---

style-logic
-->all read status data are diffrent color another row is diffrent
we use ternary operator where we check all time when data.status is a read than backround is another color else another color

-------------------------------THank You-----------------------------------------------
