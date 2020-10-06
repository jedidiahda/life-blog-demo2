import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';


export default class LikeSummary extends React.Component {
    constructor(props) {
        super(props);
        const { } = props;
        this.state = {
            noShared:0,
            noLiked:0,
            noComment:0,
        };
    };

    // static propTypes = {
    //     id: PropTypes.string.isRequired,
    //     fullname: PropTypes.string.isRequired,
    //     relationship: PropTypes.string.isRequired,
    //     identity: PropTypes.string.isRequired,
    //     sharePercent: PropTypes.number.isRequired,
    // };

    // static defaultProps = {
    //     id: null,
    //     fullname: '',
    //     relationship: '',
    //     relationship: '',
    //     sharePercent: 0
    // };

    render() {
        const { noComment,noLiked,noShared } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.buttonGroup}>
                    <Image
                        style={styles.tinyIcon}
                        source={require('../assets/love.png')}
                    />
                    <Text style={styles.text}>
                        {noLiked} likes
                    </Text>
                </View>
                <View style={styles.buttonGroup}>
                    <Image
                        style={styles.tinyIcon}
                        source={require('../assets/share_blank.png')}
                    />
                    <Text style={styles.text}>
                        {noShared} shares
                    </Text>
                </View>
                <View style={styles.buttonGroup}>
                    <Image
                        style={styles.tinyIcon}
                        source={require('../assets/comment_grey.png')}
                    />
                    <Text style={styles.text}>
                        {noComment} comments
                    </Text>
                </View>
            </View>
        );
    };

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderColor: 'grey',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'flex-end',
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
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingRight:8,
    },
    sharePercent: {
        color: 'red'
    },
    tinyIcon: {
        width: 20,
        height: 20
    },
    text: {
        color: 'grey',
        paddingLeft:5
    }
});