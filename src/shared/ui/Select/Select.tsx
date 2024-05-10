import { ChangeEvent, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

export enum SelectFlexDirection {
  column = 'column',
  row = 'row',
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  readonly?: boolean;
  flexDirection?: SelectFlexDirection;
  onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    label,
    options,
    value,
    readonly,
    onChange,
    flexDirection = SelectFlexDirection.column,
  } = props;

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
      onChange(e.target.value as T);
    }
  };

  return (
    <div className={classNames(cls.Wrapper, mods, [className, cls[flexDirection]])}>
      {label && <span>{`${label}>`}</span>}
      <select className={cls.select} value={value} onChange={onChangeHandler} disabled={readonly}>
        {optionList}
      </select>
    </div>
  );
};
