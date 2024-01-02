import React, { useState }from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Camera as ExpoCamera, PermissionResponse} from 'expo-camera';

export default class Camera {

    private static setCameraHandler(permission: PermissionResponse): [boolean, React.JSX.Element]  {
        if(permission.granted != true) {
            return [permission.granted, (
                <View style={Camera.style.error_container}>
                    <Text>
                        Enable Camera in settings to use this App.
                    </Text>
                </View>
            )]
        }
        return
    }

    public static async useCamera(): Promise<[boolean, React.JSX.Element]> {
        const [
            permission, 
            requestPermission
        ] = ExpoCamera.useCameraPermissions();
        
        return requestPermission().then((onfulfilled) => {
            switch(onfulfilled.granted) {
                case true:
                    return Camera.setCameraHandler(onfulfilled);
                case false:
                    return Camera.setCameraHandler(onfulfilled); 
            }
        });
    }

    private static style: any = StyleSheet.create({
        error_container: {
            backgroundColor: '#B3261E'
        }
    });
}


export function CameraHandler({cameraHandler}) {
    
}
