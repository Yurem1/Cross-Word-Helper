import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';

/**
 * @summary Blueprint for `TouchableOpacity` components
 */
interface ToggleButton {
    opacity?: number;
    flags: (flags: boolean) => void;
    press?: () => void;
    children: ReactNode;
}

/**
 * @summary A more refined and less verbose <TouchableOpacity> component
 * @param param0 Props inherited from `TouchableOpacity`, such as opacity, press, etc
 * @returns A pressable button with opacity
 */
export default function ButtonPress({opacity = 0.8, flags, press, children}: ToggleButton): React.JSX.Element {
    return (
        <TouchableOpacity activeOpacity={opacity} onPress={press} onPressIn={() => flags(true)} onPressOut={() => flags(false)}>
            {children}
        </TouchableOpacity>
    );
}