window.onload = function()
{
    do
    {
        var password = window.prompt("請輸入密碼...");
        if(password == '283123')
        {
            window.location.href = './mater/mater.html';
        }
        else if(password == null)
        {
            alert("密碼不得為空！");
        }
        else
        {
            alert("密碼錯誤！請重新輸入。");
        }
    }
}
