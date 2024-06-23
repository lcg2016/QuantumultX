{
  "id": "asvow.app.sub",
  "name": "LCG",
  "author": "@LCG",
  "icon": "https://avatars.githubusercontent.com/u/88471740",
  "repo": "https://ooxx.be/js",
  "apps": [
    {
      "id": "ceshi",
      "name": "测试",
      "keys": ["@UMER.CookieUM"],
      "settings": [
        {
          "id": "@UMER.CookieUM",
          "name": "UMER Token",
          "val": null,
          "type": "textarea",
          "autoGrow": true,
          "rows": 1,
          "desc": ""
        }
      ],
      "author": "@LCG",
      "repo": "https://ooxx.be/js",
      "icons": ["https://ooxx.be/js/icon/umer-trn.png", "https://ooxx.be/js/icon/umer.png"],
      "script": "https://ooxx.be/js/umer.js"
    },
     {
      "id": "cookie",
      "name": "获取京东cookie",
      "author": "@lcg",
      "descs_html": ["用于自动抓取京东WSKEY"],
      "icons": [
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/jdjoy.png",
        "https://raw.githubusercontent.com/FoKit/Scripts/main/images/jdjoy.png"
      ],
       "script": "https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/weibo_sign.js",
      "keys": [
        "CK_AUTO_UPLOAD",
        "CK_TG_BOT_TOKEN",
        "CK_TG_USER_ID",
        "COOKIE"
      ],
      "settings": [
        {
          "id": "WSKEY_AUTO_UPLOAD",
          "name": "自动提交WSKEY",
          "val": true,
          "type": "boolean",
          "desc": "启用后, 重写抓取的WSKEY会自动提交(上车)"
        },
        {
          "id": "WSKEY_TG_BOT_TOKEN",
          "name": "Telegram机器人Token",
          "val": "",
          "type": "text",
          "desc": "填写 Telegram 机器人的 Token, 格式: 123456:abcdefgabcdefgabcdefg"
        },
        {
          "id": "WSKEY_TG_USER_ID",
          "name": "Telegram 会话ID",
          "val": "",
          "type": "text",
          "desc": "填写 Telegram 会话ID: -1001701121614"
        },
        {
          "id": "COOKIE",
          "name": "京东COOKIE",
          "val": "",
          "type": "textarea",
          "autoGrow": false,
          "rows": 10,
          "desc": "京东COOKIE"
        }
      ]
    },
   
  ]
}
