# delegate-disabled-issue

Demo of IE issue with delegate component firing events on `disabled` elements

1. Run `component build` in the repository root
2. Open `index.html` in IE and click the disabled button

A click event will fire even though the button is disabled. The event does not fire on other browsers when the button is disabled. Happens on all versions of IE.

[https://github.com/component/delegate/issues/14](https://github.com/component/delegate/issues/14)