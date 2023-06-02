import {View, Text} from 'react-native';
import React, {useState, createContext, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// export const MyBooksContext = createContext({});

// the value of the context is usually an object with multiple fields,
// for different values that we want to expose to our application.
const MyBooksContext = createContext({});

const MyBooksProvider = ({children}) => {
  const [savedBooks, setSavedBooks] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // load the data when the component mounts.

  useEffect(() => {
    saveFavourites();
  }, []);

  useEffect(() => {
    if (loaded) {
      getFavourites();
    }
  }, [savedBooks]);

  const areBooksTheSame = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
  };

  const isBookSaved = bookItem => {
    return savedBooks.some(savedBook => areBooksTheSame(savedBook, bookItem));
  };

  // to toggle between the saved books.
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

  const saveFavourites = async () => {
    try {
      await AsyncStorage.setItem('favs', JSON.stringify(savedBooks));
      // console.log('saved book deets are:', saveFavs);
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
        setSavedBooks(JSON.parse(favos));
        // console.log('retrieved book deets are:', favos);
        // console.log('showFavs data is:', favos.volumeInfo.title);
        // if (!favos === null) {
        //   console.log('showFavs data is:', showFavs.volumeInfo.title);
        // } else {
        //   alert.alert('null');
        // }
      }
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MyBooksContext.Provider value={{onToggleSave, isBookSaved, savedBooks}}>
      {/* here, children is everything inside our component.(Navigation) */}
      {/* now all the screens inside the navigation will have access to our MyBooksProvider. */}

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
