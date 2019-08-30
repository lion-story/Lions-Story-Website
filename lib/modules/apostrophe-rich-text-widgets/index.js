//Extra classes for any widgets need to be added here
module.exports = {
	sanitizeHtml: {
	  allowedClasses: {
		'*': ['small-text', 'extra-small-text']
	  },
	  allowedAttributes: {
		'*': ['style', 'href', 'target']
	  },
	  allowedTags: [ 'h1','h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul','u',
	  'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br',
	  'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre' ],
	}
  }