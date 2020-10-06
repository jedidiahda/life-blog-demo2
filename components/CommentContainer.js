import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';


export default class CommentContainer extends React.Component {
    constructor(props) {
        super(props);
        const { } = props;
        this.state = {

        };
    };


    render() {
        const { } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.buttonGroup}>
                    <Image
                        style={styles.tinyIcon}
                        source={require('../assets/love_blanc.png')}
                    />
                    <Text style={styles.text}>
                        Like
                    </Text>
                </View>
                <View style={styles.buttonGroup}>
                    <Image
                        style={styles.tinyIcon}
                        source={require('../assets/share_blank.png')}
                    />
                    <Text style={styles.text}>
                        Share
                    </Text>
                </View>
                <View style={styles.buttonGroup}>
                    <Image
                        style={styles.tinyIcon}
                        source={require('../assets/comment_blanc.png')}
                    />
                    <Text style={styles.text}>
                        Comment
                    </Text>
                </View>


            </View>

        );
    };

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: 'grey',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    textInputContainer: {
        borderColor: '#D6D7DA',
        borderRadius: 2,
        borderWidth: 0,
        marginBottom: 5,
    },
    textInput: {
        height: 30,
        padding: 5,
        fontSize: 12,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#dfe2e5'
    },
    textInputTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sharePercent: {
        color: 'red'
    },
    tinyIcon: {
        width: 18,
        height: 18
    },
    text: {
        color: 'grey',
        paddingLeft:5
    },

});