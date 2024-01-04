import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';

interface ToggleButton {
    opacity?: number;
    flags: (flags: boolean) => void;
    press?: () => void;
    children: ReactNode;
}

export default function ButtonPress({opacity = 0.8, flags, press, children}: ToggleButton): React.JSX.Element {
    return (
        <TouchableOpacity activeOpacity={opacity} onPress={press} onPressIn={() => flags(true)} onPressOut={() => flags(false)}>
            {children}
        </TouchableOpacity>
    );
}