var form_pics = (function(){
	var fp = function(){
		this.length = 1;
		this.videoLength = 0;
	}

	fp.prototype = {
		addImg: function(thi){
			if(thi.files && thi.files[0]){
				var img = thi.nextSibling;
				
				if(thi.files[0].type.indexOf("video")==-1 ){
					var URL = window.URL||webkitURL;
					var url = URL.createObjectURL(thi.files[0]);
					img.src = url;
					thi.parentNode.setAttribute("type","image");
				}else{
					if(this.videoLength>=1){
						alert("只能上传一个视频", 1000);
						return this;
					}
					img.src = 'data:image/png;base64,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';
					this.videoLength +=1;
					thi.parentNode.setAttribute("type","video");
				}
				
				this.createImgFile(thi);
				this.length ++;
				thi.setAttribute("style","display:none;");
				return this;
			}
		},
		removeImg: function(thi){
			var type = $(thi).closest("dd").remove().attr("type");
			if("video" == type ){
				this.videoLength -=1;
			}
			this.createImgFile(thi);
			this.length --;
			return this;
		},
		createImgFile: function(thi){
			if(this.length>8){
				this.length = 8;
				return this;
			}
			var TPL = '<dd><input type="file" accept="image/jpg, image/jpeg, image/png, video/*"  onchange="form_pics.addImg(this);" name="pics[]" /><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" />\
							<span onclick="form_pics.removeImg(this);">&nbsp;</span></dd><dt>\
								<label>最多可上传8张图片</label>\
							</dt>';
			$(thi).closest("dl").append($(TPL) );
			return this;
		}
	}

	return new fp();
})();