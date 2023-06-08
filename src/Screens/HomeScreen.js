import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  FlatList,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import BookCard from './BookCard';
import BookCategory from './BookCategory';
// import {TouchableHighlight} from 'react-native-gesture-handler';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import SearchScreen from './SearchScreen';

export default function HomeScreen() {
  const navigation = useNavigation();
  // const [booksData, setBooksData] = useState(["alice", "in", "wonderland"]);
  // const [booksData, setBooksData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  // const route = useRoute();

  const baseUrl = `https://www.googleapis.com/books/v1/volumes`;

  const request = async(category) => {
    setLoading(true);
    axios
      .get(`${baseUrl}?q=${category}`)
      .then(response => {
        const booksData=response.data.items
        // setBooksData(response.data.items);
        // setFilteredData(response.data.items);

        setLoading(false);

        // console.log('resp data is', response.data.items);
        navigation.navigate('BookCategory', {booksData});
        console.log('books data is', booksData);

        // if (booksData !== null) {

        // }
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });

      // try {
      //   const response = await axios.get('https://api.example.com/data'); // Replace with your API endpoint
      //   const data = response.data;
        
      //   // Navigate to the next screen and pass the data as a parameter
      //   navigation.navigate('NextScreen', { data });
      // } catch (error) {
      //   console.error('Error fetching data:', error);
      // }
  };

  const navigateFn = () => {
    navigation.navigate('BookCategory', {booksData});
  };

  // useEffect(() => {
  //   request('Romance+novel');
  // }, []);

  //   request();

  // const searchFilter = text => {
  //   if (text) {
  //     const newData = booksData.filter(item => {
  //       const itemData = item.volumeInfo.title
  //         ? item.volumeInfo.title.toUpperCase()
  //         : ''.toUpperCase();
  //       const textData = text.toUpperCase();
  //       return itemData.indexOf(textData) > -1;
  //     });
  //     setFilteredData(newData);
  //     setSearch(text);
  //   } else {
  //     setFilteredData(booksData);
  //     setSearch(text);
  //   }
  // };

  // const itemView = ({item}) => {
  //   return (
  //     <Text style={styles.itemStyle}>
  //       {item.id}
  //       {'. '}
  //       {item.volumeInfo.title.toUpperCase()}
  //     </Text>
  //   );
  // };

  // const ItemSeparatorView = () => {
  //   return (
  //     <View
  //       style={{height: 0.5, width: '100%', backgroundColor: '#c8c8c8'}}></View>
  //   );
  // };

  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
        }}
        style={styles.main}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            style={styles.input}
            value={search}
            onChangeText={text => {
              searchFilter(text);
            }}
            onPressIn={() => navigation.navigate('SearchScreen')}
            // onKeyPress={request}
            placeholder="Search for your favourite books..."
          />
          <FontistoIcon
            // onPress={() => {
            //   navigation.navigate('SearchScreen');
            //   // alert('search pressed');
            // }}
            style={{position: 'absolute', right: 35}}
            name="search"
            size={25}
            color="black"
          />
        </View>

        {/* <Button title="search" /> */}

        <Text style={styles.heading}>Categories</Text>

        <View style={styles.categoryRow}>
          <TouchableHighlight
            onPress={
              () => {
                request('Romance+novel');
              }
              // setBooksData(booksData);

              // navigation.navigate('BookCategory', {booksData});
            }>
            <ImageBackground
              source={require('../../assets/genres/genre1.jpg')}
              style={styles.categoryCard}>
              <Text style={styles.categoryName}>Romance</Text>
            </ImageBackground>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => {
              request('Memoir');
              // navigation.navigate('BookCategory', {booksData});
            }}>
            <ImageBackground
              source={require('../../assets/genres/genre2.jpg')}
              style={styles.categoryCard}>
              <Text style={styles.categoryName}>Memoir</Text>
            </ImageBackground>
          </TouchableHighlight>
        </View>

        <View style={styles.categoryRow}>
          <TouchableHighlight
            onPress={() => {
              request('Non-Fiction');
              // navigation.navigate('BookCategory', {booksData});
            }}>
            <ImageBackground
              source={require('../../assets/genres/genre3.jpg')}
              style={styles.categoryCard}>
              <Text style={styles.categoryName}>Non-Fiction</Text>
            </ImageBackground>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => {
              request('Business');
              // navigation.navigate('BookCategory', {booksData});
            }}>
            <ImageBackground
              source={require('../../assets/genres/genre4.jpg')}
              style={styles.categoryCard}>
              <Text style={styles.categoryName}>Business</Text>
            </ImageBackground>
          </TouchableHighlight>
        </View>

        <View style={styles.categoryRow}>
          <TouchableHighlight
            onPress={() => {
              request('Fiction');
              // navigation.navigate('BookCategory', {booksData});
            }}>
            <ImageBackground
              source={require('../../assets/genres/genre5.jpg')}
              style={styles.categoryCard}>
              <Text style={styles.categoryName}>Fiction</Text>
            </ImageBackground>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => {
              request('Historical+Fiction');
              // navigation.navigate('BookCategory', {booksData});
            }}>
            <ImageBackground
              source={require('../../assets/genres/genre6.jpg')}
              style={styles.categoryCard}>
              <Text style={styles.categoryName}>Historical Fiction</Text>
            </ImageBackground>
          </TouchableHighlight>
        </View>
        <View style={styles.categoryRow}>
          <TouchableHighlight
            onPress={() => {
              request('Biography');
              // navigation.navigate('BookCategory', {booksData});
            }}>
            <ImageBackground
              source={require('../../assets/genres/genre7.jpg')}
              style={styles.categoryCard}>
              <Text style={styles.categoryName}>Biography</Text>
            </ImageBackground>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => {
              request('"Crime+Thriller');
              // navigation.navigate('BookCategory', {booksData});
            }}>
            <ImageBackground
              source={require('../../assets/genres/genre8.jpg')}
              style={styles.categoryCard}>
              <Text style={styles.categoryName}>Crime Thriller</Text>
            </ImageBackground>
          </TouchableHighlight>
        </View>

        {/* <BookCard book={booksData} /> */}
      </ScrollView>
      {/* <View>
          <FlatList
            data={booksData}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={itemView}
          />
        </View> */}
    </>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,

    // marginBottom: 65,
    backgroundColor: '#E6FFFD',
  },
  input: {
    width: '90%',
    height: 70,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    margin: 10,
    padding: 20,
    // elevation: 10,
  },
  heading: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 35,
    color: 'black',
    marginBottom: 15,
    marginTop: 10,
  },
  categoryRow: {
    flexDirection: 'row',
  },
  categoryCard: {
    width: 200,
    height: 200,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,

    // this is added in order to make the "borderRadius" work in "ImageBackground".
    overflow: 'hidden',
    elevation: 25,
  },
  categoryName: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  itemStyle: {
    padding: 15,
  },
});
