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
            title: 'wishuice',
            logo: '',
            menu: false,
            show: false,
            nav: headNav,
            headImg: 'img/head.jpeg'
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
            text: "A simple introduction to the English.A simple introduction to the English.A simple introduction to the English.A simple introduction to the English."
        }
    })

    // skills lists 技能列表
    let skills = new Vue({
        el: '#skills',
        data: {
            name: '这个是列表',
            skills: {
                top: [{
                    name: 'A',
                    introduction: 'this is a',
                    value: 90
                },
                {
                    name: 'B',
                    introduction: 'this is b',
                    value: 80
                },
                {
                    name: 'C',
                    introduction: 'this is c',
                    value: 95
                }
                ],
                bottom: [{
                    name: 'D',
                    introduction: 'this is d',
                    value: 70
                },
                {
                    name: 'E',
                    introduction: 'this is e',
                    value: 75
                },
                {
                    name: 'F',
                    introduction: 'this is f',
                    value: 85
                }
                ]
            },
            show: {
                title: '',
                introduction: ''
            },
            showSkills: true,
            showSkillsList: true,
            open: ''
        },
        methods: {
            showSkillsIn: function (data) {
                this.showSkills = true;
                this.showSkillsList = true;
                this.open = 'open';
                this.show.title = data
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
            text: 'This is a list of works,This is a list of works,This is a list of works',
            img: [{
                url: 'img/works/works01.png',
                size: 'big'
            },
            {
                url: 'img/works/works04.png',
                size: 'middle'
            },
            {
                url: 'img/works/works02.png',
                size: 'big'
            },
            {
                url: 'img/works/works09.png',
                size: 'small'
            },
            {
                url: 'img/works/works05.png',
                size: 'middle'
            },
            {
                url: 'img/works/works03.png',
                size: 'big'
            },
            {
                url: 'img/works/works07.png',
                size: 'middle'
            },
            {
                url: 'img/works/works06.png',
                size: 'middle'
            },
            {
                url: 'img/works/works08.png',
                size: 'small'
            },
            ]
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
