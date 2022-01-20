using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyFirstASPNETapp.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MyFirstASPNETapp.Controllers
{
    public class HomeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]

        public IActionResult Calculator()
        {
            return View();
        }

        //add attribute to method
        [HttpPost]
        //method overloading
        public IActionResult Calculator(CalcModel model)
        {
            return View();
        }
    }
}
