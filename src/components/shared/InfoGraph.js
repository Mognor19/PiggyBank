import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { LineChart } from "react-native-chart-kit";
import theme from '../theme';
const { width, height } = Dimensions.get("screen");


const InfoGraphs = ({Expense1, Expense2, Expense3, Expense4, Expense5, Date1, Date2, Date3, Date4, Date5}) => {
    
  return (
    <View style={styles.container}>
        <Text style={styles.text1}>InfoGraph</Text>
        <LineChart
            data={{
                labels: [Date1, Date2, Date3, Date4, Date5],
                datasets: [
                    {
                        data: [
                            Expense1,
                            Expense2,
                            Expense3,
                            Expense4,
                            Expense5
                        ]
                    }
                ]
            }}
            marginLeft= {30}
            width={Dimensions.get("window").width} // from react-native
            height={300}
            yAxisLabel="L."
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
                backgroundColor: theme.colors.gold,
                backgroundGradientFrom: theme.colors.white,
                backgroundGradientTo: theme.colors.dark,
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba( 200, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(35, 31, 32, ${opacity})`,
                propsForDots: {
                    r: "6",
                    strokeWidth: "1",
                    stroke: theme.colors.blue
                }
            }}
            bezier
            style={styles.chart}
        />
        
    </View>
  );
};

const styles = StyleSheet.create({
    container : {
        flex:1,
        width: width,
        backgroundColor: theme.colors.grey,
        paddingTop: 41,
        
    },
    text1:{
        margin:5,
        alignSelf: 'center',
        fontSize: 30,
    },
    chart:{
        marginVertical: 8,
    },
});

export default InfoGraphs;