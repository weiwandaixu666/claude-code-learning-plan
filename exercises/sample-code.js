// 基础数学运算工具

// 计算数组的总和
function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// 计算数组的平均值
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    return calculateSum(numbers) / numbers.length;
}

// 查找数组中的最大值
function findMax(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// 查找数组中的最小值
function findMin(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

// 过滤数组中的偶数
function filterEvenNumbers(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}

// 过滤数组中的奇数
function filterOddNumbers(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}

// 练习题：
// 1. 重构 calculateSum 使用 reduce 方法
// 2. 添加参数验证到所有函数
// 3. 添加单元测试
// 4. 优化性能（如果需要）
// 5. 添加 JSDoc 注释

module.exports = {
    calculateSum,
    calculateAverage,
    findMax,
    findMin,
    filterEvenNumbers,
    filterOddNumbers
};
