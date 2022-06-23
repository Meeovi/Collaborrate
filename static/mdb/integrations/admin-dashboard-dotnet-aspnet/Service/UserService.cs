using System.Collections.Generic;
using App.Data;
using App.Models;

namespace App.Service
{
    public class UserService : IUserService {

        private readonly IUserRepository _repository;

        public UserService(IUserRepository repository)
        {
            _repository = repository;
        }

        public User AddUser(User user)
        {
            var existingUser = _repository.GetUserByEmail(user.Email);

            if (existingUser == null) {
                _repository.AddUser(user);
                _repository.SaveChanges();

                return user;
            }

            return null;
        }

        public void DeleteUser(User user)
        {
            _repository.DeleteUser(user);
        }

        public User GetUserByEmail(string email)
        {
            var user = _repository.GetUserByEmail(email);

            return user;
        }

        public User GetUserById(int id)
        {
            var user = _repository.GetUserById(id);

            return user;
        }

        public IEnumerable<User> GetUsers()
        {
            var users = _repository.GetUsers();

            return users;
        }

        public void SaveChanges()
        {
            _repository.SaveChanges();
        }

        public void UpdateUser(User user)
        {
            _repository.UpdateUser(user);
        }
    }
}