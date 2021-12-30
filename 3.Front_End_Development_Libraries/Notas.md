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

