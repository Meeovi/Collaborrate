const users = [
    {
      id: null,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      created_at: null,
      interface_locale: null,
      mediamanager: null,
      messages: null,
      permissions: null,
      projects: null,
      username: null,
      value: null,
      workspaces: null
    }
  ];
  
  module.exports = () => {
    getUsers: () => users;
    addUser: (user) => users.push(user);
  };