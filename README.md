# chrome-extension-execute-on-website

Long name, I know, but it is self-explanatory. 

Or is it?...

## What is it?
Well, it turns out that Chrome extensions do not have access to the JavaScript on a webpage, even if the extension is a content script, meaning that you can't access variables and content on the page itself.

I know, it's disappointing. Anyway, there is a solution, and it's to inject a script tag into the page and then execute whatever you want in this script. What's the problem you ask? It's ugly as f, and that's the problem.

Well, luckily, I've got the solution!

This tiny library allows you to easily execute JavaScript code from your Chrome extension in a webpage.

## Usage
How does it work, you ask? It's as simple as:

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

1. Download the script from the following URL, and put it somewhere in your extension's folder:

`https://cdn.jsdelivr.net/npm/chrome-extension-execute-on-website/execute-on-website.min.js`

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
Here's an example of a full manifest with the library included:
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
