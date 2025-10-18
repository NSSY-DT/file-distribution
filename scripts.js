document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const password = document.getElementById('password').value;
    const messageEl = document.getElementById('message');
    const downloadSection = document.getElementById('downloadSection');
    const downloadLink = document.getElementById('downloadLink');
    
    // 获取文件映射
    const fileMapping = getFileMapping();
    
    if (fileMapping[password]) {
        const filename = fileMapping[password];
        const fileUrl = `files/${filename}`;
        
        // 显示下载区域
        downloadLink.href = fileUrl;
        downloadLink.textContent = `下载 ${filename}`;
        downloadSection.style.display = 'block';
        messageEl.textContent = '验证成功！';
        messageEl.className = 'message success';
        
        // 清空密码框
        document.getElementById('password').value = '';
        
    } else {
        messageEl.textContent = '密码错误，请重试';
        messageEl.className = 'message error';
        downloadSection.style.display = 'none';
    }
});