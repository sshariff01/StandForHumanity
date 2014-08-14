var AttachStyleEnum = {
	AttachOuterTopLeft: 0,
	AttachOuterTopRight: 1,
	AttachOuterBottomLeft: 2,
	AttachOuterBottomRight: 3,
	AttachInnerTopLeft: 4,
	AttachInnerTopRight: 5,
	AttachInnerBottomLeft: 6,
	AttachInnerBottomRight: 7
}
// 这里加上了命名空间，回调函数中的变量直接使用ISFunction.这种方式来读取的，其余使用this.读取。
var ISFunction = {
	// variants
	attachButtonList: [],
	isInitialAdjustPos: false,

	timeout: 500,
	closetimer: 0,
	ddmenuitem: 0,

	timeoutHandle: null,

	onShowElement: null,
	onDelayHideElement: null,

	// functions
	newGuid: function() {
		var guid = "";
		for (var i = 1; i < 32; i++) {
			var n = Math.floor(Math.random() * 16.0).toString(16);
			guid += n;
			if ((i == 8) || (i == 12) || (i == 16) || (i == 20)) guid += "-";
		}
		return guid;
	},

	getPreviousSibling: function(n) {
		var x = n.previousSibling;
		while (x.nodeType != 1)
		{
			x = x.previousSibling;
		}
		return x;
	},

	// 获取元素实际显示的位置
	getElementPos: function(el) {
		var ua = navigator.userAgent.toLowerCase();
	    var isOpera = (ua.indexOf('opera') != -1);
	    var isIE = (ua.indexOf('msie') != -1 && !isOpera); // not opera spoof
	    if (el.parentNode === null || (el.style != null && el.style.display == 'none')) {
	        return false;
	    }
	    var parent = null;
	    var pos = [];
	    var box;
	    if (el.getBoundingClientRect) // IE
	    {
	        box = el.getBoundingClientRect();
	        var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
	        var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
	        return {
	            x: box.left + scrollLeft,
	            y: box.top + scrollTop
	        };
	    } else if (document.getBoxObjectFor) // gecko
	    {
	        box = document.getBoxObjectFor(el);
	        var borderLeft = (el.style.borderLeftWidth) ? parseInt(el.style.borderLeftWidth) : 0;
	        var borderTop = (el.style.borderTopWidth) ? parseInt(el.style.borderTopWidth) : 0;
	        pos = [box.x - borderLeft, box.y - borderTop];
	    } else // safari & opera
	    {
	        pos = [el.offsetLeft, el.offsetTop];
	        parent = el.offsetParent;
	        if (parent != el) {
	            while (parent) {
	            	//console.log(parent.class);
	                pos[0] += parent.offsetLeft;
	                pos[1] += parent.offsetTop;
	                parent = parent.offsetParent;
	            }
	        }
	        if (ua.indexOf('opera') != -1 || (ua.indexOf('safari') != -1 && (el.style != null && el.style.position == 'absolute'))) {
	            pos[0] -= document.body.offsetLeft;
	            pos[1] -= document.body.offsetTop;
	        }
	    }
	    if (el.parentNode) {
	        parent = el.parentNode;
	    } else {
	        parent = null;
	    }
	    while (parent && parent.tagName != 'BODY' && parent.tagName != 'HTML') { // account for any scrolled ancestors
	        pos[0] -= parent.scrollLeft;
	        pos[1] -= parent.scrollTop;
	        if (parent.parentNode) {
	            parent = parent.parentNode;
	        } else {
	            parent = null;
	        }
	    }
	    return {
	        x: pos[0],
	        y: pos[1]
	    };
	},
	/*
	getElementLeft: function(element) {
		var actualLeft = element.offsetLeft;
		var current = element.offsetParent;

		while (current !== null){
			actualLeft += current.offsetLeft;
			current = current.offsetParent;
		}

		return actualLeft;
	},

	getElementTop: function(element) {
		var actualTop = element.offsetTop;
		var current = element.offsetParent;

		while (current !== null){
			actualTop += current.offsetTop;
			current = current.offsetParent;
		}

		return actualTop;
	},
	*/

	// 判断元素是否显示(可能不能跨浏览器)
	isVisible: function(element) {
		return (element.clientHeight > 0 || element.clientWidth > 0);
	},

	// 计算附加按钮的位置
	calculateButtonPos: function(attachedElement, buttonDiv, attachStyle) {
		// alter the button's position
		var btnWidth = buttonDiv.offsetWidth;
		var btnHeight = buttonDiv.offsetHeight;
		var pos = this.getElementPos(attachedElement);
		var beforeChildLeft = pos.x;
		var beforeChildTop = pos.y;
		var divLeft = 0;
		var divTop = 0;
		switch (attachStyle)
		{
			case AttachStyleEnum.AttachOuterTopLeft:
			{
				divLeft = beforeChildLeft;
				divTop = beforeChildTop - btnHeight;
				break;
			}
			case AttachStyleEnum.AttachOuterTopRight:
			{
				divLeft = beforeChildLeft + attachedElement.offsetWidth - btnWidth;
				divTop = beforeChildTop - btnHeight;
				break;
			}
			case AttachStyleEnum.AttachOuterBottomLeft:
			{
				divLeft = beforeChildLeft;
				divTop = beforeChildTop + attachedElement.offsetHeight;
				break;
			}
			case AttachStyleEnum.AttachOuterBottomRight:
			{
				divLeft = beforeChildLeft + attachedElement.offsetWidth - btnWidth;
				divTop = beforeChildTop + attachedElement.offsetHeight;
				break;
			}
			case AttachStyleEnum.AttachInnerTopLeft:
			{
				divLeft = beforeChildLeft;
				divTop = beforeChildTop;
				break;
			}
			case AttachStyleEnum.AttachInnerTopRight:
			{
				divLeft = beforeChildLeft + attachedElement.offsetWidth - btnWidth;
				divTop = beforeChildTop;
				break;
			}
			case AttachStyleEnum.AttachInnerBottomLeft:
			{
				divLeft = beforeChildLeft;
				divTop = beforeChildTop + attachedElement.offsetHeight - btnHeight;
				break;
			}
			case AttachStyleEnum.AttachInnerBottomRight:
			{
				divLeft = beforeChildLeft + attachedElement.offsetWidth - btnWidth;
				divTop = beforeChildTop + attachedElement.offsetHeight - btnHeight;
				break;
			}
		}
		return {
					x: divLeft,
					y: divTop
				};
	},

	// 获取附加按钮
	getButtonElement: function(attachedElement) {
		for (var i = 0; i < ISFunction.attachButtonList.length; i++) {
			if (attachedElement == ISFunction.attachButtonList[i].attachedElement) return WSFuntion.attachButtonList[i].buttonDiv;
		}
	},

	// 调整按钮的位置
	adjustAttachButtonPos: function() {
		for (var i = 0; i < ISFunction.attachButtonList.length; i++) {
			attachedElement = ISFunction.attachButtonList[i].attachedElement;
			buttonDiv = ISFunction.attachButtonList[i].buttonDiv;
			attachStyle = ISFunction.attachButtonList[i].attachStyle;

			var divPos = ISFunction.calculateButtonPos(attachedElement, buttonDiv, attachStyle);
			buttonDiv.style.left = divPos.x.toString() + 'px';
			buttonDiv.style.top = divPos.y.toString() + 'px';
		}
	},

	// 删除附加的按钮
	deleteAttachedButton: function(button) {
		for (var i = 0; i < ISFunction.attachButtonList.length; i++) {
			if (ISFunction.attachButtonList[i].buttonDiv === button) {
				ISFunction.attachButtonList.splice(i, 1);
				document.body.removeChild(button);
				break;
			}
		}
	},


	// 附加按钮
	attachButtonDiv: function(attachedElement, attachStyle, buttonCaption, buttonLink, divId, buttonId) {
		// Create div element
		if (!attachedElement) return;
		var downloadDiv = document.createElement("div");
		downloadDiv.setAttribute("style", "z-index: 2147483647; background: transparent; position: absolute;");
		if (divId)	downloadDiv.setAttribute("id", divId);

		downloadDiv.style.visibility = 'hidden';

		// Create button element
		var btnDownload = document.createElement("a");
		btnDownload.setAttribute("class", "fantasybutton");
		//btnDownload.setAttribute("href", "javascript:void(0);");
		//btnDownload.addEventListener("click", function(){ this.blur(); if (buttonLink) location.href = buttonLink; downloadDiv.style.visibility = 'hidden'; return false; });
		btnDownload.setAttribute("onclick", 'ISFunction.test("' + buttonLink + '");');
		btnDownload.style.cursor = "pointer";
		var btnText = document.createElement("span");
		if (buttonCaption) btnText.innerHTML = buttonCaption;
		btnDownload.appendChild(btnText);

		downloadDiv.appendChild(btnDownload);
		var body = document.body;
		body.insertBefore(downloadDiv, body.lastChild);

		var divPos = this.calculateButtonPos(attachedElement, downloadDiv, attachStyle);

		downloadDiv.style.left = divPos.x.toString() + 'px';
		downloadDiv.style.top = divPos.y.toString() + 'px';

		// initial onresize event
		if (!this.isInitialAdjustPos) {
			window.addEventListener("resize", ISFunction.adjustAttachButtonPos, false);
			//window.addEventListener("DOMNodeInserted", ISFunction.adjustAttachButtonPos, false);
			this.isInitialAdjustPos = true;
		}

		// push attachButtonInfo into attachButtonList
		var attachButtonInfo = {attachedElement: attachedElement, buttonDiv: downloadDiv, attachStyle: attachStyle};
		ISFunction.attachButtonList.push(attachButtonInfo);

		return downloadDiv;
	},


	attachButtonDiv1: function(attachedElement, attachStyle, buttonCaption, buttonLink, divId, buttonId) {
		// Create div element
		if (!attachedElement) return;
		var downloadDiv = document.createElement("div");
		downloadDiv.setAttribute("style", "z-index: 2147483647; background: transparent; position: absolute;");
		if (divId)	downloadDiv.setAttribute("id", divId);

		downloadDiv.style.visibility = 'hidden';

		// Create button element
		var btnDownload = document.createElement("a");
		btnDownload.setAttribute("class", "fantasybutton");
		btnDownload.setAttribute("href", "javascript:void(0);");
		btnDownload.addEventListener("click", function(){ this.blur(); if (buttonLink) location.href = buttonLink; downloadDiv.style.visibility = 'hidden'; return false; });
	//	btnDownload.setAttribute("onclick", 'ISFunction.test("' + buttonLink + '");');
		btnDownload.style.cursor = "pointer";
		var btnText = document.createElement("span");
		if (buttonCaption) btnText.innerHTML = buttonCaption;
		btnDownload.appendChild(btnText);

		downloadDiv.appendChild(btnDownload);
		var body = document.body;
		body.insertBefore(downloadDiv, body.lastChild);

		var divPos = this.calculateButtonPos(attachedElement, downloadDiv, attachStyle);

		downloadDiv.style.left = divPos.x.toString() + 'px';
		downloadDiv.style.top = divPos.y.toString() + 'px';

		// initial onresize event
		if (!this.isInitialAdjustPos) {
			window.addEventListener("resize", ISFunction.adjustAttachButtonPos, false);
			//window.addEventListener("DOMNodeInserted", ISFunction.adjustAttachButtonPos, false);
			this.isInitialAdjustPos = true;
		}

		// push attachButtonInfo into attachButtonList
		var attachButtonInfo = {attachedElement: attachedElement, buttonDiv: downloadDiv, attachStyle: attachStyle};
		ISFunction.attachButtonList.push(attachButtonInfo);

		return downloadDiv;
	},

	// 下拉菜单相关
	//////////////////// dropdown menu global variants and functions ////////////////////

	// open hidden layer
	mopen: function(id) {
		// cancel close timer
		ISFunction.mcancelclosetime();

		// close old layer
		if (ISFunction.ddmenuitem) ISFunction.ddmenuitem.style.visibility = 'hidden';

		// get new layer and show it
		ISFunction.ddmenuitem = document.getElementById(id);
		if (ISFunction.ddmenuitem)
		{
			ISFunction.ddmenuitem.style.visibility = 'visible';
		}
	},

	// close showed layer
	mclose: function() {
		if (ISFunction.ddmenuitem) ISFunction.ddmenuitem.style.visibility = 'hidden';
	},

	// go close timer
	mclosetime: function() {
		ISFunction.closetimer = window.setTimeout(ISFunction.mclose, ISFunction.timeout);
	},

	// cancel close timer
	mcancelclosetime: function() {
		if (ISFunction.closetimer) {
			window.clearTimeout(ISFunction.closetimer);
			ISFunction.closetimer = null;
		}
	},

	// 附加下拉按钮菜单
/*	attachDropdownMenu: function(attachedElement, attachStyle, buttonCaption, itemArray, divId, buttonId) {
		// Create div element
		if (!attachedElement || !itemArray) return;
		var downloadDiv = document.createElement("div");
		downloadDiv.setAttribute("style", "z-index: 2147483647; background: transparent; position: absolute;");
		if (divId)	downloadDiv.setAttribute("id", divId);

		downloadDiv.style.visibility = 'hidden';

		// Create menu element
		var ulElement = document.createElement("ul");
		ulElement.setAttribute("id", "mytubem");
		var liElement = document.createElement("li");
		ulElement.appendChild(liElement);
		var btnElement = document.createElement("a");
		btnElement.setAttribute("href", "javascript:void(0);");
		btnElement.setAttribute("class", "fantasybutton");
		if (buttonCaption) btnElement.innerHTML = buttonCaption;
		// tag a addEventListener
		var guid = this.newGuid();
		btnElement.addEventListener("click", function() { this.blur(); ISFunction.mopen(guid); return false; }, false);
		btnElement.addEventListener("mouseover", function() { ISFunction.mcancelclosetime() }, false);
		btnElement.addEventListener("mouseout", function() { ISFunction.mclosetime() }, false);
		liElement.appendChild(btnElement);
		var divMenu = document.createElement("div");
		divMenu.setAttribute("id", guid);
		// tag div addEventListener
		divMenu.addEventListener("mouseover", function() { ISFunction.mcancelclosetime() }, false);
		divMenu.addEventListener("mouseout", function() { ISFunction.mclosetime() }, false);

		liElement.appendChild(divMenu);

		for (var i = 0; i < itemArray.length; i++) {
			var url = itemArray[i][1] ? itemArray[i][1] : "#";
			var aItem = document.createElement("a");
			aItem.setAttribute("href", url);
		//	aItem.setAttribute("target", "_blank");
		    aItem.setAttribute("target", "_parent");
		    aItem.addEventListener("click", function() { ISFunction.mclose(); downloadDiv.style.visibility = 'hidden';  }, false);
			aItem.style.cursor = "pointer";
			aItem.innerHTML = itemArray[i][0];
			divMenu.appendChild(aItem);
		}

		downloadDiv.appendChild(ulElement);
		var body = document.body;
		body.insertBefore(downloadDiv, body.lastChild);

		var divPos = this.calculateButtonPos(attachedElement, downloadDiv, attachStyle);

		downloadDiv.style.left = divPos.x.toString() + 'px';
		downloadDiv.style.top = divPos.y.toString() + 'px';

		// initial onresize event
		if (!this.isInitialAdjustPos) {
			window.addEventListener("resize", ISFunction.adjustAttachButtonPos, false);
			//window.addEventListener("DOMNodeInserted", ISFunction.adjustAttachButtonPos, false);
			this.isInitialAdjustPos = true;
		}

		// push attachButtonInfo into attachButtonList
		var attachButtonInfo = {attachedElement: attachedElement, buttonDiv: downloadDiv, attachStyle: attachStyle};
		ISFunction.attachButtonList.push(attachButtonInfo);

		return downloadDiv;
	},
*/
	showElement: function(tipElement) {
		if (ISFunction.timeoutHandle) clearTimeout(this.timeoutHandle);
		if (tipElement) {
			tipElement.style.visibility = "visible";
		}
	},

	openExternalLink: function(url) {
		var strScript = '<script>' + 'function closeMyWindow(){window.close()}location.href="' + url + '";window.setTimeout(closeMyWindow, 50);' + '\</script\>';
	    // var strScript = '<script>' + 'function closeMyWindow(){window.close()} window.setTimeout(closeMyWindow, 5);' + '\</script\>';
		myWindow1 = window.open('', "_blank", '');
		myWindow1.document.open('text/html', 'replace');
		myWindow1.document.write(strScript);
		myWindow1.document.close();
		window.focus();
	},

	test: function(url) {
		ISFunction.openExternalLink(url); ISFunction.mclose();
		//downloadDiv.style.visibility = 'hidden';
	},

	attachDropdownMenu: function(attachedElement, attachStyle, buttonCaption, itemArray, divId, buttonId) {
		// Create div element
		if (!attachedElement || !itemArray) return;
		var downloadDiv = document.createElement("div");
		downloadDiv.setAttribute("style", "z-index: 2147483647; background: transparent; position: absolute;");
		if (divId)	downloadDiv.setAttribute("id", divId);

		downloadDiv.style.visibility = 'hidden';

		// Create menu element
		var ulElement = document.createElement("ul");
		ulElement.setAttribute("id", "mytubem");
		var liElement = document.createElement("li");
		ulElement.appendChild(liElement);
		var btnElement = document.createElement("a");
		btnElement.setAttribute("href", "javascript:void(0);");
		btnElement.setAttribute("class", "fantasybutton");
		if (buttonCaption) btnElement.innerHTML = buttonCaption;
		// tag a addEventListener
		var guid = this.newGuid();
		btnElement.addEventListener("click", function() { this.blur(); ISFunction.mopen(guid); return false; }, false);
		btnElement.addEventListener("mouseover", function() { ISFunction.mcancelclosetime() }, false);
		btnElement.addEventListener("mouseout", function() { ISFunction.mclosetime() }, false);

		liElement.appendChild(btnElement);
		var divMenu = document.createElement("div");
		divMenu.setAttribute("id", guid);
		// tag div addEventListener
		divMenu.addEventListener("mouseover", function() { ISFunction.mcancelclosetime() }, false);
		divMenu.addEventListener("mouseout", function() { ISFunction.mclosetime() }, false);

		liElement.appendChild(divMenu);
		for (var i = 0; i < itemArray.length; i++) {
			var url = itemArray[i][1] ? itemArray[i][1] : "#";
			aItem = document.createElement("a");
		   // aItem.setAttribute("href", url);
			//aItem.setAttribute("onclick", 'ISFunction.test("' + url + i + '");');
			aItem.setAttribute("onclick", 'ISFunction.test("' + url + '");');
			aItem.style.cursor = "pointer";
			aItem.innerHTML = itemArray[i][0];
			divMenu.appendChild(aItem);
		}

		downloadDiv.appendChild(ulElement);
		var body = document.body;
		body.insertBefore(downloadDiv, body.lastChild);

		var divPos = this.calculateButtonPos(attachedElement, downloadDiv, attachStyle);

		downloadDiv.style.left = divPos.x.toString() + 'px';
		downloadDiv.style.top = divPos.y.toString() + 'px';

		// initial onresize event
		if (!this.isInitialAdjustPos) {
			window.addEventListener("resize", ISFunction.adjustAttachButtonPos, false);
			//window.addEventListener("DOMNodeInserted", ISFunction.adjustAttachButtonPos, false);
			this.isInitialAdjustPos = true;
		}

		// push attachButtonInfo into attachButtonList
		var attachButtonInfo = {attachedElement: attachedElement, buttonDiv: downloadDiv, attachStyle: attachStyle};
		ISFunction.attachButtonList.push(attachButtonInfo);

		return downloadDiv;
	},

	hideElement: function(tipElement) {
		if (ISFunction.timeoutHandle) clearTimeout(this.timeoutHandle);
		if (tipElement) {
			tipElement.style.visibility = "hidden";
		}
	},

	delayHideElement: function(tipElement) {
		ISFunction.timeoutHandle = setTimeout(function() { ISFunction.hideElement(tipElement) }, 500);
	},

	// 绑定鼠标经过事件
	bind_mouseover: function(divElement, tipElement) {
		if (typeof(divElement) == "string") {
			divElement = document.getElementById(divElement);
			tipElement = document.getElementById(tipElement);
		}
		if (divElement == null || tipElement == null)
			return;

		divElement.addEventListener("mouseover", this.onShowElement = function() { ISFunction.adjustAttachButtonPos(); ISFunction.showElement(tipElement); }, false);
		divElement.addEventListener("mouseout", this.onDelayHideElement = function() { ISFunction.delayHideElement(tipElement); }, false);

		tipElement.addEventListener("mouseover", function() { ISFunction.showElement(tipElement); }, false);
		tipElement.addEventListener("mouseout", function() { ISFunction.delayHideElement(tipElement); }, false);
	},

	// 取消绑定鼠标经过事件
	unbind_mouseover: function(divElement, tipElement) {
		if (typeof(divElement) == "string") {
			divElement = document.getElementById(divElement);
			tipElement = document.getElementById(tipElement);
		}

		if (this.onShowElement && divElement) {
			divElement.removeEventListener("mouseover", ISFunction.onShowElement, false);
		}
		if (this.onDelayHideElement && divElement) {
			divElement.removeEventListener("mouseout", ISFunction.onDelayHideElement, false);
		}

		if (this.onShowElement && tipElement) {
			tipElement.removeEventListener("mouseover", ISFunction.onShowElement, false);
		}
		if (this.onDelayHideElement && tipElement) {
			tipElement.removeEventListener("mouseout", ISFunction.onDelayHideElement, false);
		}
	}
};