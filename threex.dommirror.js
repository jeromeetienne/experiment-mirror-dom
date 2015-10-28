var THREEx	= THREEx || {}

THREEx.DomMirror	= function(){}

////////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////////

THREEx.DomMirror.domEqual	= function(srcElement, domElement2){
	return dstElement.innerHTML === srcElement.innerHTML;
}

////////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////////

THREEx.DomMirror.copyDomByInnerHTML	= function(srcElement, dstElement){
	dstElement.innerHTML = srcElement.innerHTML;
	
	// destination should be readyonly, no scrolling, and no selections.
	dstElement.style.pointerEvents = 'none';
	dstElement.style.overflow = 'hidden';
	dstElement.style.userSelect = 'none';
}


////////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////////

THREEx.DomMirror.emptyDomElement	= function(domElement){
	while( domElement.firstChild ){
		domElement.removeChild(domElement.firstChild);
	}
}

////////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////////

THREEx.DomMirror.fillWithRandomDomElements	= function(container, nElements){
	nElements = nElements !== undefined ? nElements : 10;

	var elementCount = 0;

	for(var i = 0; i < nElements; i++){
		// create new element
		var elementIdx = elementCount++
		var newElement = document.createElement('ul')
		newElement.innerHTML = '<li>element_'+elementCount+'</li>'
		newElement.classList.add('random_'+elementIdx)
		// get parentElement
		var parentIdx = Math.floor(Math.random() * (i === 0 ? 0 : i-1))
		if( parentIdx > 0 ){
			var parentElement = container.querySelector('.random_'+parentIdx)
		}else{
			var parentElement = container						
		}
		
		// attach newElement to its parent
		parentElement.appendChild(newElement)
	}
}

