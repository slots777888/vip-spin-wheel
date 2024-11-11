const prizes = [
    { name: "$2", minDegree: 0, maxDegree: 45 },
    { name: "$2", minDegree: 46, maxDegree: 90 },
    { name: "$3", minDegree: 91, maxDegree: 135 },
    { name: "$4", minDegree: 136, maxDegree: 180 },
    { name: "$5", minDegree: 181, maxDegree: 225 },
    { name: "$3", minDegree: 226, maxDegree: 270 },
    { name: "$4", minDegree: 271, maxDegree: 315 },
    { name: "$3", minDegree: 316, maxDegree: 360 },
];

function spin() {
    const wheel = document.getElementById("wheel");
    const resultDisplay = document.getElementById("result");

    // 重置 transition，让上次旋转结束后的状态重置
    wheel.style.transition = "none";
    wheel.style.transform = `rotate(0deg)`;

    // 使用 setTimeout 确保样式更改生效
    setTimeout(() => {
        // 设置新的旋转 transition
        wheel.style.transition = "transform 4s ease-out";
        
        // 生成一个随机的旋转角度，确保至少旋转5圈（1800度）
        const randomDegree = Math.floor(1800 + Math.random() * 360);
        wheel.style.transform = `rotate(${randomDegree}deg)`;

        // 计算最终停留的角度
        const finalDegree = randomDegree % 360;

        // 在旋转结束后显示中奖信息
        setTimeout(() => {
            const prize = prizes.find(p => finalDegree >= p.minDegree && finalDegree <= p.maxDegree);
            resultDisplay.innerText = `Congratulations! You won: ${prize.name}`;
        }, 4000); // 与旋转时间保持一致
    }, 0);
}

