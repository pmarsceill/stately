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
  <li>ipsum</li>
  <li>dolor</li>
  <li>sit amet</li>
</ol>
{% endhighlight %}
{% highlight markdown %}
<!-- Markdown example: -->
  1. Lorem
  1. ipsum
  1. dolor
  1. sit amet
{% endhighlight %}

<div class="border-top px-5 py-3">
  <ol>
    <li>Lorem</li>
    <li>ipsum</li>
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
  <li>ipsum</li>
  <li>dolor</li>
  <li>sit amet</li>
</ul>
{% endhighlight %}
{% highlight markdown %}
<!-- Markdown example: -->
  - Lorem
  - ipsum
  - dolor
  - sit amet
{% endhighlight %}

<div class="border-top px-5 py-3">
  <ul>
    <li>Lorem</li>
    <li>ipsum</li>
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
  <li>ipsum</li>
  <li>dolor</li>
  <li>sit amet</li>
</ol>
{% endhighlight %}

<div class="border-top px-5 py-3">
  <ol class="ol-styled">
    <li>Lorem</li>
    <li>ipsum</li>
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
  <li>ipsum</li>
  <li>dolor</li>
  <li>sit amet</li>
</ul>
{% endhighlight %}

<div class="border-top px-5 py-3">
  <ul class="list-checklist">
    <li>Lorem</li>
    <li>ipsum</li>
    <li>dolor</li>
    <li>sit amet</li>
  </ul>
</div>
</div>
