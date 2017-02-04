---
title: Configuration
layout: page-two-col
parent: Docs
---

# Configuration
{:.no_toc}

<p class="text-intro" markdown="1">Out of the box, Stately comes with a few options to configure your site. All site-wide configuration options are customized by editing your site’s `_config.yml` file.</p>

<div class="pl-4" markdown="1">
* TOC
{:toc}
</div>


## Default configuration

In addition to the standard Jekyll configuration variables, Stately provides a few extras for various customizations you may want to make. Here is the default configuration that comes with a fresh install of Stately:

<div class="code-example border rounded-1">

{% highlight yaml %}

## Stately settings
nav_logo_file: assets/images/stately-logo.png # path to the logo file (supports svg, png, jpg, gif). Delete this line for no logo.
github_link: true # Display link to edit page content on GitHub
github_pages_branch: master # Branch where gh-pages site is hosted (either master, master/docs, or gh-pages)

## Info bar settings
# info_bar: true # Bar at the top of all pages.
# info_bar_text: This is not an offical site of the <a href="//usa.gov" class="text-white text-underline">U.S. Government</a>
{% endhighlight %}
</div>

The variables in the Info bar section have been commented out so that the info bar UI component is not displayed by default.

### Site-wide configuration variables, values, and defaults

<div class="text-small" markdown="1">

| Variable              | Description   | Values  |
|:----------------------|:--------------|:--------|
| `nav_logo_file`           | Path to the image file that displays on the upper right corner of the main nav. | `assets/images/stately-logo.png` (default), any path or url to an image file, or nil (no image). |
| `github_link`         | Display a link to edit the page on GitHub on the bottom of every page? | `true` (default) or `false` (nil) |
| `github_pages_branch` | the branch where the GitHub pages site is hosted |  `master` (default), `master/docs`, `gh-pages`, or nil |
| `info_bar` | Display the black info bar on the top of the site? |  `true` (default) or `false` (nil) |
| `info_bar_text` | Text to display in the info bar (only works if `info_bar` is set to `true`) | Any text (HTML accepted, text will be white by default) |

</div>
