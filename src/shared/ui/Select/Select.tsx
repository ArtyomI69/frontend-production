import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  readonly?: boolean;
  onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
  const { className, label, options, value, readonly, onChange } = props;

  const optionList = useMemo(
    () =>
      options?.map((opt) => (
        <option key={opt.value} className={cls.option} value={opt.value}>
          {opt.content}
        </option>
      )),
    [options]
  );

  const mods: Mods = {};

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span>{`${label}>`}</span>}
      <select className={cls.select} value={value} onChange={onChangeHandler} disabled={readonly}>
        {optionList}
      </select>
    </div>
  );
});
