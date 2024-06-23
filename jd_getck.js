// 定义订阅链接和脚本名称
const $ = new API("获取京东cookie", true);

// 请求拦截器
$.http.beforeRequest = (options) => {
  // 检查是否是目标URL
  if (options.url.includes("https://api.m.jd.com/client.action?")) {
    // 提取 Cookie 信息
    const cookies = options.headers['Cookie'];
    const pt_key = cookies.match(/pt_key=([^;]*)/)[1];
    const pt_pin = cookies.match(/pt_pin=([^;]*)/)[1];

    // 记录 Cookie 信息
    console.log(`pt_key: ${pt_key}`);
    console.log(`pt_pin: ${pt_pin}`);

    // 保存到BoxJs存储
    $.setdata(pt_key, 'pt_key');
    $.setdata(pt_pin, 'pt_pin');
  }
};

// 启动脚本
$.run();
