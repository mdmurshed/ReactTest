import e from"react";import t from"prop-types";!function(e,t){void 0===t&&(t={});var c=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===c&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".customCheckbox{background-color:#dae4ed;display:flex}.customCheckbox,.customInput{width:fit-content}");const c=({type:t,id:c,label:n,name:o,disable:a,change:s,check:d})=>e.createElement("div",{className:"customCheckbox"},e.createElement("div",{className:"customInput"},e.createElement("input",{type:t,id:c,name:o,defaultChecked:d})),e.createElement("div",{className:"customInput"},n));c.propTypes={type:t.string,id:t.string,label:t.string,name:t.string,disable:t.bool,change:t.func,check:t.bool};export{c as CustomChecksBox};
