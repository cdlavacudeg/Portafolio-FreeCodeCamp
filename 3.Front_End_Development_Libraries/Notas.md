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