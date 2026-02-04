# 有 Bug 的代码 - 用于调试练习

import random
from typing import List, Optional

def calculate_average(numbers: List[float]) -> float:
    """计算列表中数字的平均值"""
    # Bug 1: 没有检查空列表
    return sum(numbers) / len(numbers)

def find_duplicates(items: List[str]) -> List[str]:
    """查找列表中的重复项"""
    seen = set()
    duplicates = []
    for item in items:
        # Bug 2: 逻辑错误 - 会把非重复项也加入
        if item in seen:
            duplicates.append(item)
        seen.add(item)
    return duplicates

def process_user_input(user_input: str) -> dict:
    """处理用户输入并返回解析后的数据"""
    # Bug 3: 没有错误处理
    data = eval(user_input)  # 危险！使用 eval
    return {
        'name': data['name'],
        'age': data['age'],
        # Bug 4: 缺少键检查
    }

def divide_numbers(a: float, b: float) -> float:
    """除法运算"""
    # Bug 5: 没有检查除零
    return a / b

def get_random_item(items: List) -> Optional:
    """从列表中随机选择一个项目"""
    # Bug 6: 没有检查空列表
    return random.choice(items)

def merge_dicts(dict1: dict, dict2: dict) -> dict:
    """合并两个字典"""
    # Bug 7: 会修改原始字典
    result = dict1
    result.update(dict2)
    return result

def calculate_factorial(n: int) -> int:
    """计算阶乘"""
    # Bug 8: 没有处理负数和零的情况
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

def validate_email(email: str) -> bool:
    """验证邮箱地址格式"""
    # Bug 9: 简单的验证，容易绕过
    return '@' in email and '.' in email

def read_file(filename: str) -> str:
    """读取文件内容"""
    # Bug 10: 没有处理文件不存在的情况
    with open(filename, 'r') as f:
        return f.read()

# 练习：找出并修复所有 bug
# 提示：
# - 边界条件
# - 错误处理
# - 类型检查
# - 安全性问题
# - 输入验证
