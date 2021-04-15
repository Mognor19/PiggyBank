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
            width={width}
            height={300}
            yAxisLabel="L."
            yAxisInterval={1}
            chartConfig={{
                backgroundColor: theme.light.gold,
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba( 243, 223, 162, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(239, 230, 221, ${opacity})`,
                propsForDots: {
                    r: "6",
                    strokeWidth: "0",
                    stroke: theme.light.grey
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