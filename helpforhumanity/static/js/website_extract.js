// funnyordie.com
var ISTube = {};

 (function() {

	var videoURL;

   var testDownload;

   function htmlFive(element)
    {
	      videoURL = document.location.href;
	      var url = videoURL;
	      if(url.indexOf("vimeo.com") != -1 && isHTML5 == true)
	      {
		     vplayerDiv = element.parentNode.parentNode.parentNode;
		     vbtnDownload = ISFunction.attachButtonDiv(vplayerDiv, AttachStyleEnum.AttachOuterTopLeft, "", "isytd://" + videoURL);
		     ISFunction.bind_mouseover(vplayerDiv, vbtnDownload);
	      }
    }


    function handleMouseoverEvent(event) {


            if (event.target instanceof HTMLEmbedElement || event.target instanceof HTMLObjectElement || event.target instanceof HTMLIFrameElement || event.target instanceof HTMLVideoElement) {
                // 233/1397 的 比 例 是 为 了 过 滤 掉 veoh 网 站 的 一 个 高 宽 比 为233/1397 的 flash
				var flash = event.target;
                if (flash.offsetHeight > 180 && flash.offsetWidth > 160 && (flash.offsetHeight / flash.offsetWidth > 255 / 960 && flash.offsetHeight / flash.offsetWidth < 1.2))
                {
					if (testDownload) {
						ISFunction.unbind_mouseover(playerDiv111, testDownload);
		                ISFunction.deleteAttachedButton(testDownload);
						playerDiv111 = null;
		                testDownload = null;
					}
	                videoURL = document.location.href;
	                console.log(videoURL);
	                console.log(flash);
                    testDownload = ISFunction.attachButtonDiv(event.target, AttachStyleEnum.AttachOuterTopLeft, "", "isytd://" + videoURL);

                    playerDiv111 = event.target.parentNode;
                    if (playerDiv111 instanceof HTMLObjectElement || playerDiv111 instanceof HTMLEmbedElement)
                    {
                        playerDiv111 = playerDiv111.parentNode;
                    }
                    ISFunction.bind_mouseover(playerDiv111, testDownload);
                    ISFunction.showElement(testDownload);
                }


            }

    }

    function handleBeforeLoadEvent(event)
    {
	      element = event.target;
	      isHTML5 = element instanceof HTMLVideoElement
	      htmlFive(element);

    }

    var htmlSource = document.getElementsByTagName("html")[0].innerHTML;
    var vhtml = htmlSource.search("Switch to Flash player") != -1;
    var whtml = htmlSource.search("Switch to Flash Player") != -1;
    var isHTML5 = false;

    if(vhtml || whtml)
    {
        document.addEventListener("beforeload", handleBeforeLoadEvent, true);
    }
    else
    {
        document.addEventListener("mouseover", handleMouseoverEvent, false);
    }

})();