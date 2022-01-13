import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',


    },
    body: {
        marginTop: 50,
    }
})

const SectionListComponent = () => {
    return (
        <View style={styles.body}>
            <SectionList
               sections={[
                   {title: "Name", data: ["Paul Ndambo"]},
                   {title: "University", data: ["Masinde Muliro University"]},
                   {title: "Course", data: ["Bsc. Information Technoloy"]},
                   {title: "Profession", data: ["Fullstack Software Developer"]},
                   {title: "Employer", data: ["Workfleek Technologies"]}
               ]} 

               renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
               renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
               keyExtractor={(item, index) => index}
            />
        </View>
    )
}

export default SectionListComponent
