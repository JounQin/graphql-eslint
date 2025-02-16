import { ReactElement } from 'react';
import * as S from '@radix-ui/react-select';
import { CaretSlimIcon, CheckIcon } from '@theguild/components';
import { clsx } from 'clsx';
import { Button } from './button';

type SelectProps = {
  options: { disabled?: boolean; key: string; name: string }[];
  defaultValue?: string;
  value: string;
  onChange: (newValue: string) => void;
  placeholder: string;
};

export const Select = ({
  options,
  defaultValue,
  value,
  onChange,
  placeholder,
}: SelectProps): ReactElement => {
  return (
    <S.Root defaultValue={defaultValue} value={value} onValueChange={onChange}>
      <S.Trigger asChild aria-label={placeholder}>
        <Button>
          <S.Value placeholder={placeholder} />
          <S.Icon className="ml-2">
            <CaretSlimIcon className="h-3 w-3" />
          </S.Icon>
        </Button>
      </S.Trigger>
      <S.Content className="z-50">
        {/*<S.ScrollUpButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">*/}
        {/*  <CaretSlimIcon className="h-3 w-3 rotate-180" />*/}
        {/*</S.ScrollUpButton>*/}
        <S.Viewport className="rounded-lg bg-white p-2 shadow-lg dark:bg-gray-800">
          <S.Group>
            {options.map(option => (
              <S.Item
                disabled={option.disabled}
                key={option.key}
                value={option.key}
                className={clsx(
                  'relative flex items-center rounded-md py-2 pl-8 pr-4 text-sm font-medium text-gray-700 focus:bg-gray-100 dark:text-gray-300 dark:focus:bg-gray-900',
                  'radix-disabled:opacity-50',
                  'cursor-pointer select-none focus:outline-none',
                )}
              >
                <S.ItemText>{option.name}</S.ItemText>
                <S.ItemIndicator className="absolute left-2 inline-flex items-center">
                  <CheckIcon />
                </S.ItemIndicator>
              </S.Item>
            ))}
          </S.Group>
        </S.Viewport>
        {/*<S.ScrollDownButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">*/}
        {/*  <CaretSlimIcon className="h-3 w-3" />*/}
        {/*</S.ScrollDownButton>*/}
      </S.Content>
    </S.Root>
  );
};
