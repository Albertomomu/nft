import { useState } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';

import { COLORS, NFTData} from '../constants';
import { FocusedStatusBar, NFTCard, HomeHeader } from '../components';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Home = () => {

  const [nftData, setnftData] = useState(NFTData)

  const handleSearch = (value) => {
    if(!value.length) setnftData(NFTData)
    const filteredData = NFTData.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase())
    })
    if(filteredData.length) {
      setnftData(filteredData)
    }else {
      setnftData(NFTData)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary}/>
      <View style={{ flex: 1 }}>
        <View style={{zIndex: 0}}>
          <FlatList 
            data={nftData}
            renderItem={({item}) => <NFTCard data={item}/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
          />
        </View>

        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary}}/>
          <View style={{ flex: 1, backgroundColor: COLORS.white}}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
