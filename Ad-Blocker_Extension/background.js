const defaultFilters = [
	"*://*.ebay.com/*",
	"*://pune.craigslist.org//*",
	"*://*.gumtree.com/*",
	"*://*.gumtree.com/*",
	"*://oodle.com/*",
	"*://*.adpost.com/*",
	"*://*.hoobly.com/*",
	"*://*.salespider.com/*",
	"*://*.adsglobe.com/*",
	"*://*.yakaz.com/*"
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {return {cancel : true}},

    { urls : defaultFilters},
    ["blocking"]
)