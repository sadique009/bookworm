import {View, Text} from 'react-native';
import React, {useState, createContext, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// export const MyBooksContext = createContext({});
const MyBooksContext = createContext({});
const MyBooksProvider = ({children}) => {
  const [savedBooks, setSavedBooks] = useState([]);

  const areBooksTheSame = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
  };

  const isBookSaved = bookItem => {
    return savedBooks.some(savedBook => areBooksTheSame(savedBook, bookItem));
  };

  const onToggleSave = bookItem => {
    if (isBookSaved(bookItem)) {
      // remove from saved.
      setSavedBooks(books => {
        books.filter(savedBook => {
          !areBooksTheSame(savedBook, bookItem);
        });
      });
    } else {
      // add to saved.
      setSavedBooks(bookItems => [bookItem, ...bookItems]);
    }
  };

  // useEffect(() => {
  //   saveFavourites(bookItem);
  // }, [bookItem]);
  // useEffect(() => {
  //   getFavourites();
  // }, []);

  const saveFavourites = async bookItem => {
    try {
      const saveFavs = JSON.stringify(bookItem);

      await AsyncStorage.setItem('favs', saveFavs);
      console.log('saved book deets are:', saveFavs);
    } catch (error) {
      console.log(error);
    }
  };
  // saveFavourites();

  const getFavourites = async () => {
    try {
      const favos = await AsyncStorage.getItem('favs');
      if (favos != null) {
        // setShowFavs(JSON.parse(favos));
        setShowFavs(JSON.parse(favos));
        console.log('retrieved book deets are:', favos);
        console.log('showFavs data is:', favos.volumeInfo.title);
        if (!favos === null) {
          console.log('showFavs data is:', showFavs.volumeInfo.title);
        } else {
          alert.alert('null');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MyBooksContext.Provider value={{onToggleSave, isBookSaved, savedBooks}}>
      {children}
    </MyBooksContext.Provider>
    // <View>
    //   <Text>MyBooksProvider</Text>
    // </View>
  );
};

// we create a custom hook that simply calls the useContext with "MyBooksContext".
// here, we are consuming the context.
export const useMyBooks = () => useContext(MyBooksContext);

export default MyBooksProvider;
