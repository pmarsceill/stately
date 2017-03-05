---
title: Configuration
layout: page-two-col
parent: Docs
active: Docs
---

# Configuration
{:.no_toc}

Out of the box, Stately comes with a few options to configure your site. All site-wide configuration options are customized by editing your site’s `_config.yml` file.
{: .text-intro }

* TOC
{:toc}


## Default configuration

In addition to the standard Jekyll configuration variables, Stately provides a few extras for various customizations you may want to make. Here is a good starting point to use in your `_config.yml` file:

<div class="code-example border rounded-1">

{% highlight yaml %}
# Stately settings
nav_logo_file: assets/images/stately-logo.png # path to the logo file for the main nav (supports svg, png, jpg, gif). Delete this line for no logo.
footer_logo_file: assets/images/stately-logo.png # path to the logo file for the footer nav (supports svg, png, jpg, gif). Delete this line for no logo.
footer_text: false # Text to appear in the footer, copyright information, contact links, etc...
github_link: true # Display link to edit page content on GitHub. Delete this line or set to false for no link.
github_pages_branch: master # Branch where gh-pages site is hosted (either master, master/docs, or gh-pages). Delete this line for no GitHub pages branch.

## Info bar settings
info_bar: false # Bar at the top of all pages. Delete this line or set to false for no info bar display.
info_bar_text: This is not an offical site of the <a href="//usa.gov" class="text-white text-underline">U.S. Government</a> # Only shows if info_bar == true
{% endhighlight %}

</div>

The variables in the Info bar section have been commented out so that the info bar UI component is not displayed by default.

### Site-wide configuration variables, values, and defaults

<div class="text-small" markdown="1">

| Variable              | Description   | Values  |
|:----------------------|:--------------|:--------|
| `nav_logo_file`           | Path to the image file that displays on the upper right corner of the main nav. | `assets/images/stately-logo.png` (default), any path or url to an image file, or nil (no image). |
| `footer_logo_file`           | Path to the image file that displays on the lower right corner of the footer. | `assets/images/stately-logo.png` (default), any path or url to an image file, or nil (no image). |
| `footer_text`           | Text to appear in the footer of the site. | `false` (default) uses the default text, or override this with any text (HTML accepted, text will be white by default) |
| `github_link`         | Display a link to edit the page on GitHub on the bottom of every page? | `true` (default), or `false` (nil) |
| `github_pages_branch` | the branch where the GitHub pages site is hosted |  `master` (default), `master/docs`, `gh-pages`, or nil |
| `info_bar` | Display the black info bar on the top of the site? |  `true` (default), or `false` (nil) |
| `info_bar_text` | Text to display in the info bar (only works if `info_bar` is set to `true`) | Any text (HTML accepted, text will be white by default) |

</div>

## Page-level configuration

Stately also allows for a few page-level customization options.

### Show page in the main nav

By default only pages that contain `nav: true` in their front-matter will be displayed in the main nav.

```yaml
---
title: Page title
layout: page
nav: true
---
```

### Create a side nav with a group of pages

Stately also allows a second level nav to be created using the `parent:` attribute.

First setup a parent of your group. This page probably also should be in the main nav, but that may depend on your specific taxonomy.

```yaml
---
title: Parent level page
layout: page-two-col
nav: true
parent: Parent level page
permalink: parent-level-page/
---
```

Then setup the parent's children. These pages will show up in the sidebar nav along with the parent. See the `/docs` section of this site as an example of how this works.

```yaml
---
title: Second level page
layout: page-two-col
parent: Parent level page
permalink: parent-level-page/second-level-page
---
```

```yaml
---
title: Sibling of second level page
layout: page-two-col
parent: Parent level page
permalink: parent-level-page/sibling-of-second-level-page
---
```
