import React, { useEffect, useState } from "react";
import { FontSource, useFonts as useExpoFont } from 'expo-font';

/**
 * @summary Type for *expo-font* `useFonts()`
 */
type FontMap = string | Record<string, FontSource>;

/**
 * @class A class based on `expo-font`
 */
class ExpoFont {
  /**
 * @summary Loads a map of fonts with [`loadAsync`](#loadasync). This returns a `boolean` if the fonts are loaded
 *
 * @param map A map of `fontFamily` 
 * @return
 * - __loaded__ (`boolean`) - A boolean to detect if the font for `fontFamily` has finished loading.
 * - __error__ (`Error | null`) - An error encountered when loading the fonts.
 */
  static ExpoUseFont: (map: FontMap) => [boolean, Error | null] = useExpoFont;
}

/**
 * @class A class containing functionality for `expo-font`, and such
 */
export default class useFontClass extends ExpoFont {
    /**
     * @summary Loads a map of fonts
     * @param fontSource 
     * @returns {boolean} a `boolean` indicating that a font has loaded or not 
     */
  static useFonts(fontSource: FontMap): boolean {
    const [canReturn, setReturn] = useState(false);

    const [isLoaded] = ExpoFont.ExpoUseFont(fontSource);

    useEffect(() => {
      setReturn(isLoaded);
    }, [isLoaded]);

    return canReturn;
  }
}
