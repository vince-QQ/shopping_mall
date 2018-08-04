window.onload = function () {
	var current_index = 0;
	var timer = window.setInterval(autoChange, 3000);
	var button_li = document.getElementById("button").getElementsByTagName("li");
	var pic_li = document.getElementById("focus_pic").getElementsByTagName("li");
	function autoChange() {
		++current_index;
		if (current_index == button_li.length) {
			current_index = 0;
		}
		for (var i = 0; i < button_li.length; i++) {
			if (i == current_index) {
				button_li[i].className = "current";
				pic_li[i].className = "current";
			}
			else {
				button_li[i].className = "but";
				pic_li[i].className = "pic";
			}
			timer = setInterval(autoChange, 3000);
		}
	}
}

$(document).ready(function () {

	$.getJSON("http://yunxtec.com/test/discount.php", function (result) {
		$("#name1").append(result.discount[0].goods);
		$("#price1").append(result.discount[0].price);
		$("#dprice1").append(result.discount[0].dprice);
		$("#img1").attr("src", result.discount[0].img);
		$("#html1").attr("href", result.discount[0].url);

		$("#name2").append(result.discount[1].goods);
		$("#price2").append(result.discount[1].price);
		$("#dprice2").append(result.discount[1].dprice);
		$("#img2").attr("src", result.discount[1].img);
		$("#html2").attr("href", result.discount[1].url);

		$("#name3").append(result.discount[2].goods);
		$("#price3").append(result.discount[2].price);
		$("#dprice3").append(result.discount[2].dprice);
		$("#img3").attr("src", result.discount[2].img);
		$("#html3").attr("href", result.discount[2].url);

		$("#name4").append(result.discount[3].goods);
		$("#price4").append(result.discount[3].price);
		$("#dprice4").append(result.discount[3].dprice);
		$("#img4").attr("src", result.discount[3].img);
		$("#html4").attr("href", result.discount[3].url);
	});
	$.ajax({//利用ajax对json文件进行获取解析
		url: "http://yunxtec.com/test/adlist.php",
		type: "post",
		success: function (result) {

			var data = eval("(" + result + ")");//解析获取的json文件，并对里面的字符串用不同的数组进行存储
			var g = data.adlist;
			var imgname = [];
			var remind = [];
			var urls = [];
			for (var i in g) {
				imgname.push(g[i].img);
				remind.push(g[i].name);
				urls.push(g[i].url);
			}
			var d = document.getElementById("focus_pic");
			var pic_img = d.getElementsByTagName("img");//给图片加上路径
			for (var i in imgname) {
				pic_img[i].src = imgname[i];

			}
			for (var j in remind) {
				pic_img[i].alt = remind[i];
			}
			var urlname = d.getElementsByTagName("a");
			for (var k in urlname) {
				urlname[k].href = urls[k];
			}
		}
	});
});
