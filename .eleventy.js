const fs = require('fs');
const { EleventyRenderPlugin, HtmlBasePlugin } = require("@11ty/eleventy");
const pluginNavigation = require('@11ty/eleventy-navigation');
const footnote_plugin = require('markdown-it-footnote');
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItDeflist = require("markdown-it-deflist");

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true
}

const yaml = require("js-yaml");

const { imageShortcode, imageWithClassShortcode, imageUrl } = require('./config');

module.exports = function(config) {
  // Set pathPrefix for site
  let pathPrefix = '/';

  config.addPlugin(EleventyRenderPlugin);
  config.addPlugin(HtmlBasePlugin);

  config.amendLibrary("md", (mdLib) => mdLib.use(footnote_plugin));
  config.amendLibrary("md", (mdLib) => mdLib.use(markdownItAttrs));
  config.amendLibrary("md", (mdLib) => mdLib.use(markdownItDeflist));
  
  // Copy the robots.txt file to the output
  config.addPassthroughCopy('robots.txt');

  // Copy USWDS init JS so we can load it in HEAD to prevent banner flashing
  config.addPassthroughCopy({'./node_modules/@uswds/uswds/dist/js/uswds-init.js': 'assets/js/uswds-init.js'});

  // Specific scripts to guides
  config.addPassthroughCopy("./assets/_common/js/*");
  config.addPassthroughCopy("./assets/**/js/*");

  config.addPassthroughCopy({'./assets/_common/_img/favicons/favicon.ico': './favicon.ico' });
  config.addPassthroughCopy({'./assets/_common/_img/favicons': './img/favicons' });
  //config.addPassthroughCopy('./assets/_common/_img/');

  // Set download paths
  // Place files for download in assets/{guide}/dist/{filename.ext}
  config.addPassthroughCopy("./assets/**/dist/*");

  // Allow yaml to be used in the _data dir
  config.addDataExtension("yaml", contents => yaml.load(contents));

  config.addPlugin(pluginNavigation);

  // Get the URL for an image given the relative path to its source
  config.addFilter('imageUrl', (imageSource) => {
    return imageUrl(imageSource);
  });

  // Set image shortcodes
  config.addLiquidShortcode('image', imageShortcode);
  config.addLiquidShortcode('image_with_class', imageWithClassShortcode);
  config.addLiquidShortcode("uswds_icon", function (name) {
    return `
    <svg class="usa-icon" aria-hidden="true" role="img">
      <use xlink:href="#svg-${name}"></use>
    </svg>`;
  });

  
  let getSvgContent = async function (file) {
      let data = fs.readFileSync(file, 
      function(err, contents) {
         if (err) return err
         return contents
      });

      return data.toString('utf8');
   }
  config.addLiquidShortcode("svg", getSvgContent);
   

  // If BASEURL env variable exists, update pathPrefix to the BASEURL
  if (process.env.BASEURL) {
    pathPrefix = process.env.BASEURL
  }


  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ["md", "njk", "html", "liquid"],

    // Pre-process *.md files with: (default: `liquid`)
    // Other template engines are available
    // See https://www.11ty.dev/docs/languages/ for other engines.
    markdownTemplateEngine: "liquid",

    // Pre-process *.html files with: (default: `liquid`)
    // Other template engines are available
    // See https://www.11ty.dev/docs/languages/ for other engines.
    htmlTemplateEngine: "liquid",

    // -----------------------------------------------------------------
    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Don’t worry about leading and trailing slashes, we normalize these.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`

    // Optional (default is shown)
    pathPrefix: pathPrefix,
    // -----------------------------------------------------------------

    
    dir: {
      input: ".",     
      includes: "_includes", 
      data: "_data",
      output: "public"
    }
  };
};