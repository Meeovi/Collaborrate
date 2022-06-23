using System.ComponentModel.DataAnnotations;

namespace App.DTOs
{
    public class UserPassDTO
    {
        [Required]
        public string Password { get; set; } 

        [Required]
        public string OldPassword { get; set; }
    }
}