import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

export default class FBLoginButton extends Component {
    render() {
        return (
            <View>
                <LoginButton
                    readPermissions={['public_profile']}
                    onLoginFinished={(error, result) => {
                        if (error) {
                            console.log(error.message);
                            console.log('login has error: ' + result.error);
                        } else if (result.isCancelled) {
                            console.log('login is cancelled.');
                        } else {
                            AccessToken.getCurrentAccessToken().then(data => {
                                console.log(data.accessToken.toString());

                                const processRequest = new GraphRequest(
                                    '/me?fields=name,picture.type(large)',
                                    null,
                                    this.get_Response_Info
                                );
                                new GraphRequestManager().addRequest(processRequest).start();
                            });
                        }
                    }}
                    onLogoutFinished={() => alert("User logged out")} />
            </View>
        );
    }
}

module.exports = FBLoginButton;