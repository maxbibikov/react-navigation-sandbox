import Expo from 'expo';

export default async function signInWithGoogleAsync() {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: '965311372190-odvhbj4c5u8mjcmqm6rep2rnavrcftdg.apps.googleusercontent.com',
        iosClientId: '965311372190-k0881rr1oqv15rkla3t8uc9kn0quj5li.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return {cancelled: true};
      }
    } catch(e) {
      return {error: true};
    }
  }
