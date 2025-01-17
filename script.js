let script = document.createElement("script");
script.defer = true;

if (/Mobile|Android/i.test(navigator.userAgent)) {
	script.src = "./mobile.script.js";
} else {
	script.src = "./desktop.script.js";
}

document.head.appendChild(script);
