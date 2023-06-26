import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AlbumDetail = ({ album}) => {
  return (
    <View>
          <Text>{album.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default AlbumDetail
