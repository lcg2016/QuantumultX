// 重写：^https://matrix-api\.gdftu\.org\.cn/api/v1/enduser/event/quiz-for-points-v1/member url script-request-header Authorization.js

// host：matrix-api.gdftu.org.cn


const url = $request.url;
const headers = $request.headers;

// 判断是否有 Authorization 头
if ("Authorization" in headers) {
    const currentAuthorization = headers["Authorization"];
    const storedAuthorization = $prefs.valueForKey("Authorization");
    
    // 判断 Authorization 是否更新
    if (currentAuthorization !== storedAuthorization) {
        // 如果更新了，复制到剪贴板
        $clipboard.text = currentAuthorization;
        
        // 发送通知
        $notify("Authorization Updated", "", "Authorization 更新了，并已复制到剪贴板！");
        
        // 更新存储的 Authorization
        $prefs.setValueForKey(currentAuthorization, "Authorization");
    }
}

$done({});
