import React from "react";
import { StyleSheet, Text, View, Image, Linking } from "react-native";
import Card from "../cards/Card";
import CardSection from "../cards/CardSection";
import Button from "./Button";

const AlbumDetail = ({ album }) => {
  const {
    imageStyle,
    headerContentStle,
    imageContainerStyle,
    headerTextStyle,
    coverImageStyle,
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={imageContainerStyle}>
          <Image
            style={imageStyle}
            source={{ uri: album.artist.picture_medium }}
          />
        </View>
        <View style={headerContentStle}>
          <Text style={headerTextStyle}>{album.title}</Text>
          <Text>{album.artist.name}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={coverImageStyle} source={{ uri: album.cover_medium }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(album.link)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerContentStle: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  headerTextStyle: {
    fontSize: 18,
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
  imageContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  coverImageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
});

export default AlbumDetail;
