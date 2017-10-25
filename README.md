# chrome-extension-execute-on-website

It is a long name, but it is self-explanatory, so it's worth it.

Or is it?...

## What is it?

It turns out that Chrome extensions do not have access to the JavaScript on a webpage, even if the extension is a content script. As a result, you can't access variables and content on the page itself.

It's disapointing. There is a solution, you have to inject a script tag to the page and then execute whatever you want in the script. You may ask yourself what is the problem? It's ugly as f, that's the problem.

Well, luckily, I've got the solution!

This tiny library allows you to easily execute JavaScript code in a webpage from your Chrome extension.

## Usage
But how does it work? It is as simple as this:

```javascript
exec(() => {
    console.log('This is the window of the current webpage:', window);
});
```

Nice, huh? I know!

Anyway, so that's more or less it. Best 500 bytes (unminified) your Chrome extension is going to get.

## Installation

### jsDelivr (Recommended)
I just love jsDelivr. 


1. Download the script from the this --> [URL](https://cdn.jsdelivr.net/npm/chrome-extension-execute-on-website/execute-on-website.min.js) <--, and put it somewhere in your extension's folder:


2. Go to your manifest file, make sure you have `contentSettings` permission, like this:
```json
  "permissions": [
    "contentSettings"
  ]
```

Under `content_scripts` add a `js` array and insert the path to the library file as an item.

No worries, here's an example:

Assuming your script is in a folder called `js`:

```json
"content_scripts": [
    {
      "js": [
        "js/execute-on-website.min.js",
        "./inject.js"
      ]
    }
  ]
```

It's as simple as that.

### npm

Navigate to your extension's folder, and run the following command: (After making sure you have Node installed)
```bash
npm i chrome-extension-execute-on-website
```
Good, now go to your `manifest.json`, make sure you have `contentSettings` permission:
```json
  "permissions": [
    "contentSettings"
  ]
```
Under `content_scripts` add `js` array and add the following path as an item:

`node_modules/chrome-extension-execute-on-website/execute-on-website.js`

And that should do the job. Here is an example:

```json
"content_scripts": [
    {
      "js": [
        "node_modules/chrome-extension-execute-on-website/execute-on-website.js",
        "./inject.js"
      ]
    }
  ]
```

## Sample Manifest
Here is an example of a full manifest, with the library included:
```json
{
  "name": "My Extension",
  "version": "0.0.4",
  "manifest_version": 2,
  "description": "",
  "homepage_url": "http://eliran.net",
  "icons": {
    "16": "icons/Lightning16.png",
    "19": "icons/Lightning19.png",
    "48": "icons/Lightning48.png",
    "128": "icons/Lightning128.png"
  },
  "permissions": [
    "contentSettings"
  ],
  "content_scripts": [
    {
      "matches": [
        "*://*/*"
      ],
      "js": [
        "js/execute-on-website.min.js",
        "./inject.js"
      ]
    }
  ]
}
```
