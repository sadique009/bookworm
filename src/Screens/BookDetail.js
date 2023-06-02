import {
  View,
  Text,
  Button,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Favourites from './Favourites';
import {useMyBooks} from '../../context/MyBooksProvider';

const BookDetail = ({route, navigation, show, item}) => {

  const {bookItem} = route.params;
  console.log('book details are: ', bookItem);

  const [favourites, setFavourites] = useState(false);
  const [favs, setFavs] = useState([]);
  const [showFavs, setShowFavs] = useState([]);
  const {isBookSaved, onToggleSave} = useMyBooks();

  const saved = isBookSaved(bookItem);

  // useEffect(() => {
  //   saveFavourites(bookItem);
  // }, [bookItem]);
  // useEffect(() => {
  //   getFavourites();
  // }, []);

  // const saveFavourites = async bookItem => {
  //   try {
  //     const saveFavs = JSON.stringify(bookItem);

  //     await AsyncStorage.setItem('favs', saveFavs);
  //     console.log('saved book deets are:', saveFavs);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // // saveFavourites();

  // const getFavourites = async () => {
  //   try {
  //     const favos = await AsyncStorage.getItem('favs');
  //     if (favos != null) {
  //       // setShowFavs(JSON.parse(favos));
  //       setShowFavs(JSON.parse(favos));
  //       console.log('retrieved book deets are:', favos);
  //       console.log('showFavs data is:', favos.volumeInfo.title);
  //       if (!favos === null) {
  //         console.log('showFavs data is:', showFavs.volumeInfo.title);
  //       } else {
  //         alert.alert('null');
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // getFavourites();

  // const addFavs = () => {
  //   setFavs([...favos]);
  // };

  // const saveFavourites = async bookItem => {
  //   try {
  //     await AsyncStorage.setItem('favs', bookItem);
  //     console.log('saved book deets are:', bookItem);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getFavourites = async () => {
  //   try {
  //     await AsyncStorage.getItem('favs');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  if (bookItem === '') {
    return (
      <View style={{flex: 1, backgroundColor: '#E6FFFD'}}>
        <Text style={styles.name1}>loading...</Text>
      </View>
    );
  } else {
    let thumbnail =
      bookItem.volumeInfo.imageLinks &&
      bookItem.volumeInfo.imageLinks.thumbnail &&
      bookItem.volumeInfo.imageLinks.smallThumbnail;
    return (
      <ScrollView style={styles.container}>
        <>
          <View key={bookItem.id} style={styles.card}>
            {thumbnail ? (
              <Image style={styles.image} source={{uri: thumbnail}} />
            ) : (
              <Image
                style={styles.image}
                s
                source={require('../../assets/genres/book.png')}
              />
            )}

            <View>
              <Text style={styles.name1}>{bookItem.volumeInfo.title}</Text>

              <Text style={styles.name2} numberOfLines={8} ellipsizeMode="tail">
                Description :- {bookItem.volumeInfo.description}
              </Text>
              <Text style={styles.name}>
                Published Date :- {bookItem.volumeInfo.publishedDate}
              </Text>
              <Text style={styles.name}>
                No of Pages :- {bookItem.volumeInfo.pageCount}
              </Text>
              {/* <Text style={styles.name}>
                Average Rating :- {bookItem.volumeInfo.averageRating}
              </Text> */}
              <Text style={styles.name}>
                Author name :- {bookItem.volumeInfo.authors}
              </Text>
              <Text style={styles.name}>
                Publisher name :- {bookItem.volumeInfo.publisher}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 25,
              }}>
              <View>
                <Text style={styles.name}>Add to favourites </Text>
              </View>
              <View>
                <EntypoIcon
                  // color={favourites === true ? 'red' : 'black'}
                  color={saved ? 'red' : 'grey'}
                  onPress={
                    () => {
                      onToggleSave(bookItem), alert('Item added to favourites');
                      // navigation.navigate('Favourites', {bookItem});
                    }
                    // setFavourites(true);

                    // {
                    //   saveFavourites;
                    // }
                    // {
                    //   getFavourites;
                    // }
                    // setFavs(...showFavs, showFavs);

                    // console.log('resultant data is:', showFavs);
                    // alert(showFavs.volumeInfo.title);

                    // setFavs(showFavs);
                    // navigation.navigate('Favourites', {showFavs});
                    // <View>
                    //   <Favourites />
                    // </View>;
                  }
                  name="heart"
                  size={28}
                />
              </View>
            </View>
            {/* {showFavs ? <Text>{showFavs.volumeInfo.title}</Text> : null} */}
          </View>

          {/* <View>
            <Text>{showFavs.volumeInfo.title}</Text>
          </View> */}
        </>
      </ScrollView>
    );
  }
};

// <SafeAreaView style={styles.container}>
//   {/* <Text>Category</Text> */}
//   <FlatList
//     data={bookItem}
//     renderItem={({item}) => (
//       <>
//         <View style={styles.categoryRow}>
//           <Text style={styles.title}>Title : {item.volumeInfo.title}</Text>
//           <Text style={styles.title2}>
//             PublishedDate : {item.volumeInfo.publishedDate}
//           </Text>
//           <Text style={styles.title2}>
//             No of Pages : {item.volumeInfo.pageCount}
//           </Text>
//         </View>
//         {/* <BookDetail show={showBookDetail} item={bookItem} /> */}
//       </>
//     )}></FlatList>
// </SafeAreaView>

// <View>
//   {/* <Text>{bookItem.volumeInfo.description}</Text> */}

// </View>
// <View style={styles.categoryRow}>
//   {/* <TouchableOpacity
//     onPress={() => {
//       navigation.navigate('BookDetail');
//       setBookItem(item);
//       {
//         bookItem;
//       }
//       console.log(bookItem);
//     }}
//     style={styles.categoryCard}> */}
//   <Text style={styles.title}>Title : {item.title}</Text>
//   <Text style={styles.title2}>
//     PublishedDate : {item.publishedDate}
//   </Text>
//   <Text style={styles.title2}>No of Pages : {item.pageCount}</Text>
//   {/* </TouchableOpacity> */}
// </View>

//   if (!show) {
//     return null;
//   }
//   return (
//     <View>
//       <Text>{item.voulmeInfo.title}</Text>
//       <Text>{item.volumeInfo.pageCount}</Text>
//       <Text>{item.volumeInfo.publishedDate}</Text>
//       <Button title="close" />
//     </View>
//   );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6FFFD',
  },
  card: {
    // borderWidth: 2,
    borderRadius: 20,
    padding: 15,
    margin: 16,
    backgroundColor: 'white',
    elevation: 15,
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
  name2: {
    fontSize: 18,
    padding: 2.5,
    marginBottom: 15,
    color: 'black',
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

export default BookDetail;
