---
title: Typography
layout: page-two-col
parent: Docs
---

# Typography
{:.no_toc}

<p class="text-intro">Government websites share a common need for easily scannable and highly legible typography. Stately’s typography attempts to elevate headings, make paragraphs clear and consistent, and allow for an immediately recognizable document structure. </p>

<div class="pl-4" markdown="1">
* TOC
{:toc}
</div>

## Typefaces

Stately uses two contrasting typefaces: Lato and Lora. Their font files served for free through Google Fonts.

<div class="border rounded-1 p-3 mb-3">
<h1 class="text-sans">Lato</h1>
<p class="text-sans">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
<p class="text-sans">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>

<h1 class="text-serif">Lora</h1>
<p class="text-serif">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
<p class="text-serif">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>

These two typefaces were chosen to create contrast between heading and body elements (see below).

## Headings

Stately has two types of headings: [text headings](#text-headings), and [display headings](#display-headings). Text headings are used to help structure passages of text, and display headings are for further promotion or to call out a headline. By default, all headings in markdown posts and pages are text-headings.

### Text headings

<div class="code-example border rounded-1">

{% highlight html %}
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

{% endhighlight %}
{% highlight markdown %}
<!-- Markdown example: -->
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
{% endhighlight %}


  <div class="border-top p-3">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
  </div>
</div>

### Display headings

<div class="code-example border rounded-1">

{% highlight html %}
<h1 class="display-alpha">Display heading alpha</h1>
<h2 class="display-beta">Display heading beta</h2>

{% endhighlight %}

  <div class="border-top p-3">
    <h1 class="display-alpha">Display heading alpha</h1>
    <h2 class="display-beta">Display heading beta</h2>
  </div>
</div>

## Paragraphs

Similar to headings, Stately has two types of paragraphs: [intro paragraphs](#intro-paragraph), and [regular paragraphs](regular-paragraphs). Intro paragraphs are used to make the first part of a long passage of text stand out (see [lede][491a760b]). By default all paragraphs in markdown pages and posts are regular paragraphs.

  [491a760b]: https://www.merriam-webster.com/dictionary/lede "Lede definition on Merriam Webster"

### Intro paragraph

<div class="code-example border rounded-1">

{% highlight html %}
<p class="text-intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

{% endhighlight %}

  <div class="border-top p-3">
    <p class="text-intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</div>

### Regular paragraph

<div class="code-example border rounded-1">

{% highlight html %}
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

{% endhighlight %}

  <div class="border-top p-3">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</div>

## Lists

Stately has a few lists inherited from Primer, with some additional custom list styles

### Ordered list (from Primer)

<div class="code-example border rounded-1">

{% highlight html %}
<ol>
  <li>Lorem</li>
  <li>How long lines<br>will break.</li>
  <li>dolor</li>
  <li>sit amet</li>
</ol>
{% endhighlight %}
{% highlight markdown %}
<!-- Markdown example: -->
  1. Lorem
  1. How long lines<br>will break.
  1. dolor
  1. sit amet
{% endhighlight %}

<div class="border-top px-5 py-3">
  <ol>
    <li>Lorem</li>
    <li>How long lines<br>will break.</li>
    <li>dolor</li>
    <li>sit amet</li>
  </ol>
</div>
</div>

### Unordered list (from Primer)

<div class="code-example border rounded-1">

{% highlight html %}
<ul>
  <li>Lorem</li>
  <li>How long lines<br>will break.</li>
  <li>dolor</li>
  <li>sit amet</li>
</ul>
{% endhighlight %}
{% highlight markdown %}
<!-- Markdown example: -->
  - Lorem
  - How long lines<br>will break.
  - dolor
  - sit amet
{% endhighlight %}

<div class="border-top px-5 py-3">
  <ul>
    <li>Lorem</li>
    <li>How long lines<br>will break.</li>
    <li>dolor</li>
    <li>sit amet</li>
  </ul>
</div>
</div>

### Unordered list - styled

A more stylized version of an `ol` might be used in content that explains steps or lists requirements that require a specific order.

<div class="code-example border rounded-1">

{% highlight html %}
<ol class="ol-styled">
  <li>Lorem</li>
  <li>How long lines<br>will break.</li>
  <li>dolor</li>
  <li>sit amet</li>
</ol>
{% endhighlight %}

<div class="border-top px-5 py-3">
  <ol class="ol-styled">
    <li>Lorem</li>
    <li>How long lines<br>will break.</li>
    <li>dolor</li>
    <li>sit amet</li>
  </ol>
</div>
</div>

### Checklist

A checklist is best used for content that explains the satisfaction of requirements, needs met, or other another task-based list.

<div class="code-example border rounded-1">

{% highlight html %}
<ul class="list-checklist">
  <li>Lorem</li>
  <li>How long lines<br>will break.</li>
  <li>dolor</li>
  <li>sit amet</li>
</ul>
{% endhighlight %}

<div class="border-top px-5 py-3">
  <ul class="list-checklist">
    <li>Lorem</li>
    <li>How long lines<br>will break.</li>
    <li>dolor</li>
    <li>sit amet</li>
  </ul>
</div>
</div>

## Quotes

### Block quote

For long blocks of quoted text a standard `<blockquote>` will set the quote off from the surrounding text in style, color, indentation, and border. An equivalent `.blockquote` class is also included to override css or apply to a different element type.

<div class="code-example border rounded-1">

{% highlight html %}
<blockquote>
  This is a block quote. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati eius, ratione nulla libero, ab repudiandae ipsum laudantium, ea reiciendis est perspiciatis dignissimos at ullam dolorem aperiam, sit commodi maxime tenetur?
</blockquote>
{% endhighlight %}
{% highlight markdown %}
<!-- Markdown example: -->
> This is a block quote. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati eius, ratione nulla libero, ab repudiandae ipsum laudantium, ea reiciendis est perspiciatis dignissimos at ullam dolorem aperiam, sit commodi maxime tenetur?

{% endhighlight %}

<div class="border-top p-3">
<blockquote>
  This is a block quote. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati eius, ratione nulla libero, ab repudiandae ipsum laudantium, ea reiciendis est perspiciatis dignissimos at ullam dolorem aperiam, sit commodi maxime tenetur?
</blockquote>
</div>
</div>

### Pull quote

For shorter, more emphasized quotes use a the `.pullquote` css class to style the text appropriately. Additionally, combine [utility classes](../4-utilities/) like `float-` and `col-` to size position the text.

<div class="code-example border rounded-1">

{% highlight html %}
<blockquote class="pullquote col-6 float-right">
  This is a pull quote. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</blockquote>
{% endhighlight %}

<div class="clearfix border-top p-3">
<blockquote class="pullquote col-6 float-right">
  This is a pull quote. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</blockquote>

</div>
</div>
