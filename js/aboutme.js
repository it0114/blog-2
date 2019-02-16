window.onload = function () {
    var my_name = document.getElementById("name");
    var my_textarea = document.getElementById("textarea");
    var submit = document.getElementById("submit");
    var comment = document.getElementById("comment");
    var my_youHome = document.getElementById("youHome");
    var my_Email = document.getElementById("E-mail");
    var reset = document.getElementById("reset");
    var num = 1;
    submit.onclick = function () {

        var textarea = document.getElementById("textarea").value;   //评论
        var name = document.getElementById("name").value;           //名称
        var youHome = document.getElementById("youHome").value;     //主页
        var Email = document.getElementById("E-mail").value;        //邮箱

        //判断textarea里面的内容是否为空
        if (textarea.length === 0 || name.length === 0) {
            alert("请检查内容和昵称后再进行提交~~");
            my_textarea.value = "";
            my_name.value = "";
            return;
        }

        var nameColor = name.substring(0, 1);//提取字符串第一个数
        if (nameColor <= 9) {
            nameColor = "";
        }
        //将li放到ul里面
        var li = document.createElement("li");
        li.innerHTML = "<div>" + "<i>" + nameColor + "</i>" + "<span>" + num++ + "楼" + "</span>"+"<span class='date'>" + formartDate() +"</span> "+ "<h4><a href='javascript:;'>" + name + "</a></h4></div>" + "<p>" + textarea + "</p>";
        comment.insertBefore(li, comment.children[0]);

        //获取所有的a标签 然后跳转网页;
        var comment_a = comment.getElementsByTagName("a");
        for (var i = 0; i < comment_a.length; i++) {
            var a = comment_a[i];
            a.href = "http://" + youHome;
            a.title = "点击访问我的主页";
            if (a.href !== "http:") {
                comment_a[0].style.color = "#14a8f2";
            }
        }

        //改变头像颜色
        var i1 = document.getElementsByTagName("i")[0];
        i1.style.background = "#" + stringToHex(nameColor).slice(1, 5);// 把转换出来的十六进制转换为4位数然后传给i

        //将输入框内容清除
        my_textarea.value = "";
        my_name.value = "";
        my_youHome.value = "";
        my_Email.value = "";
    };
    reset.onclick = function () {
        //将输入框内容清除
        my_textarea.value = "";
        my_name.value = "";
        my_youHome.value = "";
        my_Email.value = "";
    };

    // 创建时间函数
    function formartDate() {
        var date = new Date();
        var arr = [date.getFullYear() + "-",
            date.getMonth() + 1 + "-",
            date.getDate() + " ",
            date.getHours() + ":",
            date.getMinutes() + ":",
            date.getSeconds()];
        return arr.join("")     //返回字符串
    }

    //改变头像颜色函数
    function stringToHex(str) {
        var val = "";
        for (var i = 0; i < str.length; i++) {
            if (val === "")
                val = str.charCodeAt(i).toString(16);
            else
                val += "," + str.charCodeAt(i).toString(16);
        }
        return val;
    }
};