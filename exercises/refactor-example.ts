// 需要重构的代码示例

interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user' | 'guest';
}

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
}

// 计算用户折扣 - 代码重复，难以维护
function calculateUserDiscount(user: User): number {
    if (user.role === 'admin') {
        return 0.2;
    } else if (user.role === 'user') {
        return 0.1;
    } else {
        return 0.0;
    }
}

// 计算产品折扣 - 与上面的逻辑类似
function calculateProductDiscount(product: Product): number {
    if (product.category === 'electronics') {
        return 0.15;
    } else if (product.category === 'books') {
        return 0.1;
    } else {
        return 0.05;
    }
}

// 验证用户数据
function validateUserData(name: string, email: string, age: number): boolean {
    if (name === null || name === undefined || name.length < 2) {
        return false;
    }
    if (email === null || email === undefined || !email.includes('@')) {
        return false;
    }
    if (age === null || age === undefined || age < 18 || age > 120) {
        return false;
    }
    return true;
}

// 验证产品数据 - 类似的验证逻辑
function validateProductData(name: string, price: number, category: string): boolean {
    if (name === null || name === undefined || name.length < 2) {
        return false;
    }
    if (price === null || price === undefined || price < 0) {
        return false;
    }
    if (category === null || category === undefined || category.length === 0) {
        return false;
    }
    return true;
}

// 格式化用户信息
function formatUserInfo(user: User): string {
    let info = `User: ${user.name}\n`;
    info += `Email: ${user.email}\n`;
    info += `Role: ${user.role}\n`;
    info += `ID: ${user.id}`;
    return info;
}

// 格式化产品信息 - 类似的格式化逻辑
function formatProductInfo(product: Product): string {
    let info = `Product: ${product.name}\n`;
    info += `Price: $${product.price}\n`;
    info += `Category: ${product.category}\n`;
    info += `ID: ${product.id}`;
    return info;
}

// 检查权限
function checkPermission(user: User, action: string): boolean {
    if (user.role === 'admin') {
        return true;
    } else if (user.role === 'user') {
        if (action === 'read' || action === 'comment') {
            return true;
        }
        return false;
    } else {
        if (action === 'read') {
            return true;
        }
        return false;
    }
}

// 计算最终价格
function calculateFinalPrice(product: Product, user: User): number {
    let basePrice = product.price;
    let userDiscount = calculateUserDiscount(user);
    let productDiscount = calculateProductDiscount(product);
    let totalDiscount = userDiscount + productDiscount;
    let finalPrice = basePrice * (1 - totalDiscount);
    return finalPrice;
}

// TODO: 重构这个文件
// 重构目标：
// 1. 提取重复代码为通用函数
// 2. 使用策略模式处理折扣计算
// 3. 创建验证框架
// 4. 改进类型安全
// 5. 添加完整的注释和文档
// 6. 保持向后兼容性

export {
    User,
    Product,
    calculateUserDiscount,
    calculateProductDiscount,
    validateUserData,
    validateProductData,
    formatUserInfo,
    formatProductInfo,
    checkPermission,
    calculateFinalPrice
};
