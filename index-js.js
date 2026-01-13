window.onload = function() {
    while (true) {
        var password = window.prompt("請輸入密碼...");
        
        if (password === null) {
            alert("請輸入密碼後再進入！");
            continue; // 使用者按取消，繼續循環
        }

        if (btoa(password) === 'MjgzMTIz') {
            window.location.href = './mater/mater.html';
            break; // 密碼正確，跳轉並退出循環
        } else {
            alert("密碼錯誤！請重新輸入。");
        }
    }
}
