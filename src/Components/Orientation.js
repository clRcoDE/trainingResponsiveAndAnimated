import React, { Component } from 'react';
import { View, Text , StyleSheet , Image , Dimensions ,Platform  } from 'react-native';
// import actualDimensions from './Dimensions'


const deviceHeight =  Dimensions.get('window').height;
const deviceWidth =  Dimensions.get('window').width; 



export default class Orientation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation :null
    };

  //  var dims =  Dimensions.addEventListener('change',()=>{
  //     // console.warn(dims)
  //     var actualDimensions =  {
  //       // height:  (deviceHeight<deviceWidth) ? deviceWidth : deviceHeight,
  //       // width: (deviceWidth>deviceHeight) ? deviceHeight : deviceWidth

  //       height:300,
  //       width:200
  //   };
  //   })
    
    }

  

 isPortrait=()=>{
  const dim = Dimensions.get('window');

   dim.height >= dim.width ? this.setState({orientation:'Portrait'}) : this.setState({orientation:'Landscape'})
   

}


getStyles=()=>{
  return this.state.orientation === 'Portrait' ? portraitStyles: LandscapeStyles
}



// Dimensions.addEventListener()
//  Dimensions.addEventListener('change',()=>{
//   const actualDimensions =  {
//     height:  (deviceHeight<deviceWidth) ? deviceWidth : deviceHeight,
//     width: (deviceWidth>deviceHeight) ? deviceHeight : deviceWidth
// };
// })


  render() {
    return (
      <View style={this.getStyles().container}
       onLayout={this.isPortrait}
        >
        <Text  style={[portraitStyles.title]}>AAAAA</Text>
        <Text> {this.state.orientation} </Text>
        <Text>Locked in Portrait Android:AndroidManifest.xml</Text><Text> IOS:Info.plist</Text>
        <Text>Can Work With Orientations</Text>
      </View>
    );
  }
}

const portraitStyles = StyleSheet.create({
  container:{
    // flex:1,
    // width:this.actualDimensions.width,
    // height:this.actualDimensions.height,
    // ...this.actualDimensions,
    // ...this.dims,


height:deviceHeight,
width:deviceWidth,

    backgroundColor:'royalblue',
    alignItems:'center',
    justifyContent: 'center',
    
  },
  title: {
    ...Platform.select({
         ios: { fontFamily: 'San Francisco',fontSize:20 }, 
         android: { fontFamily: 'Roboto' , fontSize:60 }
    })
  }
});


const LandscapeStyles = StyleSheet.create({
  container:{
    // flex:1,

height:deviceWidth,
width:deviceHeight,
    backgroundColor:'purple',
    alignItems:'center',
    justifyContent: 'center',
    
  }
});
