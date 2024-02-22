//Userlist
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const renderUserItem = ({ item }) => (
        <View style={styles.userContainer}>
            <Text style={styles.userInfo}>Name: {item.name}</Text>
            <Text style={styles.userInfo}>Username: {item.username}</Text>
            <Text style={styles.userInfo}>Email: {item.email}</Text>
            <Text style={styles.userInfo}>Address: {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}</Text>
            <Text style={styles.userInfo}>Phone: {item.phone}</Text>
            <Text style={styles.userInfo}>Website: {item.website}</Text>
            <Text style={styles.userInfo}>Company: {item.company.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Users List</Text>
            <FlatList
                data={users}
                renderItem={renderUserItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
        color: 'black', 
    },
    userContainer: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: 'white', 
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
        width: '95%',
    },
    userInfo: {
        marginBottom: 5,
        color: 'black',
    },
});

export default UserList;
