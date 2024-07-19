# Coding Challenge Instructions

Hello There,

Thank you for your interest in our job opening. I'm forwarding you the coding challenge that we use to evaluate candidates.

Please follow the instructions below to complete the challenge.

- You can submit your solution by providing a link to a public repository (GitHub, GitLab, Bitbucket, etc.) that contains your code by end of July 19, 2024.
- A figma file is attached with this email. You can use it to understand the design of the app.
- Use typescript for the code.
- Use next.js to build the application.
- Use the app router src directory to create the app.
- Two api endpoints are provided to you. There is no authentication, so you can make get request to understand their structure.
    1. api/transcripts/[videoId] (e.g. api/transcripts/ykG8dVplZ_g)
    2. api/translations/[videoId] (e.g. api/translations/ykG8dVplZ_g)
- The given api endpoints do not have typescript types, please add them.
- The app should be responsive and should work on mobile, tablet and desktop.

- The app will play a video from youtube. The videoId will be passed as a query parameter to the app.
- The app will display the transcript of the video. The transcript will be fetched from the api/transcripts/[videoId] endpoint.
- The app will display the translation of the transcript in german language. The translation will be fetched from the api/translations/[videoId] endpoint.
- The app will display currently playing part of the video in the transcript. You are free to use any custom code or library to achieve this. (Tip: this possible by using library and custom code, you can search online)
- The app will only show transcript when video is playing and will pause as soon as video is paused. If video is forwarded or rewinded, the transcript will also move to that part.

Note: If you are not able to complete the challenge, you can submit whatever you have completed by the deadline. We will evaluate your submission based on the completeness of the features you have implemented.
