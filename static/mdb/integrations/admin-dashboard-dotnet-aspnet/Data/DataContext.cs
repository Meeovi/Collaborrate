using System;
using App.Models;
using App.Service;
using Microsoft.EntityFrameworkCore;

namespace App.Data
{
    public class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<TrafficData> TrafficData { get; set; }

        private IHashService _hashService;

        public DataContext(DbContextOptions<DataContext> opt, IHashService hashService) : base(opt)
        {
            _hashService = hashService;
        }

        // Admin
        private String _adminName = "Admin";
        private String _adminEmail = "admin@mdbootstrap.com";
        private String _adminAvatar = "https://mdbootstrap.com/img/new/avatars/2.jpg";
        private String _adminPassword()
        {
            return _hashService.Hash("admin");
        }

        // User
        private String _userName = "User";
        private String _userEmail = "user@mdbootstrap.com";
        private String _userAvatar = "https://mdbootstrap.com/img/new/avatars/2.jpg";
        private String _userPassword()
        {
            return _hashService.Hash("user");
        }

        // Performance
        private Random _generator = new Random();
    

    private TrafficData generateTrafficData(int index)
        {
            var data = new TrafficData();

            data.Id = index;
            data.Impressions = _generator.Next(100, 601);
            data.Clicks = _generator.Next(5, 101);
            data.Position = _generator.Next(10, 50);
            data.CreatedAt = DateTime.Today.AddDays(-1 * index);

            return data;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Role>().HasData(
                new Role
                {
                    Id = 1,
                    Name = "User"
                },
                new Role
                {
                    Id = 2,
                    Name = "Admin"
                }
            );

            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = 1,
                    Name = _adminName,
                    Email = _adminEmail,
                    Avatar = _adminAvatar,
                    Password = _adminPassword(),
                    RoleId = 2
                },
                new User
                {
                    Id = 2,
                    Name = _userName,
                    Email = _userEmail,
                    Avatar = _userAvatar,
                    Password = _userPassword(),
                    RoleId = 1
                }
            );

            modelBuilder.Entity<TrafficData>().HasData(
                generateTrafficData(1),
                generateTrafficData(2),
                generateTrafficData(3),
                generateTrafficData(4),
                generateTrafficData(5)
            );
        }
    }
}