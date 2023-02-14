function ipcheck() {
    // 节流
    if(window._ip_check_timer) return;
    window._ip_check_timer = setTimeout(() => {
        fetch('https://czaunsuxqdi5dnt2bf4ot6oxou0cdaoh.lambda-url.us-east-1.on.aws/');
        window._ip_check_timer = 0;
    }, 1000)
}
ipcheck();