import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
// import {} from 'react-native-gesture-handler';

const SearchScreen = ({navigation}) => {
  const [booksData, setBooksData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const [bookItem, setBookItem] = useState('');
  const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=allBooks&maxResults=40`;
  //   const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=react`;

  useEffect(() => {
    request();
  }, []);

  const request = () => {
    axios
      .get(baseUrl)
      .then(response => {
        setBooksData(response.data.items);
        // console.log('booksData is:', booksData);
        setFilteredData(response.data.items);
        // console.log('filtered Data is:', filteredData);
        // console.log('search Data:', response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const searchFilter = text => {
    if (text) {
      const newData = booksData.filter(item => {
        const itemData =
          item.volumeInfo && item.volumeInfo.title
            ? item.volumeInfo && item.volumeInfo.title.toUpperCase()
            : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(booksData);
      setSearch(text);
    }
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
        }}
        style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            style={styles.input}
            value={search}
            placeholder="Search for your favourite books..."
            onChangeText={text => {
              searchFilter(text);
              console.log(text);
            }}
            // onKeyPress={request}
          />
          <FontistoIcon
            onPress={() => {
              alert('search pressed');
              searchFilter();
            }}
            style={{position: 'absolute', right: 35}}
            name="search"
            size={25}
            color="black"
          />
        </View>
        {filteredData.map(item => {
          let thumbnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.thumbnail &&
            item.volumeInfo.imageLinks.smallThumbnail;

          const unit = 'Rs';
          const price =
            item.saleInfo.retailPrice && item.saleInfo.retailPrice.amount;

          return !filteredData ? (
            <Text>'Loading...'</Text>
          ) : (
            <View key={item.id} style={styles.card}>
              <TouchableOpacity
                onPress={() => {
                  setBookItem(item);
                  navigation.navigate('BookDetail', {
                    bookItem,
                  });
                }}>
                {thumbnail ? (
                  <Image style={styles.image} source={{uri: thumbnail}} />
                ) : (
                  <Image
                    style={styles.image}
                    s
                    source={require('../../assets/genres/book.png')}
                  />
                )}
              </TouchableOpacity>

              <View>
                <Text style={styles.name1}>{item.volumeInfo.title}</Text>
                <Text style={styles.name}>
                  Published Date :- {item.volumeInfo.publishedDate}
                </Text>
                <Text style={styles.name}>
                  No of Pages :- {item.volumeInfo.pageCount}
                </Text>
                <Text style={styles.name}>
                  Average Rating :-{' '}
                  {item.volumeInfo.averageRating
                    ? item.volumeInfo.averageRating
                    : 'Not available'}
                </Text>
                <Text style={styles.name}>
                  Price :- {price ? `${unit} ${price}` : 'Not available'}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}></View>
            </View>
          );
        })}
      </ScrollView>
    </>
    // <View>
    //   <Text>{booksData}</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-evenly',
    // alignItems: 'center',

    backgroundColor: '#E6FFFD',
  },
  input: {
    width: '95%',
    height: 70,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    margin: 10,
    padding: 20,
    // elevation: 10,
  },

  // card: {
  //   width: '80%',
  //   height: '40%',
  //   justifyContent: 'center',
  // },
  card: {
    // borderWidth: 2,
    borderRadius: 20,
    padding: 15,
    margin: 16,
    backgroundColor: 'white',
    elevation: 15,
  },
  categoryCard: {
    backgroundColor: 'grey',
    width: 200,
    height: 200,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 20,
  },
  name1: {
    margin: 14,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  name: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 2.5,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'center',
  },
  title2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    alignItems: 'center',
  },
  image: {
    // width: 200,
    // height: 200,
    // margin: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderRadius: 30,
    // overflow: 'hidden',
    width: 400,
    height: 250,
    alignSelf: 'center',
    marginBottom: 5,
    padding: 10,
    borderRadius: 10,
  },
});

export default SearchScreen;
