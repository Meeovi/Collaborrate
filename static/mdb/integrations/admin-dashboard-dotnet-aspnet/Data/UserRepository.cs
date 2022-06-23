using System;
using System.Collections.Generic;
using System.Linq;
using App.Models;
using Microsoft.EntityFrameworkCore;

namespace App.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context)
        {
            _context = context;
        }

        public User AddUser(User user)
        {
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }

            _context.Users.Add(user);

            return user;
        }

        public User GetUserById(int id)
        {
            return _context.Users.Include(u => u.Role).FirstOrDefault(p => p.Id == id);
        }

        public User GetUserByEmail(string email)
        {
            return _context.Users.Include(u => u.Role).FirstOrDefault(p => p.Email == email);
        }

        public IEnumerable<User> GetUsers()
        {
            return _context.Users.Include(u => u.Role).ToList();
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public void UpdateUser(User user)
        {
            _context.Users.Update(user);
        }

        public void DeleteUser(User user)
        {
            _context.Users.Remove(user);
        }
    }
}