import React from 'react';
import {View,StyleSheet} from 'react-native';
import Carousel from '../../components/Carousel';
import styles from './styles';

const Main = ()=>{
  const data = [
    {
      title : 'Spider man',
      image : 'https://www.escapistmagazine.com/wp-content/uploads/2020/09/The-Amazing-Spider-Man-Suit.jpg'
    },
    {
      title : 'Iron man',
      image : 'https://images.hdqwalls.com/download/4k-iron-man-artwork-2020-np-2160x3840.jpg'
    },
    {
      title : 'hulk',
      image : 'https://cdn3.movieweb.com/i/article/GkCrsalk0vqGNyFD0aCosAc10IWj8s/1200:100/Planet-Hulk-Movie-Mark-Ruffalo.jpg'
    },
    {
      title : 'Avenger',
      image : 'https://cdn.vox-cdn.com/thumbor/Mg7FwlZqsuux7vUEldqvTveIDZI=/0x0:1920x1080/1200x800/filters:focal(865x348:1171x654)/cdn.vox-cdn.com/uploads/chorus_image/image/63337005/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.0.jpg'
    },
    {
      title : 'captain america',
      image : 'https://www.pixel4k.com/wp-content/uploads/2019/07/captain-america-artwork_1563219800.jpg'
    },
    {
      title : 'Black Widow',
      image : 'https://images.hdqwalls.com/download/black-widow-poster-4k-51-1280x2120.jpg'
    }
  ]

  return(
    <View style={styles.ctn}>
      <View style={styles.carousel}>
        <Carousel 
          data = {data}
          width = {300}
        />
      </View>
    </View>
  )
}


export default Main;
