---
title: Configuration
layout: page-two-col
parent: Docs
---

# Configuration

<p class="text-intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

## Default configuration

<div class="code-example border rounded-1">

{% highlight yaml %}
# Build settings
gems:
  - jemoji

# Stately settings
logo_file: assets/images/stately-logo.png # path to the logo file (supports svg, png, jpg, gif). Delete this line for no logo.
github_link: true # Display link to edit page content on GitHub
github_pages_branch: master # Branch where gh-pages site is hosted (either master, master/docs, or gh-pages)

## Info bar settings
# info_bar: true # Bar at the top of all pages.
# info_bar_text: This is not an offical site of the <a href="//usa.gov" class="text-white text-underline">U.S. Government</a>

{% endhighlight %}
</div>
