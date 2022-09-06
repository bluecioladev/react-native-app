import React from 'react'
import { useState } from 'react'
import { View, SafeAreaView, FlatList } from 'react-native'
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components'

import { COLORS, NFTData } from '../constants';



const Home = () => {
  const [nftData, setnftData] = useState(NFTData)

  const handleSearch = (value) => {
    if (!value.length === 0) return setnftData(nftData)

    const filteredData = nftData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))

    if (filteredData.length) {
      setnftData(filteredData)
    } else {
      setnftData(nftData)
    }

  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1

        }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />



        </View>

      </View>

    </SafeAreaView>
  )
}

export default Home