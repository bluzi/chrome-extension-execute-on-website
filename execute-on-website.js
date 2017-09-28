const exec = func => {
    const container = document.querySelector('body') 
        || document.querySelector('html') 
        || document.documentElement;

    if (!container) {
        throw new Error('Failed to execute script because there seems to be no body, html or document at all')
    }

    const script = document.createElement('script');
    script.innerText = '(' + func.toString() + ')();';
    container.appendChild(script);
}