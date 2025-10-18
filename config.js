// 密码与文件映射配置
const FILE_CONFIG = {
    // 格式: "密码": "文件名"
    "123": "file1.txt",
    "user002456": "file2.docx",
    "user003789": "file3.xlsx",
    // ... 继续添加其他37个映射
    // 注意：这里使用相对路径，文件需要放在 files/ 目录下
};

// 为了增加安全性，可以对密码进行简单混淆（可选）
function getFileMapping() {
    // 这里可以添加一些简单的混淆逻辑
    return FILE_CONFIG;
}

// 添加访问次数限制（使用 localStorage）
function checkAccessLimit(password) {
    const key = `access_${password}`;
    const accessCount = localStorage.getItem(key) || 0;
    
    if (accessCount >= 3) { // 限制每个密码最多访问3次
        return false;
    }
    
    localStorage.setItem(key, parseInt(accessCount) + 1);
    return true;
}