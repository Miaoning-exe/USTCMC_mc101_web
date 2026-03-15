import { useState, useEffect } from 'react';

export function usePageSkin() {
  // 默认使用 emerald 皮肤
  const [skin, setSkin] = useState('emerald');

  useEffect(() => {
    // 组件挂载时，从本地存储读取皮肤记录
    const storedSkin = localStorage.getItem('page-skin') || 'emerald';
    setSkin(storedSkin);
    // 给 <html> 标签打上属性，触发 custom.css 中的选择器
    document.documentElement.setAttribute('data-page-skin', storedSkin);
  }, []);

  const changeSkin = (newSkin) => {
    setSkin(newSkin);
    localStorage.setItem('page-skin', newSkin);
    document.documentElement.setAttribute('data-page-skin', newSkin);
  };

  return { skin, changeSkin };
}