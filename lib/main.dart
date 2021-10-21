import 'package:flutter/material.dart';
import 'package:kwiky/Pages/static/welcome.dart';


void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primaryColor: Colors.lightGreen,

      ),
      home: WelcomePage(),
    );
  }
}
