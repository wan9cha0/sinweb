/*
  vue configuration file
  vue 配置文件


*/
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
        title: 'wishuice',
        logo: '',
        menu: false,
        show: false,
        nav: headNav,
        headImg: 'img/head.jpeg'
    },
    methods: {
        headNavHover: function() {
            this.show = true
        }
    }
})


// banner animation banner内容

let banner = new Vue({
    el: '#banner_box',
    data: {
        text: "A simple introduction to the English.A simple introduction to the English.A simple introduction to the English.A simple introduction to the English."
    }
})

// skills lists 技能列表
let skills = new Vue({
    el: '#skills',
    data: {
        name: 'zhegeshigesha',
        skills: [{
                name: 'A',
                value: 90
            },
            {
                name: 'B',
                value: 80
            },
            {
                name: 'C',
                value: 95
            },
            {
                name: 'D',
                value: 70
            },
            {
                name: 'E',
                value: 75
            },
            {
                name: 'F',
                value: 85
            },
        ]
    }
})
// works
let works = new Vue({
  el:'#works',
  data:{
    text:'This is a list of works,This is a list of works,This is a list of works',
    img:[
      {url:'img/works/works01.png',size:'big'},
      {url:'img/works/works04.png',size:'middle'},
      {url:'img/works/works02.png',size:'big'},
      {url:'img/works/works09.png',size:'small'},
      {url:'img/works/works05.png',size:'middle'},
      {url:'img/works/works03.png',size:'big'},
      {url:'img/works/works07.png',size:'middle'},
      {url:'img/works/works06.png',size:'middle'},
      {url:'img/works/works08.png',size:'small'},
    ]
  }
})
// footer
let footer = new Vue({
  el:'#foot',
  data:{
    text:'2017 wan9cha0'
  }
})
// 页面动画
let bannerImg = $('#banner_box');
let changHead = $('#skills');
let backHead = $('#restore-head');
let worksHead = $('.works-list');
$(document).ready(function() {
    bannerImg.height($(window).height());
    let before = $(window).scrollTop();
    $(window).scroll(function() {
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
        if (before > (changHead.offset().top - 150) && before < (backHead.offset().top - 150) || before > (worksHead.offset().top - 150)) {
            $('#heads').addClass('change');
        } else if (before > (backHead.offset().top - 150) || before < (changHead.offset().top - 150) ) {
            $('#heads').removeClass('change');
        };
        if(before > (changHead.offset().top - 150)){
          $('.tb-img').find('p').show();
        }else{
          $('.tb-img').find('p').hide();
        };
        $('.banner-text').find('p').css('transform', 'translateY(' + (.8 * before) + 'px)');
        $('.banner-in').css('transform', 'translateY(' + (-.5 * before) + 'px)');
    })
})
