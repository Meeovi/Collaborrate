using System;
using App.Models;

namespace App.DTOs
{
    public class UserDTO
    {
        public int Id { get; set; }

        public string Email { get; set; } 

        public string Name { get; set; }

        public string Avatar { get; set; }

        public int RoleId { get; set; }

        public Role Role { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}