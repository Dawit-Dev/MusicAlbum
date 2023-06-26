import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://api.deezer.com/chart/0/albums")
      .then((response) => response.json())
      .then((data) => setAlbums(data.data));
  }, []);

  const renderAlbums = () => {
    return albums.map((album) => <Text key={album.id}>{album.title}</Text>);
  };

  return <View>{renderAlbums()}</View>;
};

const styles = StyleSheet.create({});

export default AlbumList;
