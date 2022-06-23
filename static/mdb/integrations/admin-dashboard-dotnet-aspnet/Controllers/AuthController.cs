using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using App.Models;
using Microsoft.AspNetCore.Authentication;
using App.Service;
using AutoMapper;
using App.DTOs;

namespace App.Controllers
{
    public class AuthController : Controller
    {
        private readonly ILogger<AuthController> _logger;
        private readonly IMapper _mapper;
        private readonly IAuthService _authService;
        private readonly IUserService _userService;
        private readonly IHashService _hashService;

        public AuthController(ILogger<AuthController> logger, IAuthService authService, IUserService userService, IHashService hashService, IMapper mapper)
        {
            _logger = logger;
            _mapper = mapper;
            _authService = authService;
            _userService = userService;
            _hashService = hashService;
        }

        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync();

            return RedirectToAction("Index", "Home");
        }

        [HttpPost(Name="Login")]
        public async Task<IActionResult> Login(LoginDTO loginDTO)
        {
            if (loginDTO.Email == null || loginDTO.Password == null)
            {
                return BadRequest(loginDTO);
            }

            var user = _authService.AuthenticateUser(loginDTO);

            if (user == null)
            {
                return Unauthorized();
            }
            else
            {
                await _authService.Login(HttpContext, user);
                
                return Ok(_mapper.Map<UserDTO>(user));
            }
        }

        [HttpPost(Name="Register")]
        public ActionResult Register(CreateUserDTO createUserDTO)
        {
            var userModel = _mapper.Map<User>(createUserDTO);
            var userDTO = _mapper.Map<UserDTO>(userModel);

            userModel.Password = _hashService.Hash(userModel.Password);
            
            var user = _userService.AddUser(userModel);

            if (user == null)
            {
                return Conflict();
            }

            _userService.SaveChanges();
            
            return Ok();
        }
    }
}