// import {View, Text} from 'react-native';
// import React from 'react';

// const BookCategory = ({booksData, navigation}) => {
//   console.log(booksData);
//   return (
//     <View>
//       <Text>BookCategory</Text>
//     </View>
//   );
// };

// export default BookCategory;

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
// import {} from 'react-native-gesture-handler';
import BookDetail from './BookDetail';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {useMyBooks} from '../../context/MyBooksProvider';

export default function BookCategory({route, navigation}) {
  const [showBookDetail, setShowBookDetail] = useState(false);
  const [favourites, setFavourites] = useState(false);
  // const [bookItem, setBookItem] = useState('');
  const {isBookSaved, onToggleSave} = useMyBooks();

  // const saved = isBookSaved(bookItem);

  // console.log('line no 24', booksData);

  // useEffect(() => {
  //   categData();
  // }, []);

  // const categData = () => {
  //   const {booksData} = route.params;
  //   return booksData;
  // };
  const {booksData} = route.params;

  console.log('params data:', booksData);

  // if (booksData === '') {
  //   return (
  //     <View>
  //       <Text style={styles.name1}>loading...</Text>
  //     </View>
  //   );
  // } else {
  return (
    <>
      <ScrollView style={styles.container}>
        {booksData.map(item => {
          // setBookItem(item);
          let thumbnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail &&
            item.volumeInfo.imageLinks.thumbnail;

          const unit = 'Rs';

          const price =
            item.saleInfo.retailPrice && item.saleInfo.retailPrice.amount;

          const previewlink = item.volumeInfo.previewLink;

          return (
            <View key={item.id} style={styles.card}>
              <TouchableOpacity
                onPress={() => {
                  // setBookItem(item);
                  const bookItem = item;
                  navigation.navigate('BookDetail', {
                    bookItem,
                  });

                  // console.log(bookItem);
                }}
                // style={styles.categoryCard}
              >
                {thumbnail ? (
                  <Image style={styles.image} source={{uri: thumbnail}} />
                ) : (
                  <Image
                    style={styles.image}
                    s
                    source={require('../../assets/genres/book.png')}
                  />
                )}

                {/* <Image
                    style={styles.image}
                    source={require('../../assets/genres/book.png')}
                    // source={{uri: item.volumeInfo.imageLinks.smallThumbnail}}
                    // source={thumbnail}
                  /> */}

                {/* <Image
                    style={styles.image}
                    // source={require('../../assets/genres/book.png')}
                    source={{uri: item.volumeInfo.imageLinks.smallThumbnail}}
                    // source={thumbnail}
                  /> */}
              </TouchableOpacity>

              <View>
                <Text style={styles.name1}>{item.volumeInfo.title}</Text>
                <Text style={styles.name}>
                  Published Date :- {item.volumeInfo.publishedDate}
                </Text>
                <Text style={styles.name}>
                  No of Pages :- {item.volumeInfo.pageCount}
                </Text>
                {/* <Linking style={styles.name}>{previewlink}</Linking> */}
                <TouchableOpacity onPress={() => Linking.openURL(previewlink)}>
                  <Text style={styles.name}>Preview Link :- {previewlink}</Text>
                </TouchableOpacity>
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
              {/* <View>
                  <EntypoIcon
                    // color={favourites === true ? 'red' : 'black'}
                    color={saved ? 'red' : 'black'}
                    onPress={
                      () =>
                        // setFavourites(true);
                        // alert('Item added to favourites');
                        onToggleSave(bookItem)
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
                    name="heart-outlined"
                    size={28}
                  />
                </View> */}
            </View>
          );
        })}
      </ScrollView>
    </>
    // <SafeAreaView style={styles.container}>
    //   {/* <Text>Category</Text> */}
    //   <FlatList
    //     data={booksData}
    //     numColumns={2}
    //     renderItem={({item}) => (

    //       (
    //         <>
    //           <View style={styles.categoryRow}>
    //             <TouchableOpacity
    //               onPress={
    //                 () => {
    //                   navigation.navigate('BookDetail', {bookItem});
    //                 }
    //                 // ,
    //                 // setShowBookDetail(true),
    //                 // setBookItem(item)
    //               }
    //               style={styles.categoryCard}>
    //               <Text style={styles.title}>
    //                 Title : {item.volumeInfo.title}
    //               </Text>
    //               <Text style={styles.title2}>
    //                 PublishedDate : {item.volumeInfo.publishedDate}
    //               </Text>
    //               <Text style={styles.title2}>
    //                 No of Pages : {item.volumeInfo.pageCount}
    //               </Text>
    //             </TouchableOpacity>
    //           </View>
    //           {/* <BookDetail show={showBookDetail} item={bookItem} /> */}
    //         </>
    //       )
    //     )}></FlatList>
    // </SafeAreaView>
  );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6FFFD',
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
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
    width: 400,
    height: 300,
    alignSelf: 'center',
    marginBottom: 5,
    padding: 10,
    borderRadius: 10,
    // width: 200,
    // height: 200,
    // margin: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderRadius: 30,
    // overflow: 'hidden',
  },
});
