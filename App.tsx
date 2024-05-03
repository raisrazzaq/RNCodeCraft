/* eslint-disable react-native/no-inline-styles */
import {View, Button, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

const App = () => {
  const [selectedImage, setselectedImage] = useState<any>();
  const cropImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setselectedImage(image);
    });
  };
  return (
    <SafeAreaView>
      <View>
        <Button title="CropImages" onPress={() => cropImage()} />
        {selectedImage && (
          <Image
            source={{uri: selectedImage.path}}
            style={{
              width: 150,
              height: 150,
              borderRadius: 12,
              alignSelf: 'center',
              marginTop: 50,
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;
