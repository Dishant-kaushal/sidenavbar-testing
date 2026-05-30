import { type ButtonProps } from '../Button/Button';
export interface ButtonGroupItemProps extends Omit<ButtonProps, 'variant' | 'size' | 'color' | 'isFullWidth' | 'isDisabled'> {
}
export declare const ButtonGroupItem: import("react").ForwardRefExoticComponent<ButtonGroupItemProps & import("react").RefAttributes<HTMLButtonElement>>;
