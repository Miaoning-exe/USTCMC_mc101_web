import React from 'react';
import { usePageSkin } from '../../../hooks/usePageSkin';

export default function SkinPicker() {
    const { skin, changeSkin } = usePageSkin();

    const skins = [
        { id: 'emerald', name: '翠绿', color: 'bg-emerald-400' },
        { id: 'skyBlue', name: '天蓝', color: 'bg-[#25799d]' },
    ];

    return (
        <div className="flex items-center gap-2">
            {skins.map((s) => (
                <button
                    key={s.id}
                    title={s.name}
                    onClick={() => changeSkin(s.id)}
                    className={`
            w-5 h-5 border-2 border-black cursor-pointer transition-transform
            ${s.color}
            ${skin === s.id
                            ? 'translate-y-[2px] translate-x-[2px] shadow-none' // 选中时的按压状态
                            : 'shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:-translate-y-[1px]' // 未选中时的浮起状态
                        }
          `}
                />
            ))}
        </div>
    );
}
