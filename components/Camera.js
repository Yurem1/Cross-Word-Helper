import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';

export default function Camera() {
  const [type, setType] = useState(CameraType.back);
  setType('e');
}
