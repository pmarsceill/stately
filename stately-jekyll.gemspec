# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "stately-jekyll"
  spec.version       = "0.1.0"
  spec.authors       = ["Patrick Marsceill"]
  spec.email         = ["pmarsceill@github.com"]

  spec.summary       = %q{A Jekyll theme for government.}
  spec.homepage      = "https://github.com/pmarsceill/stately#readme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(assets|_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end

  spec.add_development_dependency "jekyll", "~> 3.3", ">= 3.3.1"
  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "jemoji", "~> 0"

  spec.add_runtime_dependency "jekyll", "~> 3.3"
  spec.add_runtime_dependency "jemoji", "~> 0"

  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }

  spec.post_install_message = <<-msg

----------------------------------------------
Thank you for installing Stately!

For information on how to get started visit:
https://pmarsceill.github.io/stately/docs/
----------------------------------------------
msg

end
