while(true)
{
    var password = window.prompt("請輸入密碼...");
    if(password == '283123')
    {
        Window.location.href = 'mater/mater.html';
    }
    else
    {
        alert("密碼錯誤! 請再次輸入...");
    }
}