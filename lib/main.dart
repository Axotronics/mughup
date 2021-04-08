import 'dart:io';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:tesseract_ocr/tesseract_ocr.dart';
import 'package:firebase_ml_vision/firebase_ml_vision.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: MyHomePage(),
    );
  }
}

// What does this app do: You enter the app -> You have two buttons: Saying pick image from gallery or pick image from camera. Select any -> The app displays the picked image in a container -> Then, there is an option to recognize text, noe the app recognizes text and displays the extracted text on the screen. Also, the image is then uploaded to firebase database

// TODO: Create Two Buttons i.e. pick image from gallery and pick image from Camera
// TODO: Create a container that shows the image selected
// TODO: Extract text onClick of button and post the image to firebase database.

class MyHomePage extends StatefulWidget {
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  File _image;
  final picker = ImagePicker();

  Future getImageFromGallery() async {
    final pickedFile = picker.getImage(source: ImageSource.gallery);
    setState(() {
      if (pickedFile != null) {
        _image = pickedFile as File;
      } else {
        print('No image selected.');
      }
    });
  }

  Future getImageFromCamera() async {
    final pickedImage = picker.getImage(source: ImageSource.camera);
    setState(() {
      if (pickedImage != null) {
        _image = pickedImage as File;
      } else {
        print('No image Selected');
      }
    });
  }

  Future extractText() async {
    FirebaseVisionImage ourImage = FirebaseVisionImage.fromFile(_image);
    TextRecognizer recognizedText =
        FirebaseVision.instance.textRecognizer();
    Future<VisionText> readText = recognizedText.processImage(ourImage);
    

    print(readText);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Text Recognition with mlkit'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          ElevatedButton(
              child: Text('GetImage from Gallery'),
              onPressed: getImageFromGallery),
          ElevatedButton(
              child: Text('Pick Image from Camera'),
              onPressed: getImageFromCamera),
          ElevatedButton(child: Text('Extract Text'), onPressed: extractText)
        ],
      ),
    );
  }
}
