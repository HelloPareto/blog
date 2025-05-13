// custom typefaces
import "@fontsource-variable/montserrat"
import "@fontsource/merriweather"
// normalize CSS across browsers
//import "./src/normalize.css"
// custom CSS styles
//import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"
import './src/styles/global.css'

exports.onClientEntry = () => {
  if (typeof window !== "undefined") {
    const hash = window.location.hash;
    if (hash.startsWith("#invite_token=")) {
      const newUrl = `/admin/${hash}`;
      window.location.replace(newUrl);
    }
  }
};
