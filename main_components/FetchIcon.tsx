import React from 'react';

/**
 * @summary Blueprint for expo-icons
 */
interface ToggleIcon {
    Type: ({
      name,
      color,
      size
    }: {name: string, color: string, size: number}) => React.JSX.Element,
    name: string
    color?: string
    size?: number
}

/**
 * @summary A better and less verbose way to display expo-icons
 * @param param0 
 * `Type` prop takes the reference to icon component
 * `name` takes the name of the icon
 * `color` color of the icon
 * `size` size of the icon
 * @returns An icon
 */
export default function FetchIcon({Type, name, color = 'black', size = 15}: ToggleIcon): React.JSX.Element {
    return (
      <>
      <Type name={name} color={color} size={size}></Type>
      </>
    )
}
  