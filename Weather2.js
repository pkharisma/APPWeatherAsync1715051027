import React from 'react';
import { StyleSheet, Text, View,ActivityIndicator, TextInput, TouchableHighlight, Image } from 'react-native';

export default class Weather2 extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '-',
        description: '-',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
        loading: false,

      }
    };
  }
  async getWeather() {

    try {
        this.setState({loading: true });
        let response = await fetch(
            'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=baf5b812196adcaca52624ced832c53c&units=metric'
        );

        let responseJson = await response.json();
        return this.setState({
            loading: false,
            forecast: {
                main: responseJson.weather[0].main,
                description: responseJson.weather[0].description,
                temp: responseJson.main.temp,
                sunrise: responseJson.sys.sunrise,
                sunset: responseJson.sys.sunset,
                pressure: responseJson.main.pressure,
                humidity: responseJson.main.humidity,
                sea_level: responseJson.main.sea_level,
                grnd_level: responseJson.main.grnd_level,
                speed: responseJson.wind.speed
            }
        });
    } catch (error) {
        console.error(error);
        this.setState({loading: true });
    }
}
  render() {
    return (
    <View style={styles.containerMain}>
    <View style={styles.headerBar}>
            <Text style={styles.headerText}> Prakiraan Cuaca </Text>
        </View>
      <View style={styles.box1}>
          <Text style={styles.headerText}> Masukan Nama Kota </Text>
          <View style={styles.input}>
          <TextInput placeholder=" Masukan Nama kota "
              onChangeText={(city) => this.setState({ city })}/>
         </View>
            <TouchableHighlight activeOpacity={0.5} style={styles.button} onPress={() => this.getWeather()}>
            {
                 this.state.loading ? <ActivityIndicator color="white" size="large" style={styles.load} />
                    : <Text style={styles.footerText}>Lihat</Text>
            }
            </TouchableHighlight>
      </View>
      <View style={styles.box2}>
      <View style={styles.output2}>
        <View style={styles.iconContainer}>
          <Image source={description} style={styles.icon} />
       </View>
          <Text style={styles.Textbawah}>Deskripsi : { this.state.forecast.description} </Text>
          </View>
          <View style={styles.output}>
        <View style={styles.iconContainer}>
          <Image source={temp} style={styles.icon} />
       </View>
          <Text style={styles.Textbawah}> Suhu : { this.state.forecast.temp}°C </Text>
          </View>
          </View>
          <View style={styles.box2}>
          <View style={styles.output}>
        <View style={styles.iconContainer}>
          <Image source={main} style={styles.icon} />
       </View>
          <Text style={styles.Textbawah}> Cuaca : { this.state.forecast.main} </Text>
          </View>
          <View style={styles.output}>
        <View style={styles.iconContainer}>
          <Image source={wind} style={styles.icon} />
       </View>
          <Text style={styles.Textbawah}> Angin : { this.state.forecast.speed} </Text>
      </View>
    </View>
    <View style={styles.box2}>
      <View style={styles.output}>
        <View style={styles.iconContainer}>
          <Image source={sunrise} style={styles.icon} />
       </View>
          <Text style={styles.Textbawah}> Sunrise : { this.state.forecast.sunrise}
          </Text>
          </View>
          <View style={styles.output}>
        <View style={styles.iconContainer}>
          <Image source={sunset} style={styles.icon} />
       </View>
          <Text style={styles.Textbawah}> Sunset : { this.state.forecast.sunset} </Text>
          </View>
          </View>
          <View style={styles.box2}>
          <View style={styles.output}>
        <View style={styles.iconContainer}>
          <Image source={pressure} style={styles.icon} />
       </View>
          <Text style={styles.Textbawah}> Pressure : { this.state.forecast.pressure} </Text>
          </View>
          <View style={styles.output}>
        <View style={styles.iconContainer}>
          <Image source={humidity} style={styles.icon} />
       </View>
          <Text style={styles.Textbawah}> Humidity : { this.state.forecast.humidity} </Text>
      </View>
    </View>
    <View style={styles.box2}>
      <View style={styles.output}>
        <View style={styles.iconContainer}>
          <Image source={sea_level} style={styles.icon} />
       </View>
          <Text style={styles.Textbawah}> Sea Level : { this.state.forecast.sea_level}
          </Text>
          </View>
          <View style={styles.output}>
        <View style={styles.iconContainer}>
          <Image source={ground} style={styles.icon} />
       </View>
          <Text style={styles.Textbawah}> Ground Level : { this.state.forecast.grnd_level} </Text>
          </View>
          </View>


      <View style={styles.Footerbar}>
            <Text style={styles.footerText}> Putu Kharisma Widya Iswari - 1715051027 </Text>
        </View>
</View>
    );
  }
}
const temp = require('./img/suhu.png');
const main = require('./img/cuaca.png');
const wind = require('./img/angin.png');
const sunrise = require('./img/sunrise.png');
const sunset = require('./img/sunset.png');
const pressure = require('./img/pressure.png');
const humidity = require('./img/humidity.png');
const sea_level = require('./img/levellaut.png');
const ground = require('./img/levelground.png');
const description = require('./img/main-desc.png');

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#e8eaff',
    flex: 1,
    flexDirection: 'column',
   },
   iconContainer: {
    alignItems: 'center',
    backgroundColor: '#0066cc',



    justifyContent: 'center',
    height: 38,
    width: 38,
  },

  icon: {
    tintColor: 'white',
    height: 20,
    width: 20,
  },
  box1: {
    flex: 0.4,
    backgroundColor: '#99ccff',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

  },

  box2: {
    flex: 0.1,
    backgroundColor: '#b3d9ff',
    marginLeft: 10,
    marginRight: 10,

    marginBottom:-1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',


},

  button: {
    width: 80,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004080',
    flexDirection: 'row',



  },
  input: {
    width: 180,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',

  },
  output: {
    width: "50%",
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingRight: 20,

  },
  output2: {
    width: "50%",
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingRight: 20,

    marginBottom:5,
  },
  headerBar: {
    backgroundColor: "#0040ff",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 9,
    paddingTop: 15,
    height: 60,

    width: "100%",
    position: "relative",
},
Footerbar: {
  backgroundColor: "#0040ff",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: 100,
  paddingRight: 100,
  paddingBottom: 9,
  paddingTop: 11,
  height: 50,

  width: "100%",
  position: "relative",
},

headerText: {

    fontSize: 18,
    color: "black",
    textAlign: "center",
    fontWeight: 'bold'
},
footerText: {
  fontSize: 15,
  color: "white",
  textAlign: "center",
  fontWeight: 'bold'
},
Textbawah: {
  fontSize: 12,
  color: "black",

},
load: {
    position: "absolute",

    alignItems: "center",
    justifyContent: "center"
  },
});
