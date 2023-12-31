import { Camera as ExpoCamera, CameraType as TypeForCamera } from 'expo-camera';
import { useState } from 'react';

enum CameraType {
    front = 'front',
    back = 'back'
}

export default class Camera {
    public static useCamera() {
        const [type, setType] = useState<CameraType>(CameraType.back);

        const setCameraType = () => {
            setType((current) => {
                return current === CameraType.back ? CameraType.front : CameraType.back
            });
        }

        const [permission, requestPermission] = ExpoCamera.useCameraPermissions();
        console.log(permission);
    }
}