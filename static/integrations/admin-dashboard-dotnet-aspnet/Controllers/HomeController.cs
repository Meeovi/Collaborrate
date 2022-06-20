using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using App.Service;
using AutoMapper;

namespace App.Controllers
{
    public class HomeController : Controller
    {
    private readonly ILogger<HomeController> _logger;
    private readonly IMapper _mapper;
    private readonly IAuthService _authService;
    private readonly IUserService _userService;

    public HomeController(ILogger<HomeController> logger, IAuthService authService, IUserService userService, IMapper mapper)
        {
            _logger = logger;
            _mapper = mapper;
            _authService = authService;
            _userService = userService;
        }

        public IActionResult Index()
        {
            if (_authService.IsAuthenticated(HttpContext.User))
            {
                return RedirectToAction("Dashboard");
            }
            else
            {
                return View();
            }
        }

        public IActionResult Dashboard()
        {
            if (_authService.IsAuthenticated(HttpContext.User))
            {
                return View();
            }
            else 
            {
                return RedirectToAction("Index");
            }
        }


         public IActionResult UserProfile()
        {
            if (_authService.IsAuthenticated(HttpContext.User))
            {
                return View();
            }
            else 
            {
                return RedirectToAction("Index");
            }
        }

        public IActionResult UserManagement()
        {   
            if (_authService.IsAuthenticated(HttpContext.User))
            {
                if (_authService.IsAdmin(HttpContext.User))
                {
                    return View();
                }
                
                return RedirectToAction("Dashboard");
            }
            else 
            {
                return RedirectToAction("Index");
            }
        }
    }
}