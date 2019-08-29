$("#logout").on('click', function() {
    var isConfirm = confirm('您确定要退出吗')
    if (isConfirm) {
        //实现退出功能
        $.ajax({
            type: 'post',
            url: '/logout',
            success: function() {
                location.href = 'login.html'
            },
            error: function() {
                alert('退出失败')
            }
        })
    }
})

//向服务器发送请求，索要用户登录信息
$.ajax({
    url: '/users/' + userId,
    type: 'get',
    success: function(res) {
        // console.log(res);
        $('.avatar').attr('src', res.avatar)
        $('.profile .name').html(res.nickName)
    }
})