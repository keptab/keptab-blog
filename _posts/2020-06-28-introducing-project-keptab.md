---
layout: post
title: Introducing Project Keptab
---

Recently, we launched a brand new side project named [Keptab](https://keptab.com). [Project Keptab](https://keptab.com) is a useful browser extension that closes all your open tabs with a single click and saves them as a simple list. From there, you can save that list as a web page, share them with your friends, or restore all of them

![Keptab Screenshot](/media/2020-06-28-introducing-project-keptab/keptab-preface.png)

It kept your tabs as tabs group and read them later. [Project Keptab](https://keptab.com) is a browser tabs manager in style of [OneTab](https://www.one-tab.com/) or [Toby](https://www.gettoby.com), but developer-centric and more powerful. It is designed to lightweight yet featureful.

## Why we started this?

![OneTab Screenshot](/media/2020-06-28-introducing-project-keptab/onetab-screenshot.png)

We're crazy [OneTab](https://www.one-tab.com/) users and use it everyday. But it has some big problems. What we can do is giving up. Here was a list

* *Slow*, OneTab is slow with thousands of tabs group.
* *Tracking*, OneTab is using [Google Analytics](https://analytics.google.com) in browser extension, which worrying tabs data privacy
* *Favicons*, OneTab on bootstrap requested lots of favicons via Google Proxy
* **Lost Data**, Lost data in OneTab was common and unbearable.

We had more than 2000+ tabs before [OneTab](https://www.one-tab.com/) data loss incident, when the chrome crashed, they gone and never come back.

We love [OneTab](https://www.one-tab.com/) so much. So we launched a brand new another OneTab.

## How We Do This?

We make lots of changes with current tabs manager's infrastruture.

### Refuse Data Loss with IndexedDB

The big problem for OneTab with data loss incident is using [Localstorage](https://developer.mozilla.org/en-US/docs/conflicting/Web/API/Window/localStorage) as data storage. As a research for browser's localstorage data READ/WRITE, the localstorage is easy to make data loss incident when browser gone crash. After lots of comparisons, we choose [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) to save our tabs data. In our benchmark test, IndexedDB would save more than over 100,000+ items and never lost data when browser gone crash.

### Fastest ReactDOM Alternative

As a simple and developer-centric browser tabs manager, we don't need lots of view engine codes to render the page. Honestly, using [React](https//reactjs.org) or [VUE](https://vuejs.org) to render more 100,000+ items in single page is really a bad choice. But we have no choice with rendering so much items.

We have a research for React's alternatives, such as [Preact](https://preactjs.com) and so on. Finally, we find a really simple ReactDOM codes to finish this. It's simple but really fast enough to do this. 

### Instance Search with Magic!

We had more than 2000+ tabs as a list, find something is a common requets. Frankly, these are no tabs managers for search accord with the demands of us. We need fast, instance, and really powerful search engine to get everthing, tab's title/url/path and so on. So, we build a new instance search with magic.

## Project Keptab

[Project Keptab](https://keptab.com) is a smart tabs manager for you. We named this just as **kep**t **tab**s, which means you can keep tabs anywhere anytime and anyhow.

Wish that you will love [Keptab](https://keptab.com).