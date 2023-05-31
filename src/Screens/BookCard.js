import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const BookCard = ({book}) => {
  console.log(book);
  return (
    <>
      {book.map(item => {
        return (
          <View style={styles.categoryRow}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('BookDetail', {booksData});
              }}
              style={styles.categoryCard}>
              <Text style={styles.title}>Title : {item.volumeInfo.title}</Text>
              <Text style={styles.title2}>
                PublishedDate : {item.volumeInfo.publishedDate}
              </Text>
              <Text style={styles.title2}>
                No of Pages : {item.volumeInfo.pageCount}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({});

export default BookCard;
