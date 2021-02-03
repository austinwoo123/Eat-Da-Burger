# Eat-Da-Burger

## Description
My task was to create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. The user is able to add a burger and eat the burger as well as "save the burger for later" which will delete the burger from the page.
## Table of Contents
1. [Description](#description)
2. [ScreenShot](#ScreenShot)
3. [Installation](#Installation)
4. [Code Snippet](#code-snippet)
5. [Built with](#built-with)
6. [Licenses](#licenses)
7. [Author](#author)
8. [Questions](#Questions)
9. [Acknowledgements](#acknowledgements)


## ScreenShot
![Alt](https://raw.githubusercontent.com/austinwoo123/Eat-Da-Burger/main/public/assets/img/burger.png)
## Installation
1. Clone repo 
2. Install the required NPM packages
3. Start the application server using node.server.js

## Code Snippet
```
<ul>
    {{#each burgers}}
    {{#unless devoured}}
    <li>
        {{burger_name}}

        {{!-- <button class="save-burger" data-id="{{this.id}}">Save for later!</button> --}}

        <button class="eat-burger" data-id="{{this.id}}">Eat!</button>
    </li>
    {{/unless}}
    {{/each}}
</ul>

<h2>Devoured</h2>

<ul>
    {{#each burgers}}
    {{#if devoured}}
    <li>
        {{burger_name}}
        <button class="save-burger" data-id="{{this.id}}">Save for later!</button>
        {{!-- <button class="save-burger" data-id="{{id}}">{{#if devoured}}Save For later!{{else}}Eat!{{/if}}
        </button> --}}
        {{!-- <button class="save-burger" data-id="{{id}}">{{#if devoured}}EAT!{{else}}Save For Later!{{/if}}
        </button> --}}
    </li>
    {{/if}}
    {{/each}}
</ul>
```
This code shows how I used express handlebars to iterate through the burgers table and display the name of the burger in an unordered list with buttons for "eat" and "save for later." The eat button will move the burger to the "devoured" list and the "save for later" button will delete the burger from the page. 

```
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burgerCon.updateOne({ devoured: req.body.devoured }, condition, function (result) {
        console.log(result)
        if (result.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burgerCon.deleteOne(condition, function (result) {
        if (result.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
```
This code shows how I created the update and delete routes for my burgers controller.js file. 

## Built with
- Node
- Gitbash
- Express/handlebars
- MySQL
- Heroku


## Licenses
MIT License

## Author
   Austin Woo

## Questions

- For any questions related to this application, please contact me at: austinwoo123@gmail.com or visit my Github Profile here: https://github.com/austinwoo123
  
## Acknowledgements
- Jerome Chenette (Instructor)
- Manuel Nunes (TA)
- Mahisha Manikandan (TA)
- UC Berkeley Coding Bootcamp