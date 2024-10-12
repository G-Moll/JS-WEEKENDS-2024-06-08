function AJAXRequest( method, endpoint, responseAction ) {
	this.method = method;
	this.endpoint = endpoint;

	this.xhr = new XMLHttpRequest();
	this.xhr.open( this.method, this.endpoint, true );
	this.xhr.addEventListener( "load", responseAction );
}

AJAXRequest.prototype.send = function send( payload ) {
	this.xhr.send( payload );
};

AJAXRequest.prototype.setHeader = function setHeader() {
	this.xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
};

export { AJAXRequest };
