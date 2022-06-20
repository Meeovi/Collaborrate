using System.ComponentModel.DataAnnotations;

namespace App.DTOs
{
    public class UpdateUserDTO
    {
        [Required]
        public int RoleId { get; set; } 
    }
}