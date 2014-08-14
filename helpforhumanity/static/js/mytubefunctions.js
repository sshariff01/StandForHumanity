var ISMyTubeFunction = {
	// 提取Flash的参数
	extractFlashvars: function(node) {
		var element = node;
		if (element === undefined || (typeof(element) != "object" && typeof(element) != "function")) {
			element = document;
		}
		var objectLists;
		if (element instanceof HTMLObjectElement) {
			objectLists = [];
			objectLists.push(element);
		}
		else {
			objectLists = element.getElementsByTagName("object");
		}
		var flashvars = null;
		for (var i = 0; i < objectLists.length; i++) {
			paramLists = objectLists[i].childNodes;
			for (var j = 0; j < paramLists.length; j++) {
				if (paramLists[j].nodeType != Node.ELEMENT_NODE) continue;
				var tempVars = paramLists[j].getAttribute("name");
				if (tempVars == "flashvars") {
					flashvars = paramLists[j].getAttribute("value");
					break;
				}
			}
			if (flashvars) break;
		}

		if (!flashvars) {
			var embedLists;
			if (element instanceof HTMLObjectElement) {
				embedLists = [];
				embedLists.push(element);
			}
			else {
				embedLists = element.getElementsByTagName("embed");
			}
			for (var i = 0; i < embedLists.length; i++) {
				flashvars = embedLists[i].getAttribute("flashvars");
				if (flashvars) break;
			}
		}

		return flashvars;
	},

	// 提取Flash参数数组
	extractFlashvarsArr: function(node) {
		var element = node;
		if (element === undefined || (typeof(element) != "object" && typeof(element) != "function")) {
			element = document;
		}
		var objectLists = element.getElementsByTagName("object");
		var flashvars = new Array();
		for (var i = 0; i < objectLists.length; i++) {
			paramLists = objectLists[i].childNodes;
			for (var j = 0; j < paramLists.length; j++) {
				if (paramLists[j].nodeType != Node.ELEMENT_NODE) continue;
				var tempVars = paramLists[j].getAttribute("name");
				if (tempVars == "flashvars") {
					flashvars.push(paramLists[j].getAttribute("value"));
					break;
				}
			}
		}

		if (flashvars.length <= 0) {
			var embedLists = element.getElementsByTagName("embed");
			for (var i = 0; i < embedLists.length; i++) {
				flashvars.push(embedLists[i].getAttribute("flashvars"));
			}
		}

		return flashvars;
	},

	// 提取Flash播放参数
	extractFlashSrc: function(node) {
		// 提取Flash的地址与参数
		if (node == undefined ||(typeof(node) != "object" && typeof(node) != "function")) node = document;
		var flashNode = node.getElementsByTagName("object");
		var src, flashvars;
		if (flashNode && flashNode.length > 0) {
			var isFindVisibleNode = false;
			for (var i = 0; i < flashNode.length; i++) {
				if (ISFunction.isVisible(flashNode[i])) {
					flashNode = flashNode[i];
					isFindVisibleNode = true;
					break;
				}
			}
			if (isFindVisibleNode) {
				var objectParams = flashNode.childNodes;
				for (var i = 0; i < objectParams.length; i++) {
					if (objectParams[i].nodeType != Node.ELEMENT_NODE) continue;
					var tempVars = objectParams[i].getAttribute("name");
					if (tempVars == "flashvars") {
						flashvars = objectParams[i].getAttribute("value");
						break;
					}
				}
				src = flashNode.getAttribute("data");
			}
		}

		if (!isFindVisibleNode) {
			flashNode = node.getElementsByTagName("embed");
			if (flashNode) {
				var isFindVisibleNode = false;
				for (var i = 0; i < flashNode.length; i++) {
					if (ISFunction.isVisible(flashNode[i])) {
						flashNode = flashNode[i];
						isFindVisibleNode = true;
						break;
					}
				}
				if (!isFindVisibleNode) return;

				src = flashNode.getAttribute("src");
				flashvars = flashNode.getAttribute("flashvars");
			}
		}

		if ((src && src.length > 0) && (flashvars && flashvars.length > 0)) {
			src += "?" + flashvars;
		}
		return src;
	},

	// 提取Flash元素
	extractFlashElement: function(node) {
		// 提取Flash的地址与参数
		if (node == undefined || (typeof(node) != "object" && typeof(node) != "function")) node = document;
		var flashNode = node.getElementsByTagName("object");
		if (flashNode && flashNode.length > 0) {
			var isFindVisibleNode = false;
			for (var i = 0; i < flashNode.length; i++) {
				if (ISFunction.isVisible(flashNode[i])) {
					flashNode = flashNode[i];
					isFindVisibleNode = true;
					break;
				}
			}
		}

		if (!isFindVisibleNode) {
			flashNode = node.getElementsByTagName("embed");
			if (flashNode) {
				var isFindVisibleNode = false;
				for (var i = 0; i < flashNode.length; i++) {
					if (ISFunction.isVisible(flashNode[i])) {
						flashNode = flashNode[i];
						isFindVisibleNode = true;
						break;
					}
				}
				if (!isFindVisibleNode) return;
			}
		}

		return flashNode;
	},

	// 获取网页标题
	getWebTitle: function() {
		kdocTitle = document.title;	// 标题
		if (kdocTitle == null) {
			var t_titles = document.getElementsByTagName("title");
			if (t_titles && t_titles.length > 0)
			{
				kdocTitle = t_titles[0];
			}else {
				kdocTitle = "";
			}
		}
		return kdocTitle;
	},

	// 生成WSYTD链接
	generateWSYTDUrl: function(videoURL, videoPageURL, videoTitle) {
			var separator = "-WS-GUES-";
			var wsytdURL = "";
			if (videoURL.length <= 0) {
				// 动态分析只需要视频页面地址即可,直接返回
				wsytdURL += videoPageURL;
                wsytdURL = "isytd://" + wsytdURL;
                return wsytdURL;
			}
			else {
				// 静态分析需要视频真实下载地址、视频页面地址、视频名称
				wsytdURL += videoURL;
				wsytdURL += separator;
				wsytdURL += videoPageURL;
				wsytdURL += separator;
				if (!videoTitle) {
					wsytdURL += ' '
				}
				else {
					wsytdURL += videoTitle;
				}
			}

			// 将http://中的:替换为%3A以便支持主程序
			var colonPos = wsytdURL.indexOf(':');
			if (colonPos == -1) {
				return null;
			}
			wsytdURL = wsytdURL.substring(0, colonPos) + ":" + wsytdURL.substring(colonPos + 1, wsytdURL.length);
			//wsytdURL = wsytdURL.replace(/\ /g, "%20");
		    //wsytdURL = wsytdURL.replace(/"/g, "%22");
		    //wsytdURL = escape(wsytdURL);
		    wsytdURL = encodeURIComponent(wsytdURL);
			wsytdURL = "isytd://" + wsytdURL;

			return wsytdURL;
	},

	// 生成WSYTD链接
	getWSYTDUrl: function(videoURL) {
		var videoPageURL = window.location.href;
		var videoTitle = this.getWebTitle();

		var wsytdURL;
		if (typeof(videoURL) == "string") {
			// 单个视频地址直接返回字符串
			wsytdURL = this.generateWSYTDUrl(videoURL, videoPageURL, videoTitle);
		}
		else if (typeof(videoURL) == "object" && videoURL.length) {
			// 多个视频地址返回字符串数组
			if (videoURL.length > 1) {
				wsytdURL = [];
				for (var i = 0; i < videoURL.length; i++) {
					wsytdURL.push([videoURL[i][0], this.generateWSYTDUrl(videoURL[i][1], videoPageURL, videoTitle)]);
				}
			}
			else
			{
				wsytdURL = this.generateWSYTDUrl(videoURL[0][1], videoPageURL, videoTitle);
			}
		}
		else {
			// 没有获取到视频地址则返回页面地址供主程序进行动态分析
			wsytdURL = this.generateWSYTDUrl("", videoPageURL, "");
		}

		return wsytdURL;
	}
};