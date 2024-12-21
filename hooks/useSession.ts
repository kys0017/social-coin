import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';

export function useSession() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return isLoggedIn;
}
