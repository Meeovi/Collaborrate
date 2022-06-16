import Parse from 'parse';

export default function ({redirect}) {
    // If the user is not authenticated
    let currentUser = Parse.User.current();
    if(!currentUser)
        return redirect('/register');
  }