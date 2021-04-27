/**
 * main.js v0.1.0
 * (c) Kepatb. All rights reserved.
 */


// search
function initSiteSearch() {
    var form = document.getElementById('search-form')
    form.addEventListener('submit', function(event) {
        event.preventDefault()

        var input = document.getElementById('search-input'),
            action = form.action,
            finalurl =  action + '?q=site:keptab.com%20' + input.value

        if (!input) {
            return
        } else {
            if (/ip[honead]|android|mobile|phone/i.exec(navigator.userAgent)) {
                location.href = finalurl
            } else {
                window.open(finalurl, "_blank")
            }
        }
        return false
    })
}

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    initSiteSearch()
})