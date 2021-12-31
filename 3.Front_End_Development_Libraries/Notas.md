# Bootstrap

## Contenedores

Las siguientes clases permiten que nuestro contenido sea responsive:
- `container-fluid`:Se aplica a div
- `img-responsive`:Para el caso de las imagenes

## Texto

- `text-center`:Centrar el texto
- `text-danger`: Cambior color de texto 

## Botones

- `btn btn-default`:Crear botones al estilo de bootstrap
- `btn-block`:display block, es decir que va a ocupar todo el espacio horizontal
- `btn-primary`,`btn-info`,`btn-danger`:cambio al color primaria de la pagina


## Bootstrap Grid

Bootstrap uses a responsive 12-column grid system, which makes it easy to put elements into rows and specify each element's relative width. Most of Bootstrap's classes can be applied to a div element.

Bootstrap has different column width attributes that it uses depending on how wide the user's screen is. For example, phones have narrow screens, and laptops have wider screens.

Take for example Bootstrap's col-md-* class. Here, md means medium, and * is a number specifying how many columns wide the element should be. In this case, the column width of an element on a medium-sized screen, such as a laptop, is being specified.

- `row`: Crea el grid de 12 columnas
- `col-xs-*`: * Numero de columnas especificado para extra-small (pantallas muy pequeñas)

# jQuery

All jQuery functions start with a $, usually referred to as a dollar sign operator, or as bling.

jQuery often selects an HTML element with a selector, then does something to that element.

For example, let's make all of your button elements bounce. Just add this code inside your document ready function:

`$("button").addClass("animated bounce");`

Note that we've already included both the jQuery library and the Animate.css library in the background so that you can use them in the editor. So you are using jQuery to apply the Animate.css bounce class to your button elements.

## Remove Classes from an Element with jQuery
In the same way you can add classes to an element with jQuery's addClass() function, you can remove them with jQuery's removeClass() function.

Here's how you would do this for a specific button:

`$("#target2").removeClass("btn-default");`

Let's remove the btn-default class from all of our button elements.

## Change the CSS of an Element Using jQuery
We can also change the CSS of an HTML element directly with jQuery.

jQuery has a function called .css() that allows you to change the CSS of an element.

Here's how we would change its color to blue:

`$("#target1").css("color", "blue");`

This is slightly different from a normal CSS declaration, because the CSS property and its value are in quotes, and separated with a comma instead of a colon.

## Disable an Element Using jQuery
You can also change the non-CSS properties of HTML elements with jQuery. For example, you can disable buttons.

When you disable a button, it will become grayed-out and can no longer be clicked.

jQuery has a function called .prop() that allows you to adjust the properties of elements.

Here's how you would disable all buttons:

`$("button").prop("disabled", true);`

## Change Text Inside an Element Using jQuery
Using jQuery, you can change the text between the start and end tags of an element. You can even change HTML markup.

jQuery has a function called .html() that lets you add HTML tags and text within an element. Any content previously within the element will be completely replaced with the content you provide using this function.

Here's how you would rewrite and emphasize the text of our heading:

`$("h3").html("<em>jQuery Playground</em>");`

jQuery also has a similar function called .text() that only alters text without adding tags. In other words, this function will not evaluate any HTML tags passed to it, but will instead treat it as the text you want to replace the existing content with.

## Remove an Element Using jQuery
Now let's remove an HTML element from your page using jQuery.

jQuery has a function called .remove() that will remove an HTML element entirely

## Use appendTo to Move Elements with jQuery
Now let's try moving elements from one div to another.

jQuery has a function called appendTo() that allows you to select HTML elements and append them to another element.

For example, if we wanted to move target4 from our right well to our left well, we would use:

`S$("#target4").appendTo("#left-well");`

## Clone an Element Using jQuery
In addition to moving elements, you can also copy them from one place to another.

jQuery has a function called clone() that makes a copy of an element.

For example, if we wanted to copy target2 from our left-well to our right-well, we would use:

`$("#target2").clone().appendTo("#right-well");`

Did you notice this involves sticking two jQuery functions together? This is called function chaining and it's a convenient way to get things done with jQuery.

## Target the Parent of an Element Using jQuery
Every HTML element has a parent element from which it inherits properties.

For example, your jQuery Playground h3 element has the parent element of `<div class="container-fluid">`, which itself has the parent body.

jQuery has a function called parent() that allows you to access the parent of whichever element you've selected.

Here's an example of how you would use the parent() function if you wanted to give the parent element of the left-well element a background color of blue:

`$("#left-well").parent().css("background-color", "blue")`

## Target the Children of an Element Using jQuery
When HTML elements are placed one level below another they are called children of that element. For example, the button elements in this challenge with the text #target1, #target2, and #target3 are all children of the `<div class="well" id="left-well">` element.

jQuery has a function called children() that allows you to access the children of whichever element you've selected.

Here's an example of how you would use the children() function to give the children of your left-well element the color blue:

`$("#left-well").children().css("color", "blue")`

## Target a Specific Child of an Element Using jQuery
You've seen why id attributes are so convenient for targeting with jQuery selectors. But you won't always have such neat ids to work with.

Fortunately, jQuery has some other tricks for targeting the right elements.

jQuery uses CSS Selectors to target elements. The target:nth-child(n) CSS selector allows you to select all the nth elements with the target class or element type.

Here's how you would give the third element in each well the bounce class:

`$(".target:nth-child(3)").addClass("animated bounce");`

## Target Even Elements Using jQuery
You can also target elements based on their positions using :odd or :even selectors.

Note that jQuery is zero-indexed which means the first element in a selection has a position of 0. This can be a little confusing as, counter-intuitively, :odd selects the second element (position 1), fourth element (position 3), and so on.

Here's how you would target all the odd elements with class target and give them classes:

`$(".target:odd").addClass("animated shake");`


# SASS
Sass, or "Syntactically Awesome StyleSheets", is a language extension of CSS. It adds features that aren't available in basic CSS, which make it easier for you to simplify and maintain the style sheets for your projects.

[Install Sass](https://sass-lang.com/install)

`sass --no-source-map -w 3_main.scss 3_main.css`


## Store Data with Sass Variables

One feature of Sass that's different than CSS is it uses variables. They are declared and set to store data, similar to JavaScript.

In JavaScript, variables are defined using the let and const keywords. In Sass, variables start with a $ followed by the variable name.
Here are a couple examples:

```
$main-fonts: Arial, sans-serif;
$headings-color: green;
```

And to use the variables:

```
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```

One example where variables are useful is when a number of elements need to be the same color. If that color is changed, the only place to edit the code is the variable value.


## Nest CSS with Sass

Sass allows nesting of CSS rules, which is a useful way of organizing a style sheet.

Normally, each element is targeted on a different line to style it, like so:

nav {
  background-color: red;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
}
For a large project, the CSS file will have many lines and rules. This is where nesting can help organize your code by placing child style rules within the respective parent elements:

nav {
  background-color: red;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}

## Create Reusable CSS with Mixins

In Sass, a mixin is a group of CSS declarations that can be reused throughout the style sheet.

Newer CSS features take time before they are fully adopted and ready to use in all browsers. As features are added to browsers, CSS rules using them may need vendor prefixes. Consider box-shadow:
```
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```

It's a lot of typing to re-write this rule for all the elements that have a box-shadow, or to change each value to test different effects. Mixins are like functions for CSS. Here is how to write one:

```
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```
The definition starts with @mixin followed by a custom name. The parameters (the $x, $y, $blur, and $c in the example above) are optional. Now any time a box-shadow rule is needed, only a single line calling the mixin replaces having to type all the vendor prefixes. A mixin is called with the @include directive:

```
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```
## Use @if and @else to Add Logic To Your Styles
The @if directive in Sass is useful to test for a specific case - it works just like the if statement in JavaScript.

```
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```

And just like in JavaScript, @else if and @else test for more conditions:

```
@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}
```

## Use @for to Create a Sass Loop

The @for directive adds styles in a loop, very similar to a for loop in JavaScript.

@for is used in two ways: "start through end" or "start to end". The main difference is that the "start to end" excludes the end number as part of the count, and "start through end" includes the end number as part of the count.

Here's a start through end example:

```
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```

The #{$i} part is the syntax to combine a variable (i) with text to make a string. When the Sass file is converted to CSS, it looks like this:

```
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
```

This is a powerful way to create a grid layout. Now you have twelve options for column widths available as CSS classes.

## Use @each to Map Over Items in a List

The last challenge showed how the @for directive uses a starting and ending value to loop a certain number of times. Sass also offers the @each directive which loops over each item in a list or map. On each iteration, the variable gets assigned to the current value from the list or map.

```
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
```

A map has slightly different syntax. Here's an example:

```
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
```

Note that the $key variable is needed to reference the keys in the map. Otherwise, the compiled CSS would have color1, color2... in it. Both of the above code examples are converted into the following CSS:

```
.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}
```