# Project Overview

## Project Name

Code.Cards

## Project Description

My project is designed to create a resource for new developers to study and solidify important methods, definitions and concepts. This will be displayed in a flashcard format.

## Wireframes

Home Page:

The home page will contain a header with a button navigating to add a card in the header. In the body it will contain clickable cards for each topic the user can explore flashcards for leading them to the flashcard page. There will be a header with a clickable github link and a email form.

![alt text](https://res.cloudinary.com/dbmxg3su8/image/upload/v1616761999/Screen_Shot_2021-03-26_at_8.32.54_AM_tqsmf7.png "Home Page Wireframe")

Flashcard Page:

The flashcard page will have a topbar that allows the user to select the card they want to view it will also contain a card component that will hold the card definition and name. The card will have a flip button revealing the card details to the user. At the bottom of that the page will have 3 resource links for the user to read more on each card.

![alt text](https://res.cloudinary.com/dbmxg3su8/image/upload/v1616761720/Screen_Shot_2021-03-26_at_8.27.51_AM_njxjjg.png "Flashcard Page Wireframe")

Add a Card Page:

The add a card page will allow for the user to add their own card. This will have a form that the user can fill out and submit the card to be added to the deck. The topic section will be a dropdown to prevent the user from adding a topic that doesn't fit the topics already outlined on the homepage.

![alt text](https://res.cloudinary.com/dbmxg3su8/image/upload/v1616761720/Screen_Shot_2021-03-26_at_8.28.09_AM_fqgooc.png "Add a Card Page Wireframe")

## Component Hierarchy

Components:

![alt text](https://res.cloudinary.com/dbmxg3su8/image/upload/v1616741153/CodeCards_ukgvxs.png "Components")

## API and Data Sample

Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This **must** be properly formatted. An example is below:

```json
{
  "records": [
    {
      "id": "recWXbpal3U346VCY",
      "fields": {
        "firstresource": "https://www.geeksforgeeks.org/javascript-boolean/#:~:text=Boolean%20is%20a%20datatype%20that,terms%20of%20true%20or%20false.",
        "topic": "Types, Values, & Variables",
        "secondresource": "https://www.w3schools.com/js/js_booleans.asp",
        "name": "Boolean",
        "definition": "Boolean is a datatype that returns either of two values i.e. true or false. In JavaScript, Boolean is used as a function to get the value of a variabl...",
        "thirdresource": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean"
      },
      "createdTime": "2021-03-26T03:59:27.000Z"
    },
    {
      "id": "recS39LOjADyjtVi6",
      "fields": {
        "firstresource": "https://www.geeksforgeeks.org/javascript-tostring-function/#:~:text=The%20toString()%20method%20in,representing%20the%20specified%20Number%20object.&t...",
        "topic": "Types, Values, & Variables",
        "secondresource": "https://www.w3schools.com/jsref/jsref_tostring_string.asp",
        "name": "toString",
        "definition": "The toString() method in Javascript is used with a number and converts the number to a string. It is used to return a string representing the specifie...",
        "thirdresource": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
      },
      "createdTime": "2021-03-26T03:59:27.000Z"
    },
    {
      "id": "recObn21Pr0PTIWj1",
      "fields": {
        "firstresource": "https://www.w3schools.com/js/js_variables.asp",
        "topic": "Types, Values, & Variables",
        "secondresource": "https://javascript.info/variables",
        "name": "Variable",
        "definition": "JavaScript variables are containers for storing data values.",
        "thirdresource": "https://www.tutorialspoint.com/javascript/javascript_variables.htm"
      },
      "createdTime": "2021-03-26T03:59:27.000Z"
    }
  ],
  "offset": "recObn21Pr0PTIWj1"
}
```

### MVP/PostMVP

My functionality is divided into two separate lists: MVP and PostMVP.

#### MVP

- Create a interactive React App
- Utilize React Router
- Have a variety of components
- Maintain an organized and easy to follow file structure
- Create and use my own API using Airtable
- Have a variety of components
- Render data on page
- Use Axios to GET from Airtable and POST/CREATE new data on Airtable.
- Use only React for DOM Manipulation.
- Create multiple paths between 3 main page components
- Create cards that are able to flip
- Allow user to add cards to deck

#### PostMVP

- Add a text box to card page that allows the user to take notes prior to flipping card
- Add a quiz feature
- Add a page that is in post format that allows fellow coders to give advice to coders display that advice in brick format
- Add a delete function

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

| Day      | Deliverable                                                              | Status     |
| -------- | ------------------------------------------------------------------------ | ---------- |
| March 25 | Prompt / Complete Pitch                                                  | Complete   |
| March 26 | Pitch / Project Approval                                                 | Complete   |
| March 26 | Complete API Creation / File Structure / Skeleton Structure / Psuedocode | Complete   |
| March 27 | Styling                                                                  | Complete   |
| March 28 | All Psudocode translated to real code                                    | Complete   |
| March 29 | Testing Complete                                                         | Complete   |
| March 30 | MVP                                                                      | Complete   |
| March 31 | Post MVP Work                                                            | Complete   |
| April 1  | Final Polishing / Deployment                                             | Complete   |
| April 2  | Presentations                                                            | Incomplete |

## Timeframes

| Component                       | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Adding Form                     |    H     |      3hrs      |     3hrs      |    3hrs     |
| Working with API & Creating Api |    H     |      6hrs      |     6hrs      |    6hrs     |
| Working with File Structure     |    H     |      3hrs      |     4hrs      |    4hrs     |
| Setting frame/skeleton          |    H     |      3hrs      |     3hrs      |    3hrs     |
| Creating Components             |    H     |      3hrs      |     3hrs      |    3hrs     |
| Working out Routing & Paths     |    H     |      4hrs      |     2hrs      |    2hrs     |
| Organizing                      |    H     |      3hrs      |     3hrs      |    3hrs     |
| Creating Form                   |    H     |      1hrs      |     2hrs      |    2hrs     |
| Working with State              |    H     |      3hrs      |     2hrs      |    2hrs     |
| Working with CSS Format         |    H     |      5hrs      |     10hrs     |    10hrs    |
| Polishing Design                |    M     |      5hrs      |     2hrs      |    2hrs     |
| Debugging                       |    H     |      3hrs      |     4hrs      |    4hrs     |
| Cleaning Code & Refactoring     |    M     |      2hrs      |     1hrs      |     1hr     |
| Testing                         |    H     |      1hrs      |     1hrs      |    1hrs     |
| Total                           |          |    45.5hrs     |     46hrs     |    46hrs    |

## SWOT Analysis

### Strengths:

A clear destination as far as design and structure.
A practical idea

### Weaknesses:

Figuring out react in the scope of this project. Making airtable work the way I want it to.

### Opportunities:

Post MVP achievements and additional styling like animation. Making ths design more modern.

### Threats:

The data not displaying the way i want to.

I plan to overcome my weaknesses and threats by focusing on my strong skills and putting in my additional time in my weak areas.
