# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "stately"
  spec.version       = "0.1.0"
  spec.authors       = ["Patrick Marsceill"]
  spec.email         = ["pmarsceill@github.com"]

  spec.summary       = %q{A Jekyll theme for government.}
  spec.homepage      = "https://github.com/pmarsceill/stately#readme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(_layouts|_includes|_sass|LICENSE|README)/i}) }

  spec.add_development_dependency "jekyll", "~> 3.3.1"
  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "jemoji"
end
