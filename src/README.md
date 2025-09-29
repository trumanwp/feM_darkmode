> EmailJS 
 
>AWS Deployment (S3 + CloudFront)


> Firebase Auth + Google Analytics

***Truman Setup Guide***
- Email JS

EmailJS setup is extremely easy, create a ContactUs.jsx component, and copy paste the code from https://www.emailjs.com/docs/examples/reactjs/

The component is fully customizable.

.
.
.

- Firebase Auth + Google Analytics

This is a bit more annoying.

- first, use npm install react-router-dom and npm install firebase
- then copy and paste the following files
  - Login.jsx
  - ProtectedRoute.jsx
  - useAuth.js
  - Copy handleLogout() from App.jsx
  - Copy routing from main.jsx

- Finally, head to firebase console, create a new app (enable analytics during setup), go to build > authentication > sign-in method > add email/password
- Click on the settings button next to project overview, and copy paste the template code into a new file firebase.js.
- This should have successfully setup firebase, and google authenticator.

...

- AWS S3 + Cloudfront Setup

This is a major pain.

- Go to AWS console > S3 > Create Bucket. Input a name, most other settings should be standard.
- Head to Cloudfront > Create Distribution 
  - Add a name
  - Select the S3 bucket you just made
  - Origin path = index.html
  - Create
- Head back to S3 > permissions > Bucket Policy > Change Sid value to "AllowCloudFrontRead"
- Head to IAM, create a new user or a new key on the current user
- Head to the github repo > actions > create own workflow, copy and paste the actions from this project, subbing out any IDs with those of the new bucket and cloudfront
- Head to the github repo > settings > secrets > variables > add secret variables mentioned in the actions file, setting values to keys generated from IAM user
- To fix routing, head to cloudfront > distribution > error pages > create custom error response
- set: http error code 403, custom error response Yes, response path /index.html, response code 200
- Cloudfront > select distribution > invalidations > create validation > "/*"
- At this point, the deployment should be working.

Congratulations, you have successfully setup EmailJS, Firebase Auth + Analytics, and deployed to AWS S3 + Cloudfront with a fully working CI/CD pipeline.