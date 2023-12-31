import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import AlbumDetail from "./AlbumDetail";

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://api.deezer.com/chart/0/albums")
      .then((response) => response.json())
      .then((data) => setAlbums(data.data));
  }, []);

  const renderAlbums = () => {
    return albums.map((album) => <AlbumDetail key={album.id} album={album} />);
  };

  return <ScrollView>{renderAlbums()}</ScrollView>;
};

const styles = StyleSheet.create({});

export default AlbumList;
