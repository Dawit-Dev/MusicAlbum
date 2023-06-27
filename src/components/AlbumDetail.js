import React from 'react'
import { StyleSheet, Text} from 'react-native'
import Card from '../cards/Card'

const AlbumDetail = ({ album}) => {
  return (
    <Card>
          <Text>{album.title}</Text>
    </Card>
  )
}

const styles = StyleSheet.create({})

export default AlbumDetail
