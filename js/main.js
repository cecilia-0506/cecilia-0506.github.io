/*
  1:歌曲搜索接口
    请求地址:https://autumnfish.cn/search
    请求方法:get
    请求参数:keywords(查询关键字)
    响应内容:歌曲搜索结果

  2:歌曲url获取接口
    请求地址:https://autumnfish.cn/song/url
    请求方法:get
    请求参数:id(歌曲id)
    响应内容:歌曲url地址
  3.歌曲详情获取
    请求地址:https://autumnfish.cn/song/detail
    请求方法:get
    请求参数:ids(歌曲id)
    响应内容:歌曲详情(包括封面信息)
  4.热门评论获取
    请求地址:https://autumnfish.cn/comment/hot?type=0
    请求方法:get
    请求参数:id(歌曲id,地址中的type固定为0)
    响应内容:歌曲的热门评论
  5.mv地址获取
    请求地址:https://autumnfish.cn/mv/url
    请求方法:get
    请求参数:id(mvid,为0表示没有mv)
    响应内容:mv的地址
*/
// window.onload = function(){
//     var tabItem = document.getElementsByClassName("tab-item");
//     var item = tabItem[0].getElementsByTagName("div");

//     var tabContent = document.getElementsByClassName("tab-content");
//     var content = tabContent[0].getElementsByTagName("div");


//     //给三个选项添加点击事件
//     for(let i = 0; i < item.length; i++){

//         //记录当前选项下标
//         item[i].index = i;
//         item[i].onclick = function(){
//             // alert(this);

//             //清除其他的样式
//             for(let j = 0; j < item.length; j++){
//                 item[j].className = '';
//                 content[j].style.display = "none";
//             }
//             this.className = "active";
//             content[item[i].index].style.display = "block";
//         }
//     }
// }

var app = new Vue({
    el: '#player',
    data: {
        query: '',
        musicList: [],
        musicUrl: '',
        musicCover: '',
        hotComments: [],
        isPlaying: false,
        mvUrl: '',
        isShow: false,
    },
    methods: {
        //搜索歌曲
        searchMusic: function() {
            var that = this;
            axios.get("https://autumnfish.cn/search?keywords=" + this.query).then(
                function(response) {
                    // console.log(response);
                    that.musicList = response.data.result.songs;
                    console.log(response.data.result.songs);
                },
                function(err) {}
            );
        },
        // 歌曲播放 url获取
        playMusic: function(musicId) {
            var that = this;
            // console.log(musicId);
            axios.get("https://autumnfish.cn/song/url?id=" + musicId).then(
                function(response) {
                    // console.log(response);
                    that.musicUrl = response.data.data[0].url;
                },
                function(err) {}
            );
            //歌曲封面
            axios.get("https://autumnfish.cn/song/detail?ids=" + musicId).then(
                function(response) {
                    // console.log(response);
                    // console.log(response.data.songs[0].al.picUrl);
                    that.musicCover = response.data.songs[0].al.picUrl;
                },
                function(err) {}
            );
            //歌曲评论
            axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + musicId).then(
                function(response) {
                    // console.log(response);
                    that.hotComments = response.data.hotComments;
                },
                function(err) {}
            );
            
        },


        // 歌曲播放
        play: function() {
            // console.log("play");
            this.isPlaying = true;
        },
        // 歌曲暂停
        pause: function() {
            // console.log("pause");
            this.isPlaying = false;
        },
        // 播放mv
        playMV: function(mvid) {
            var that = this;
            axios.get("https://autumnfish.cn/mv/url?id=" + mvid).then(
                function(response) {
                    // console.log(response);
                    // console.log(response.data.data.url);
                    that.mvUrl = response.data.data.url;
                    that.isShow = true;
                },
                function(err) {}
            )
        },

        


        // 隐藏
        hide: function() {
            this.isShow = false;
        }

    }
});

// 获取元素
const items=document.querySelectorAll('.item');
const selects=document.querySelectorAll('.select');
// 移除选中态
function removeActive(){
    items.forEach(item=>{
        item.classList.remove('active');
    });
    selects.forEach(item=>{
        item.classList.remove('active');
    });
}
// 遍历所有标签
items.forEach((item,index)=>{
    // 绑定点击事件
    item.addEventListener('click',function(){
        // 移除选中态
        removeActive();
        // 添加选中态
        item.classList.add('active');
        // 内容区添加选中态
        selects[index].classList.add('active');
    })
})

// var an=function(){

var audioList = ['./images/理想三旬.mp3','./images/红豆曲.mp3','./images/Loving is easy.mp3','./images/孤独患者.mp3'];
var titleList = ['理想三旬','红豆曲','Loving is easy','孤独患者'];

//初始化
var num=0;
    // document.querySelector(".audioList").src=audioList[num];
    // document.querySelector(".audionameList").innerHTML = titleList[num];
//选择器封装复用
function fn(name){
    return document.querySelector(name);
}
fn(".audioList").src=audioList[num];
fn(".audionameList").innerHTML = titleList[num];
//开始
var hot=fn(".audioList");
fn(".button").onclick=function(){
    hot.play();
}

var num=1;
fn(".audioList2").src=audioLis9t[num];
fn(".audionameList2").innerHTML = titleList[num];
//开始
var hot2=fn(".audioList2");
fn(".button2").onclick=function(){
    hot2.play();
}

var num=2;
fn(".audioList3").src=audioList[num];
fn(".audionameList3").innerHTML = titleList[num];
//开始
var hot3=fn(".audioList3");
fn(".button3").onclick=function(){
    hot3.play();
}

var num=3;
fn(".audioList4").src=audioList[num];
fn(".audionameList4").innerHTML = titleList[num];
//开始
var hot4=fn(".audioList4");
fn(".button4").onclick=function(){
    hot4.play();
}