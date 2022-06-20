using System.ComponentModel.DataAnnotations;

namespace App.DTOs
{
    public class UserProfileDTO
    {
        [Required]
        public string Name { get; set; }

        public string Avatar { get; set; }
    }
}