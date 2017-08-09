/*
  vue configuration file
  vue 配置文件
$ git init //初始化
$ git add -all
$ git commit -m 'all'
$ git remote add origin git@github.com:defnngj/hello-world.git //连接远程github项目
$ git push -u origin master //将本地项目更新到github项目上去

*/
$(function () {
  
  "use strict";
  // head nav cont 头部内容
  let headNav = [{
    icon: 'icon-alarm',
    title: 'alarm'
  },
  {
    icon: 'icon-audio',
    title: 'audio'
  },
  {
    icon: 'icon-contacts',
    title: 'contacts'
  },
  {
    icon: 'icon-share',
    title: 'share'
  }
  ];
  let head = new Vue({
    el: '#heads',
    data: {
      title: '王超',
      job: 'web前端',
      logo: '',
      menu: false,
      show: false,
      nav: headNav,
      headImg: 'img/WechatIMG6.jpeg'
    },
    methods: {
      headNavHover: function () {
        this.show = true
      }
    }
  })


  // banner animation banner内容

  let banner = new Vue({
    el: '#banner_box',
    data: {
      text: '主要开发微信公众平台和pc网站，对h5页面制作有很多心得，善于使用动画，页面结构布局良好。精通jquery，正在使用vue，对新技术很有兴趣。性格乐观开朗，乐于助人，能够很好的完成团队中赋予的任务。喜欢想象思考，有自己的见解和创新意识。希望加入一个积极向上、非常有爱的团队。'
    }
  })

  // skills lists 技能列表
  let skills = new Vue({
    el: '#skills',
    data: {
      name: '角色技能',
      skills: {
        top: [{
          name: 'div+css',
          introduction: '被动技能',
          describe:'打怪杀敌之根本',
          value: 95
        },
        {
          name: 'js | Ajax',
          introduction: '主要技能',
          describe:'页面操作，数据获取，路由控制，本地存储，动画特效。最为重要的技能之一',
          value: 80
        },
        {
          name: 'jQuery | Zepot',
          introduction: '主要技能',
          describe:'目前使用最多的js框架，对DOM操作非常出色，链式操作，动画特效支持比较好，扩展插件非常多',
          value: 95
        }
        ],
        bottom: [{
          name: 'vue.js',
          describe: '目前最为流行的js框架之一，是一套构建用户界面的渐进式框架，特点是组件和路由，易上手，对项目有很大提升',
          introduction:'特别技能',
          value: 75
        },
        {
          name: 'html5+css3',
          describe: '主要用于动画，页面特效，本地存储，页面多媒体展示',
          introduction:'特别技能',
          value: 90
        },
        {
          name: 'Echarts swiper等组件',
          introduction: '其他技能',
          describe:'常用的一些js组件',
          value: 85
        }
        ]
      },
      show: {
        describe: '',
        introduction: ''
      },
      showSkills: true,
      showSkillsList: true,
      open: ''
    },
    methods: {
      showSkillsIn: function (describe,cont) {
        this.showSkills = true;
        this.showSkillsList = true;
        this.open = 'open';
        this.show.describe = describe;
        this.show.introduction = cont;
      },
      showSkillsOut: function () {
        this.showSkills = true;
        this.showSkillsList = true;
        this.open = '';
      }
    }
  })
  // works
  let works = new Vue({
    el: '#works',
    data: {
      text: '作品展示',
      img: [{
        name:'99真爱',
        type:'we',
        url: 'img/wechat/WechatIMG12.jpeg',
        erweima:'img/wechat/qrcode_Goldian_99LOVE_1.jpg'
      },
      {
        name:'匠心到家',
        type:'we',
        url: 'img/wechat/WechatIMG11.jpeg',
        erweima:'img/wechat/WechatIMG111.jpeg'
      },
      {
        name:'麦麦提',
        type:'pc',
        url: 'img/pc/WechatIMG18.jpeg',
        link:'https://www.mmtvip.com/'
      },
      {
        name:'人力窝',
        type:'we',
        url: 'img/wechat/WechatIMG15.jpeg',
        erweima:'img/wechat/qrcode_wowoohr_1.jpg'
      },
      {
        name:'青春上海',
        type:'pc',
        url: 'img/pc/WechatIMG19.jpeg',
        link:'http://shyouthact.net/web/index'
      },
      {
        name:'什么值得买',
        type:'pc',
        url: 'img/pc/WechatIMG17.jpeg',
        link:'http://lvyou.smzdm.com/'
      }]
    }
  })
  // footer
  let footer = new Vue({
    el: '#foot',
    data: {
      text: '2017 wan9cha0'
    }
  });
})

// 页面动画

$(document).ready(function () {
  if(IsPC()===false){
    alert('请在pc下浏览')
    window.close()
  }
  setTimeout(function () {
    $('.loader-index').slideUp();
  }, 2000);

  let bannerImg = $('#banner_box');
  let changHead = $('#skills');
  let backHead = $('#restore-head');
  let worksHead = $('.works-list');

  bannerImg.height($(window).height());
  let before = $(window).scrollTop();
  $(window).scroll(function () {
    const after = $(window).scrollTop();
    if (before < after) {
      before = after;
    }
    if (before > after) {
      before = after;
    }
    if (before <= 180) {
      $('.head-logo').removeClass('over');
      $('.banner-sidebar').css({
        'transform': 'rotate(' + (-.5 * before + 90) + 'deg)',
        'opacity': 1 - before / 1000
      });
    } else {
      $('.head-logo').addClass('over');
      $('.banner-sidebar').css('transform', 'rotate(0deg)');
    };
    if (before > (changHead.offset().top - 100) && before < (backHead.offset().top - 50) || before > (worksHead.offset().top - 150)) {
      $('#heads').addClass('change');
    } else if (before > (backHead.offset().top - 50) || before < (changHead.offset().top - 50)) {
      $('#heads').removeClass('change');
    };
    if (before > (changHead.offset().top - 150)) {
      $('.tb-img').find('p').show();
    } else {
      $('.tb-img').find('p').hide();
    };
    $('.banner-text').find('p').css('transform', 'translateY(' + (.8 * before) + 'px)');
    $('.banner-in').css('transform', 'translateY(' + (-.5 * before) + 'px)');
  });

})
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}