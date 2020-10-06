import { StatusBar } from 'expo-status-bar';
import React from 'react';
import uuidv4 from 'uuid/v4';
import { StyleSheet, Text, View, KeyboardAvoidingView ,ScrollView,Platform} from 'react-native';
import BlogMessageForm from './components/BlogMessageForm';

export default class App extends React.Component {

  state = {
    recommendations: [
      {

        id: 1,

        title: "Antenatal Screening",

        summary: "The following data is updated on a quarterly basis. Please visit the website of the Centre of Health Protection, Department of Health, for the latest data.",

        url: "https://data.gov.hk/en-data/dataset/hk-dh-dh_phlsb-phlsb-antenatal-screening",

        imageURL: "https://aicoeproducthh202008.z23.web.core.windows.net/health-women.jpg",
        noShared:50,
        noLiked:100,
        noComment:30



      },

      {

        id: 2,

        title: "Birth Statistics",

        summary: "Birth Statistics (i) Number of Known Births for Different Sexes and Crude Birth Rate for the Period from 1981 to 2017 (ii) Percentage Distribution of Live Births by Birth Weight for the Period from 2012 to 2017",

        url: "https://data.gov.hk/en-data/dataset/hk-dh-dh_ncddhss-ncdd-dataset-2",

        imageURL: "https://aicoeproducthh202008.z23.web.core.windows.net/health-women.jpg",
        noShared:100,
        noLiked:400,
        noComment:150

      },

      {

        id: 3,

        title: "Detection Rate of Overweight & Obesity of 4-year old Children",

        summary: "Detection rate of overweight and obesity of 4-year-old children who attended Maternal and Child Health Centres in 2011 to 2019",

        url: "https://data.gov.hk/en-data/dataset/hk-dh-dh_ncddhss-ncdd-dataset-2",

        imageURL: "https://aicoeproducthh202008.z23.web.core.windows.net/health-women.jpg",
        noShared:10,
        noLiked:80,
        noComment:10
        

      }
    ]
  }




  render() {
    const {recommendations } = this.state;
    const rows = [];

    // console.log(recommendations)

    recommendations.map(({id,title, summary, url, imageURL,noShared,noLiked,noComment}) => {
      // console.log(imageURL)
      rows.push(
        <BlogMessageForm 
          key={uuidv4()}
          id={id}
          title={title}
          summary={summary}
          url={url}
          imageURL={imageURL}
          noShared={noShared}
          noLiked={noLiked}
          noComment={noComment}
        />
      )
    })

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
        enabled
      >
        <View style={styles.container}>
          
          <ScrollView style={styles.messageList}>
            {rows}
          </ScrollView>
        </View>
      </KeyboardAvoidingView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  messageList:{

  }
});
