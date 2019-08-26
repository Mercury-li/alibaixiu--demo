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