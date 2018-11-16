window.exec = function(func, context, container) {
    container = container 
        || document.querySelector('body') 
        || document.querySelector('html') 
        || document.documentElement;

    if (!container) {
        throw new Error('Failed to execute script because there seems to be no body, html or document at all')
    }
    const script = document.createElement('script');
    const code = document.createTextNode(`(${func.toString()})(${JSON.stringify(context)})`);
    script.appendChild(code);
    container.appendChild(script);
}