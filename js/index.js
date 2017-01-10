$(function() { 
	//搜索切换
	(function() {
		var li = $('#menu li');
		var arrText = [
			'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
			'例如：昌平区育新站龙旗广场2号楼609室',
			'例如：万达影院双人情侣券',
			'例如：东莞出事了，大老虎是谁？',
			'例如：北京初春降雪，天气变幻莫测'
		];

		$('#searchText').attr('placeholder', arrText[0]);

		li.each(function(index) {
			$(this).click(function() {
				li.attr('class', 'gradient');
				$(this).attr('class', 'active');
				$('#searchText').attr('placeholder', arrText[index]);
			});
		});
	})();

	//update文字滚动
	(function() {
		var arrData = [{
			'name': '萱萱',
			'time': 4,
			'title': '那些灿烂华美的瞬间',
			'url': 'http://www.miaov.com/2013/'
		}, {
			'name': '畅畅',
			'time': 5,
			'title': '广东3天抓获涉黄疑犯',
			'url': 'http://www.miaov.com/2013/#curriculum'
		}, {
			'name': '萱萱',
			'time': 6,
			'title': '国台办回应王郁琦',
			'url': 'http://www.miaov.com/2013/#about'
		}, {
			'name': '畅畅',
			'time': 7,
			'title': '那些灿烂华美的瞬间',
			'url': 'http://www.miaov.com/2013/#message'
		}, {
			'name': '萱萱',
			'time': 8,
			'title': '那些灿烂华美的瞬间',
			'url': 'http://www.miaov.com/2013/'
		}, {
			'name': '畅畅',
			'time': 9,
			'title': '广东3天抓获涉黄疑犯',
			'url': 'http://www.miaov.com/2013/#curriculum'
		}, {
			'name': '萱萱',
			'time': 10,
			'title': '国台办回应王郁琦',
			'url': 'http://www.miaov.com/2013/#about'
		}, {
			'name': '畅畅',
			'time': 11,
			'title': '那些灿烂华美的瞬间',
			'url': 'http://www.miaov.com/2013/#message'
		}];
		var div = $('.update');
		var ul = div.find('ul');
		var str = '';
		var arrNum = arrData.length;
		for(var i = 0; i < arrNum; i++) {
			str += '<li><a href="' + arrData[i].url + '"><strong>' + arrData[i].name + '</strong> <span>' + arrData[i].time + '分钟前</span> 写了一篇新文章：' + arrData[i].title + '…</a></li>';
		}
		ul.html(str);

		var lih = ul.find('li').height();
		var liNow = 0;
		var timer = null;
		//		var ulTop = ul.top();
		//		console.log(ulTop);

		function autoPlay() {
			timer = setInterval(function() {
				doMove(-1);
			}, 2000);
		}

		function doMove(num) {
			liNow += num;
			if(Math.abs(liNow) > arrNum - 1) {
				liNow = 0;
			}
			if(liNow > 0) {
				liNow = 1 - arrNum;
			}
			ul.stop().animate({
				top: lih * liNow
			}, 1000, 'elasticOut');
		}

		$('#updateUpBtn').click(function() {
			doMove(1);
		});

		$('#updateDownBtn').click(function() {
			doMove(-1);
		});

		autoPlay();

		div.hover(function() {
			clearInterval(timer);
		}, function() {
			autoPlay();
		});
	})();

	//options 选项卡切换
	(function() {
		tab($('.tabNav1'), $('.tabCon1'), 'click');
		tab($('.tabNav2'), $('.tabCon2'), 'click');
		tab($('.tabNav3'), $('.tabCon3'), 'mouseover');
		tab($('.tabNav4'), $('.tabCon4'), 'mouseover');

		function tab(nav, con, event) {
			var lis = nav.children();
			con.hide().eq(0).show();

			lis.each(function(index) {
				$(this).on(event, function() {
					lis.removeClass('active').addClass('gradient');
					lis.find('a').attr('class', 'triangle_down_gray');
					con.hide().eq(index).show();
					$(this).removeClass('gradient').addClass('active');
					$(this).find('a').attr('class', 'triangle_down_red');
				})
			})
		}
	})();

	//精彩推荐栏焦点图
	(function() {
		var div = $('#fade');
		var ulLiS = div.find('ul li');
		var olLiS = div.find('ol li');
		var p = div.find('p');
		var now = 0;
		var timer = null;

		function fade() {
			ulLiS.fadeOut().css('zIndex', '1');
			ulLiS.eq(now).fadeIn().css('zIndex', '2');
			olLiS.removeClass('active').eq(now).addClass('active');
		}

		function autoPlay() {
			timer = setInterval(function() {
				now++;
				now %= 3;
				fade();
			}, 1000);
		}

		fade();
		autoPlay();

		ulLiS.each(function() {
			$(this).hover(function() {
				clearInterval(timer);
			}, function() {
				autoPlay();
			});
		})

		olLiS.each(function(index) {
			$(this).hover(function() {
				now = index;
				fade();
				clearInterval(timer);
			}, function() {
				autoPlay();
			});
		});
	})();

	(function() {
		var span = $('.calendar h3 span');
		var aImg = $('.calendar .img');
		var prompt = $('.today_info');
		var bImg = prompt.find('img');
		var strong = prompt.find('strong');
		var p = prompt.find('p');

		aImg.hover(function() {
			var top = $(this).parent().position().top - 30;
			var left = $(this).parent().position().left + 55;
			var index = $(this).parent().index() % span.size();

			// console.log( $(this).parent().index()%aSpan.size() );

			prompt.show().css({
				'left': left,
				'top': top
			});
			p.text($(this).attr('info'));
			bImg.attr('src', $(this).attr('src'));
			strong.text(span.eq(index).text());
		}, function() {
			prompt.hide();
		});
	})();

	// BBS高亮显示
	(function() {
		$('.bbs ol li').mouseover(function() {
			$('.bbs ol li').removeClass('active').eq($(this).index()).addClass('active');
		});
	})();
	
	// HOT鼠标提示效果
	(function (){
		var arr = [
			'',
			'用户1<br />人气1',
			'用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
			'用户3<br />人气3',
			'用户4<br />人气4',
			'用户5<br />人气5',
			'用户6<br />人气6',
			'用户7<br />人气7',
			'用户8<br />人气8',
			'用户9<br />人气9',
			'用户10<br />人气10'
		];
		$('.hot_area li').mouseover(function (){
			
			if ( $(this).index() == 0 ) return;
			
			$('.hot_area li p').remove();
			
			$(this).append('<p style="width:'+ ($(this).width()-12) +'px; height:'+ ($(this).height()-12) +'px;">'+ arr[$(this).index()] +'</p>');
		});
	})();
	
})