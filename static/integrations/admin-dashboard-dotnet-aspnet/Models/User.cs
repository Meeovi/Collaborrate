using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace App.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; } 

        [Required]
        public string Password { get; set; }  

        [Required]
        public string Name { get; set; }

        public string Avatar { get; set; }

        [Required]
        public int RoleId { get; set; } = 1;

        [ForeignKey("RoleId")]
        public Role Role { get; set; }

        [Required]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}