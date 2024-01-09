import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import NavBar from '../../main_components/NavBar';

export default function Test({navigation}): React.JSX.Element {
    return (
        <NavBar navigation={navigation}></NavBar>
    )
}