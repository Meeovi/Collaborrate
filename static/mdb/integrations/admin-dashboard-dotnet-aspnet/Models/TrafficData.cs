using System;
using System.ComponentModel.DataAnnotations;

namespace App.Models
{
    public class TrafficData
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int Impressions { get; set; } 

        [Required]
        public int Clicks { get; set; }  

        [Required]
        public int Position { get; set; }

        [Required]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}