import React, { useCallback } from 'react';
import { StyleSheet, View, Text, Linking, Image, Button } from 'react-native';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import LikeSummary from './LikeSummary';
import CommentContainer from './CommentContainer';

export default class BlogMessageForm extends React.Component {
    constructor(props) {
        super(props);
        const { id, title, summary, url, imageURL } = props;
        this.state = {
            id: uuidv4(),
            title: '',
            summary: '',
            url: '',
            imageURL: '',
            noShared: '',
            noLiked: '',
            noComment: ''
        };
    };

    handlePressLink = () => {
        console.log('hipress')

        const handlePress = useCallback(async () => {
            // Checking if the link is supported for links with custom URL scheme.
            const supported = await Linking.canOpenURL(url);

            if (supported) {
                // Opening the link with some app, if the URL scheme is "http" the web link should be opened
                // by some browser in the mobile
                await Linking.openURL(url);
            } else {
                Alert.alert(`Don't know how to open this URL: ${url}`);
            }
        }, [url]);


    }

    render() {
        const { title, summary, url, imageURL, noShared, noLiked, noComment } = this.props;

        const OpenURLButton = ({ url, children }) => {
            const handlePress = useCallback(async () => {
                // Checking if the link is supported for links with custom URL scheme.
                const supported = await Linking.canOpenURL(url);

                if (supported) {
                    // Opening the link with some app, if the URL scheme is "http" the web link should be opened
                    // by some browser in the mobile
                    await Linking.openURL(url);
                } else {
                    Alert.alert(`Don't know how to open this URL: ${url}`);
                }
            }, [url]);

            return <Text key={uuidv4()} style={{color: 'blue',textDecorationLine: 'underline'}} onPress={handlePress}>
            Learn more...
            </Text>
        };


        return (
            <View>
                <View style={styles.formContainer}>
                    <View>
                        <Image
                            key={uuidv4()}
                            style={styles.image}
                            resizeMode={'cover'}
                            source={{
                                uri: imageURL
                            }}
                        />
                        <View style={styles.titleContainer}>
                            <Text key={uuidv4()} style={styles.title}>
                                {title}
                            </Text>
                        </View>
                        <View style={styles.preHeadingContainer}>

                            <Text key={uuidv4()} style={styles.preHeading}>
                                {summary}
                            </Text>
                            <View>
                                <OpenURLButton url={url}>Learn more...</OpenURLButton>
                            </View>

                        </View>
                        <View>
                            <LikeSummary key={uuidv4()}
                                noShared={noShared}
                                noLiked={noLiked}
                                noComment={noComment}
                            />
                            <CommentContainer key={uuidv4()} />
                        </View>
                    </View>
                    <Text>

                    </Text>

                </View>

            </View>
        );
    };

};

const styles = StyleSheet.create({
    formContainer: {
        //flex: 1,
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#D6D7DA',
        padding: 15,

    },
    attributeContainer: {
        marginVertical: 8,
    },
    textInputContainer: {
        borderColor: '#D6D7DA',
        borderRadius: 2,
        borderWidth: 1,
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
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold'
    },
    titleContainer: {
        alignItems: 'flex-start',
        paddingTop: 5,
        paddingBottom: 5,


    },
    preHeadingContainer: {

    },
    preHeading: {
        textAlign: 'left',
        flexShrink: 1,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline'
    },
    buttonLink:{
        backgroundColor:'white',
        borderWidth:0,
        color:'blue'
    }

});