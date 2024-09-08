import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, SectionList } from 'react-native';

// Styles for the updated design
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f9', // Light background for modern look
    },
    row: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff', // White background for items
        borderRadius: 8, // Rounded corners
        marginHorizontal: 15, // Space between items
        marginVertical: 5, // Space between items vertically
        shadowColor: '#000', // Shadow for 3D effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3, // For Android shadow
    },
    name: {
        fontSize: 16,
        fontWeight: '500', // Slightly lighter weight for readability
        color: '#333', // Dark text color for contrast
    },
    separator: {
        height: 1,
        backgroundColor: '#ddd', // Light separator for modern look
    },
    sectionHeader: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#007bff', // Header background color
        color: '#fff', // White text color for header
        fontWeight: 'bold',
        fontSize: 18,
        borderTopLeftRadius: 8, // Rounded top corners
        borderTopRightRadius: 8, // Rounded top corners
    },
});

const groupPeopleByLastName = ({ _data }: { _data: any }) => {
    const data = [..._data];
    const groupedData = data.reduce((accumulator, item) => {
        const group = item.name.lastName[0].toUpperCase();

        if (accumulator[group]) {
            accumulator[group].data.push(item);
        } else {
            accumulator[group] = {
                title: group,
                data: [item],
            };
        }
        return accumulator;
    }, {});
    const sections = Object.keys(groupedData).map((key) => groupedData[key]);

    return sections.sort((a, b) => (a.title > b.title ? 1 : -1));
};

export default () => {
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={groupPeopleByLastName({ _data: people })}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <Text style={styles.name}>{item.name.title} {item.name.firstName} {item.name.lastName}</Text>
                    </View>
                )}
                renderSectionHeader={({ section }) => (
                    <View>
                        <Text style={styles.sectionHeader}>{section.title}</Text>
                    </View>
                )}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </SafeAreaView>
    );
};

const people = [
    { id: 1, name: { title: 'Ms', firstName: 'Emily', lastName: 'Smith' } },
    { id: 2, name: { title: 'Ms', firstName: 'Amy', lastName: 'Johnson' } },
    { id: 3, name: { title: 'Mr', firstName: 'John', lastName: 'Doe' } },
    { id: 4, name: { title: 'Ms', firstName: 'Sarah', lastName: 'Williams' } },
    { id: 5, name: { title: 'Mr', firstName: 'Michael', lastName: 'Brown' } },
    { id: 6, name: { title: 'Ms', firstName: 'Emily', lastName: 'Davis' } },
    { id: 7, name: { title: 'Mr', firstName: 'Michael', lastName: 'Wilson' } },
    { id: 8, name: { title: 'Ms', firstName: 'Sarah', lastName: 'Miller' } },
    { id: 9, name: { title: 'Mr', firstName: 'David', lastName: 'Garcia' } },
    { id: 10, name: { title: 'Ms', firstName: 'Emily', lastName: 'Rodriguez' } },
];
