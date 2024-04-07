/*
脚本名称：粤工惠cookie获取
更新时间：2024-04-05
使用方法：划掉后台重新打开 小程序粤工惠走路 即可自动抓取WSKEY。
注意事项：脚本抓取的WSKEY默认自动提交到服务器（自动上车），可通过BoxJs设置关闭自动提交功能。
重写订阅：https://raw.githubusercontent.com/FoKit/Scripts/main/rewrite/get_jd_wskey.sgmodule
BoxJs订阅：https://raw.githubusercontent.com/FoKit/Scripts/main/boxjs/fokit.boxjs.json


--------------- Quantumult X 配置 ---------------

[MITM]
hostname = api.m.jd.com, perf.m.jd.com

[rewrite_local]
https:\/\/api\.m\.jd\.com\/client\.action\?functionId=xview2Config url script-request-header https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/get_jd_wskey.js

https:\/\/perf\.m\.jd\.com\/app_monitor\/v2\/getRule url script-request-header https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/get_jd_wskey.js

------------------------------------------------
*/

const $ = new Env('粤工惠');
$.ygh_tempKey = 'ygh_temp';//
$.yghcookie = 'yghckList'; // 缓存键名 
$.is_debug = $.getdata('is_debug') || 'false'; // 调试模式
$.chat_id = $.getdata('YGH_TG_USER_ID') || ''; // TG CHAT ID
$.bot_token = $.getdata('YGH_TG_BOT_TOKEN') || ''; // TG Robot Token
$.autoSubmit = $.getdata('YGH_AUTO_UPLOAD') || 'true'; // 是否自动提交
$.Messages = [];
$.cookie = ''; // 初始化数据

// 脚本执行入口
!(async () => {
    if (typeof $request !== `undefined`) {
        await GetCookie();
        if ($.cookie && $.autoSubmit != 'false') {
            await SubmitCK();
        } else if ($.cookie) {
            $.Messages.push(`🎉 粤工惠cookie 获取成功\n${$.cookie}`);
            $.setjson($.yyghckList, $.yghcookie); // 写入数据持久化
        }
    }
})()
    .catch((e) => $.Messages.push(e.message || e) && $.logErr(e))
    .finally(async () => {
        await sendMsg($.Messages.join('\n').trimStart().trimEnd()); // 推送通知
        $.done();
    });

// 获取用户数据
async function GetCookie() {
    try {
        debug($request.headers);
        const headers = ObjectKeys2LowerCase($request.headers);
        const [, wskey] = headers?.cookie.match(/wskey=([^=;]+?);/) || '';
        const [, pin] = headers?.cookie.match(/pin=([^=;]+?);/) || '';

        // 延迟读取缓存
        if ($request.url.includes('/getRule')) await $.wait(3e3);

        // 读取缓存数据
        $.ygh_temp = $.getjson($.ygh_tempKey) || {}; // 临时缓存
        $.yyghckList = $.getjson($.
