
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:kwiky/utilities/styles.dart';

class WelcomePage extends StatefulWidget {
  const WelcomePage({Key? key}) : super(key: key);

  @override
  _WelcomePageState createState() => _WelcomePageState();
}

class _WelcomePageState extends State<WelcomePage> {
  int _pageNumber = 3;
  final PageController _pageController = PageController();
  int _currentPage = 0;

  List<Widget> _builPageIndicator(){
    List<Widget> list = [];
    for(int i=0; i < _pageNumber; i++){
      list.add(i == _currentPage? _indicator(true): _indicator(false));
    }
    return list;
  }

  Widget _indicator(bool isActive){
    return AnimatedContainer(duration: Duration(milliseconds: 150),
    margin:EdgeInsets.symmetric(horizontal: 8.0),
    height: 8.0,
    width: isActive ? 24.0: 16.0,
    decoration: BoxDecoration(
      color: isActive ? Colors.white: Colors.white24,
      borderRadius: BorderRadius.all(Radius.circular(12.0)),
    ),);
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: AnnotatedRegion<SystemUiOverlayStyle>(
        value: SystemUiOverlayStyle.light,
        child: Container(
          decoration: BoxDecoration(
              gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  stops: [0.1, 0.4, 0.7, 0.9],
                  colors: [
                    Color(0xFF3594DD),
                    Color(0xFF4563DB),
                    Color(0xFF5036D5),
                    Color(0xFF5b16D0),

                  ]
              )
          ),
          child: Padding(
            padding: EdgeInsets.symmetric(vertical: 40.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Container(alignment: Alignment.centerRight,
              child: FlatButton(
                onPressed: () => print('Skip'),
                child: Text("Skip",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 20.0,
                ),),
              ),),
              Container(
                height: 600.0,
              child: PageView(
                physics: ClampingScrollPhysics(),
                controller: _pageController,
                onPageChanged: (int page){
                  setState(() {
                    _currentPage = page;
                  });
                },
                children: [
                  Padding(
                    padding: EdgeInsets.all(30.0),
                    //padding: const EdgeInsets.fromLTRB(30.0, 30.0, 30.0, 10.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Center(
                          child: Image(image:
                          AssetImage(
                              'assets/images/welcome_01.png'),
                          height: 300,
                          width: 300,
                          ),
                        ),
                        SizedBox(height: 20.0),
                        Text("We Connect You \nWith Your Taste", style: kTitleStyle,),
                        SizedBox(height: 10.0),
                        Text("When your need aroundWhen your need to eat from any r \nneed to eat from any resturant around",
                        style: kSubtitleStyle),
                      ],
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.all(30.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Center(
                          child: Image(image:
                          AssetImage(
                              'assets/images/welcome_02.png'),
                            height: 300,
                            width: 300,
                          ),
                        ),
                        SizedBox(height: 30.0),
                        Text("We Cover All More \nResturant You Can Imagine", style: kTitleStyle,),
                        SizedBox(height: 10.0),
                        Text("When your need to eat from any resturant around \n need to eat from any resturant aroundWhen your need \nto eat from any resturant around",
                            style: kSubtitleStyle),
                      ],
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.all(30.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Center(
                          child: Image(image:
                          AssetImage(
                              'assets/images/welcome_03.png'),
                            height: 300,
                            width: 300,
                          ),
                        ),
                        SizedBox(height: 30.0),
                        Text("We Make Shooping \nEaslier for You", style: kTitleStyle,),
                        SizedBox(height: 10.0),
                        Text("When your need to eat from any resturant around, When your need to eat from any resturant aroundWhen your need to eat from any resturant aroundWhen your need to eat from any resturant around",
                            style: kSubtitleStyle),
                      ],
                    ),
                  ),
                ],
              ),),

              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                  children:
                  _builPageIndicator(),),
              Padding(
                padding: EdgeInsets.only(left: 30.0, right: 30.0),
                child: Container(
                  
                  margin: const EdgeInsets.all(5),
                  child: ElevatedButton.icon(

                    label: Text('Login Now'),
                    icon: Icon(Icons.login),
                    style: ElevatedButton.styleFrom(
                      primary: Colors.lightBlue,
                    ), onPressed: () {  },

                  ),
                ),
              ),
              Divider(
                  color: Colors.white
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Text("Register", style: kSubtitleStyle,),
                  Text("Order Now", style: kSubtitleStyle,),
                  Text("Contact Us", style: kSubtitleStyle,)
                ],
              )



            ],),
          ),

        ),
      )

    );
  }
}
