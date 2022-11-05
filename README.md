# dmoney-api-testing-newman
 automate dmoney api by postman where test cases are added for Login,User list,Creating users,Searching users,Update user information,Delete user & report generated by newman.Steps are given to run this project:
- Clone this project 
- Give the following commands by openning terminal section in code editor's
```
npm init -y

```
```
npm i newman

```
```
npx newman run .\Dmoney User.postman_collection.json -n 1

```
```
npm i newman-reporter-htmlextra

```
```
npm test

```
- Read the project [Documentation](https://documenter.getpostman.com/view/20032280/2s8YYFr4CY)

## Screenshot of the report which generated by newman

![screencapture-file-G-My-Sqa-Project-Postman-Reports-report-html-2022-11-05-02_19_10](https://user-images.githubusercontent.com/47362218/200127029-cbdaea6e-38c3-44d0-9a7b-78b8ed5995d9.png)
