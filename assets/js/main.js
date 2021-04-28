/**
 * main.js v0.1.0
 * (c) Kepatb. All rights reserved.
 */


function loadjs(url) {
    var script = document.createElement('script'), insert = document.getElementsByTagName('script')[0]
    script.async = true
    script.src = url
    insert.parentNode.insertBefore(script, insert)  
}

function loadAnalytics() {
    if (typeof google_analytics === 'undefined') return
    if (typeof google_analyticsjs === 'undefined') return
    window.GoogleAnalyticsObject = 'ga'
    window.ga = window.ga || function() {
        (window.ga.q = window.ga.q || []).push(arguments)
    }
    window.ga.l = +(new Date())
    loadjs(google_analyticsjs)
    ga('create', google_analytics)
    ga('send', 'pageview')
}

function loadDisqus() {
    if (typeof disqus_shortname === 'undefined') return
    if (typeof disqus_embedjs === 'undefined') return
    if (window.location.hostname === 'localhost') return
    if (!document.getElementById('disqus_thread')) return
    loadjs(disqus_embedjs)
}

function initSearch() {
    var form = document.getElementById('search-form')
    if (!form) return
    form.addEventListener('submit', function(event) {
        event.preventDefault()
        var input = document.getElementById('search-input'),
            action = form.action,
            finalurl =  action + '?q=site:keptab.com%20' + input.value

        if (!input) return
        if (/ip[honead]|android|mobile|phone/i.exec(navigator.userAgent)) {
            location.href = finalurl
        } else {
            window.open(finalurl, "_blank")
        }
    })
}

function initScroll2() {
    var trigger = document.getElementById('footer')
    trigger.addEventListener('click', function() {
        try {
            window.scrollTo({ top: 0, behavior: 'smooth'})
        } catch (e) {
            window.scroll(0, 0)
        }
    })
}

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    loadAnalytics()
    loadDisqus()
    initSearch()
    initScroll2()
})