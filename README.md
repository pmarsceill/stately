# Stately

Stately is the Jekyll theme for government. Stately’s modern setup and design is specifically geared toward goverment oriented websites.

## Installation

Add this line to your Jekyll site's Gemfile:

```ruby
gem "stately-jekyll"
```

And add this line to your Jekyll site's `_config.yml` file:

```yaml
theme: stately-jekyll
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install stately-jekyll

## Usage

For full setup instructions read the See the [Getting started guide](https://pmarsceill.github.io/stately/docs/).

Edit `_config.yml` to being setting up Stately for your website. In addition to the default Jekyll settings, Stately includes some additional:

```yaml
# Stately settings
logo_file: assets/images/stately-logo.png # path to the logo file (supports svg, png, jpg, gif). Delete this line for no logo.
github_link: true # Display link to edit page content on GitHub
github_pages_branch: master # Branch where gh-pages site is hosted (either master, master/docs, or gh-pages)

## Info bar settings
# info_bar: true # Bar at the top of all pages.
# info_bar_text: This is not an offical site of the <a href="//usa.gov" class="text-white text-underline">U.S. Government</a>
```

See the [Configuration docs](https://pmarsceill.github.io/stately/docs/1-configuration/) for more information.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/pmarsceill/stately. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

### Environment setup

To set up your environment to develop this theme, clone this repo and install the dev dependancies:
```bash
$ bundle install
```

```bash
$ npm install
```

You theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

### Tests

To run tests on SCSS and HTML run:

```bash
$ script/test
```

### Releases

To prepare bundle a new version of the Gem:

- Rev the version number in `package.json`
- Rev the version number in `stately-jekyll.gemspec`
- Update the `CHANGELOG.md`
- Run the build script

```bash
$ script/build
```

## License

The theme is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
