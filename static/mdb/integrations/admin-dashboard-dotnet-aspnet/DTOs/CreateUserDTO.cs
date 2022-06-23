using System.ComponentModel.DataAnnotations;

namespace App.DTOs
{
    public class CreateUserDTO
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; } 

        [Required]
        public string Password { get; set; } 

        [Required]
        public string Name { get; set; }

        [Required]
        public string Avatar { get; set; }
        }
}