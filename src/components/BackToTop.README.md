# BackToTop 组件使用说明

## 功能特性

- **浮动回到顶部按钮** - 在指定滚动距离后显示
- **平滑动画** - 优雅的显示/隐藏过渡效果
- **平滑滚动** - 点击后平滑滚动到页面顶部
- **完全可定制** - 支持多种自定义选项
- **性能优化** - 使用 requestAnimationFrame 和被动事件监听器
- **无障碍支持** - 支持 prefers-reduced-motion
- **暗黑模式** - 自动适配暗黑主题

## 属性配置

```typescript
interface Props {
  threshold?: number;        // 显示阈值（默认：300px）
  speed?: number;            // 滚动速度（默认：800ms）
  size?: number;             // 按钮尺寸（默认：48px）
  icon?: string;             // 按钮图标（默认：'↑'）
  iconSize?: number;         // 图标尺寸（默认：20px）
  className?: string;        // 额外CSS类名
  style?: string;            // 内联样式
  visibleClassName?: string; // 显示时的额外类名
  hiddenClassName?: string;  // 隐藏时的额外类名
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'; // 位置（默认：'bottom-right'）
  offset?: number;          // 距离边缘的偏移（默认：20px）
  animationDuration?: number; // 动画持续时间（默认：300ms）
}
```

## 使用示例

### 基础用法
```astro
---
import BackToTop from './components/BackToTop.astro';
---
<BackToTop />
```

### 自定义配置
```astro
---
import BackToTop from './components/BackToTop.astro';
---
<BackToTop 
  threshold={500}
  size={56}
  icon="↑"
  position="bottom-right"
  offset={30}
  animationDuration={250}
  className="glass pulse"
/>
```

### 玻璃效果
```astro
---
import BackToTop from './components/BackToTop.astro';
---
<BackToTop 
  className="glass"
  style="width: 56px; height: 56px;"
/>
```

### 完全自定义样式
```astro
---
import BackToTop from './components/BackToTop.astro';
---
<BackToTop 
  icon="▲"
  style="background: linear-gradient(45deg, #ff6b6b, #feca57); border-radius: 12px;"
  className="custom-back-to-top"
/>
```

## 样式类

### 内置类名
- `.back-to-btn` - 按钮基础样式
- `.back-to-icon` - 图标样式
- `.visible` - 显示状态类
- `.glass` - 玻璃效果类
- `.pulse` - 脉冲动画类

### 位置类
- `.back-to-bottom-right` - 右下角（默认）
- `.back-to-bottom-left` - 左下角
- `.back-to-top-right` - 右上角
- `.back-to-top-left` - 左上角

## JavaScript API

组件内部使用 `BackToTopController` 类管理功能：

```javascript
// 获取实例（如果需要手动控制）
const backToTopController = document.querySelector('back-to-top');

// 方法
backToTopController.showButton();    // 显示按钮
backToTopController.hideButton();    // 隐藏按钮
backToTopController.scrollToTop();   // 滚动到顶部
backToTopController.destroy();      // 清理实例
```

## 浏览器兼容性

- ✅ 现代浏览器
- ✅ 移动设备
- ✅ 暗黑模式
- ✅ prefers-reduced-motion 支持
- ✅ Astro View Transitions 兼容

## 性能优化

- 使用 `requestAnimationFrame` 优化滚动事件
- 被动事件监听器减少滚动性能影响
- 自动清理事件监听器防止内存泄漏
- 支持 Astro 页面切换的清理机制