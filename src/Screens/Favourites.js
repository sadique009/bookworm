import {
  SafeAreaView,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
// import BookDetail from './BookDetail';
// import {} from 'react-native-gesture-handler';

import {useContext, useState} from 'react';
// import {MyBooksContext} from '../../context/MyBooksProvider';

import {useMyBooks} from '../../context/MyBooksProvider';
import BookDetail from './BookDetail';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default function Favourites({route, favs, showFavs, navigation}) {
  const [favourites, setFavourites] = useState(true);

  const {savedBooks} = useMyBooks();
  console.log('fav books :', savedBooks);
  // const {bookItem} = route.params;

  // console.log(saveFavs);

  // we are consuming the context here.
  // const context = useContext(MyBooksContext);

  // alternate method to write the above code.
  // const {test} = useMyBooks();
  // console.log(context);
  // console.log(test);

  // console.log('showFavs is :', showFavs);

  // if (showFavs === '') {
  //   return (
  //     <View>
  //       <Text style={styles.name1}>loading:</Text>
  //     </View>
  //   );
  // } else {

  const removeFav = () => {
    setFavourites(false);
    alert('Are you sure you want to remove?');
  };

  // if (savedBooks) {
  //   return (
  //     <ScrollView style={styles.container}>
  //       <View style={styles.card}>
  //         <View>
  //           <Image
  //             style={styles.image}
  //             source={require('../../assets/genres/book.png')}
  //           />
  //         </View>
  //         <View>
  //           <Text style={styles.name1}>{savedBooks.volumeInfo.title}</Text>
  //           <Text style={styles.name}>Price : Rs 328.71</Text>
  // <View
  //   style={{
  //     flexDirection: 'row',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     margin: 20,
  //   }}>
  // <View>
  //   <Text style={styles.name}>Remove from favourites</Text>
  // </View>
  //             <View>
  //               <EntypoIcon
  //                 color={favourites === true ? 'red' : 'grey'}
  //                 // color={saved ? 'red' : 'black'}
  //                 onPress={() => removeFav()}
  //                 // alert('Item added to favourites');
  //                 // onToggleSave(bookItem)
  //                 // {
  //                 //   saveFavourites;
  //                 // }
  //                 // {
  //                 //   getFavourites;
  //                 // }
  //                 // setFavs(...showFavs, showFavs);

  //                 // console.log('resultant data is:', showFavs);
  //                 // alert(showFavs.volumeInfo.title);

  //                 // setFavs(showFavs);
  //                 // navigation.navigate('Favourites', {showFavs});
  //                 // <View>
  //                 //   <Favourites />
  //                 // </View>;

  //                 name="heart"
  //                 size={28}
  //               />
  //             </View>
  //           </View>
  //         </View>
  //       </View>
  //     </ScrollView>

  //     // <View>
  //     //   <Text>{bookItem.volumeInfo.title}</Text>
  //     // </View>
  //   );
  // }

  // let thumbnail =
  //   item.volumeInfo.imageLinks &&
  //   item.volumeInfo.imageLinks.thumbnail &&
  //   item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <View style={styles.container}>
      <FlatList
        data={savedBooks}
        renderItem={({item}) => (
          <View style={styles.card}>
            {item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.thumbnail &&
            item.volumeInfo.imageLinks.smallThumbnail ? (
              <Image
                style={styles.image}
                source={{
                  uri:
                    item.volumeInfo.imageLinks &&
                    item.volumeInfo.imageLinks.thumbnail &&
                    item.volumeInfo.imageLinks.smallThumbnail,
                }}
              />
            ) : (
              <Image
                style={styles.image}
                s
                source={require('../../assets/genres/book.png')}
              />
            )}
            <Text style={styles.name1}>{item.volumeInfo.title}</Text>
            {item.saleInfo.retailPrice && item.saleInfo.retailPrice.amount ? (
              <Text style={styles.name}>
                Price : {item.saleInfo.retailPrice && item.saleInfo.retailPrice.amount}
              </Text>
            ) : (
              <Text style={styles.name}>Price : Not available</Text>
            )}
            <View>
              {/* <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 20,
                }}>
                <View>
                  <Text style={styles.name}>Remove from favourites</Text>
                </View>
                <EntypoIcon
                  color={favourites === true ? 'red' : 'grey'}
                  // color={saved ? 'red' : 'black'}
                  onPress={() => removeFav()}
                  // alert('Item added to favourites');
                  // onToggleSave(bookItem)
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

                  name="heart"
                  size={28}
                />
              </View> */}
            </View>
          </View>
        )}></FlatList>
      {/* <Text>Favourites</Text> */}
    </View>
  );
}

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
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 2.5,
  },
  image: {
    width: 400,
    height: 250,
    alignSelf: 'center',
    marginBottom: 5,
    padding: 10,
    borderRadius: 10,
  },
});
