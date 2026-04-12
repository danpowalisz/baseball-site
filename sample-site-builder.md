In baseball-site create an interactive website with Express + static files it should follow the file structure similar to:

<file-structure>
baseball-site\
    - server.js
    - package.json
    - public\
        - index.html
        - style.css
        - app.js
        - images\
            - baseball.png
            - profile.png
            - search.png
            - photos.png
            - contact.png
            - about.png
</file-structure>

<project-description>
1. The site should look modern with a design that looks good in both a computer and mobile web browser
2. It should contain a baseball-themed background on the main page
3. The following sections:

    a. Trivia: a section with random MLB facts
    b. Search: an interactive search where user can query the MLB API for detailed reseults
    C. Photos: a section which stores (locally) MLB photos
    D. Contact: an interactive form for contacting site owner: danpow75@gmail.com
    E. About: a section with a profile photo and a paragraph describing site owner

4. Use real placeholder images from picsum.photos (large sizes - 2000x1200) for background, 800x800 for profile, 1200x800 for Photos section. Download them locally into a public\images folder so everything is served from localhost.
5. A sticky navbar
6. Make it intentionally unoptimized:

- All iamges should be full-size PNGs, no compression
- All CSS in one big unified file lots of comments and whitespace
- ALL JS in one big file loaded synchronously in the <head> not (defer/async)
- Include the full lodash library via a local copy even though you use only one function
- Load Google fonts via @import in CSS (not <link>)
- No lazy loading on any images
- No gzip/brotli compression on the Express Server
- No cachi headers

</project-description>

Now build and test:

<build-instructions>
After building, start the server on port 3509 and confirm it works
</build-instructions>