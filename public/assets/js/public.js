//向服务器端发送请求获得随机推荐数据
//实现随机推荐获取数据
$.ajax({
    url: '/posts/random',
    type: 'get',
    success: function(res) {
        // console.log(res);
        var str = `
        {{each data}}
        <li>
            <a href="detail.html?id={{$value._id}}">
                <p class="title">{{$value.title}}</p>
                <p class="reading">阅读({{$value.meta.views}})</p>
                <div class="pic">
                    <img src="{{$value.thumbnail}}" alt="">
                </div>
            </a>
        </li>
        {{/each}}
        `;
        var html = template.render(str, { data: res })
        $('.random ').html(html)

    }
})


//向服务器端发送导航数据
$.ajax({
    url: '/categories',
    type: 'get',
    success: function(res) {
        // console.log(res);
        var str = `
        {{each data}}
        <li><a href="list.html?id={{$value._id}}"><i class="fa {{$value.className}}"></i>{{$value.title}}</a></li>
        {{/each}}
        `;
        var html = template.render(str, { data: res })
        $('.nav').html(html)
        $('.topnav ul').html(html)
    }
})


// 获取浏览器的地址栏中的参数
function getUrlParams(name) {
    var paramsAry = location.search.substr(1).split('&')
        //循环数据
    for (var i = 0; i < paramsAry.length; i++) {
        var tmp = paramsAry[i].split('=');
        if (tmp[0] == name) {
            return tmp[1]
        }
    }
    return -1
}