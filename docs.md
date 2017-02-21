---
title: Docs
layout: page-two-col
nav: true
parent: Docs
permalink: docs/
---

# Documentation

Stately is a Jekyll theme built with Liquid templating, Sass, and a sprinkle of Javascript. It is distributed as a Ruby gem, or on [GitHub][66a89d78].
{: .text-intro }

  [66a89d78]: https://github.com/pmarsceill/stately "GitHub"

## Getting started
To use Stately on your site, install the Ruby Gem and update your `_config.yml` file to use the theme:

1.  Add this line to your Jekyll site's `Gemfile`:
```ruby
gem "stately-jekyll"
```
_or install it globally with:_
```bash
$ gem install stately-jekyll
```

1.  Then, add this line to your Jekyll site's `_config.yml` file:
```yaml
theme: stately-jekyll
```

1.  Install the Gem and dependancies if you are using a `Gemfile`:
```bash
$ bundle
```

1.  Start your local Jekyll server:
```bash
$ bundle exec jekyll serve
```
_or_
```bash
$ jekyll serve
```

1.  Point your web browser to `http://localhost:4000`


See [Configuration]({{ "/docs/1-configuration" | relative_path }}) for instructions on how to edit your `_config.yml` to configure Stately's custom features.

## Contributing to Stately
See the [README](https://github.com/pmarsceill/stately/blob/master/README.md#contributing) for more information.

## Licensing
The theme is available as open source under the terms of the [MIT License](https://github.com/pmarsceill/stately/blob/master/LICENSE.txt).
