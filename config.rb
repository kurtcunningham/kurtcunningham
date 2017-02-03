###
# Site Config
###

# Reload the browser
configure :development do
  activate :livereload
end

# Sprockets
activate :sprockets

# Require Helpers
require "helpers/image_helpers"
helpers ImageHelpers

#Google Analytics
activate :google_analytics do |ga|
  ga.tracking_id = 'UA-44827406-1'
end

# Markdown
set :markdown_engine, :kramdown

# Directory Settings
set :css_dir,    'stylesheets'
set :js_dir,     'javascript'
set :images_dir, 'images'
set :relative_links, true

# Build-specific configuration
configure :build do
  config[:host] = "http://www.kurtcunningham.com"
  activate :minify_css
  activate :minify_javascript
  activate :minify_html
  # activate :asset_hash
  activate :directory_indexes
  activate :gzip
  # activate :imageoptim, pngout: false
  activate :relative_assets
end

# Deploy To GH-Pages
activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.build_before = true
end