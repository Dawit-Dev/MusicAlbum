import React from 'react'
import { StyleSheet, Text} from 'react-native'
import Card from '../cards/Card'
import CardSection from '../cards/CardSection'

const AlbumDetail = ({ album}) => {
  return (
    <Card>
      <CardSection>
        <Text>{album.title}</Text>
      </CardSection>
    </Card>
  );
}

const styles = StyleSheet.create({})

export default AlbumDetail
