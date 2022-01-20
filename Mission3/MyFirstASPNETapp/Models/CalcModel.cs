using System;
using System.ComponentModel.DataAnnotations;

namespace MyFirstASPNETapp.Models
{
    public class CalcModel
    {
        [Required]
        [Range(1, 100)]
        public int assignments { get; set; }
        public int gp { get; set; }
        public int quizzes { get; set; }
        public int exams { get; set; }
        public int intex { get; set; }


    }
}
