import * as React from 'react';
import { ScrollView } from 'react-native';
import { List, MD3Colors } from 'react-native-paper';

export default function TripList() {
    // read data from local storage
    let a = []
    for (let i = 0; i < 100; i++) {
        a.push(i)
    }

    return (
        <ScrollView style={{ width: '100%', height: '100%' }}>
            <List.Section>
                {a.map((number) => (
                    <List.Subheader>Some title = {number}</List.Subheader>
                ))}
            </List.Section>
        </ScrollView>

    )

}
