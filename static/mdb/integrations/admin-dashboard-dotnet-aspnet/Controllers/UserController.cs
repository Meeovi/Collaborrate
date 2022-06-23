using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using App.Models;
using AutoMapper;
using App.DTOs;
using App.Service;

namespace App.Controllers
{
    [Route("/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IUserService _userService;
        private readonly IRoleService _roleService;
        private readonly IAuthService _authService;
        private readonly IHashService _hashService;

        public UserController(IMapper mapper, IUserService userService, IRoleService roleService, IHashService hashService, IAuthService authService)
        {
            _mapper = mapper;
            _userService = userService;
            _roleService = roleService;
            _authService = authService;
            _hashService = hashService;
        }

        [HttpGet]
        public ActionResult <IEnumerable<UserDTO>> GetUsers()
        {
            if (_authService.IsAuthenticated(HttpContext.User))
            {
                if (_authService.IsAdmin(HttpContext.User))
                {
                    var users = _userService.GetUsers();

                    return Ok(_mapper.Map<IEnumerable<UserDTO>>(users));
                }
                
                return Forbid();
            }

            return Unauthorized();
        }

        [HttpGet("{id}", Name="GetUserById")]
        public ActionResult <UserDTO> GetUserById(int id)
        {
            if (_authService.IsAuthenticated(HttpContext.User))
            {
                if (_authService.IsAdmin(HttpContext.User))
                {
                    var user = _userService.GetUserById(id);

                    if (user != null) 
                    {
                        return Ok(_mapper.Map<UserDTO>(user));
                    }

                    return NotFound();
                }

                return Forbid();
            }

            return Unauthorized();
        }

        [HttpPut("{id}")]
        public ActionResult <UserDTO> UpdateUserRole(int id, UpdateUserDTO updateUserDTO)
        {
            if (_authService.IsAuthenticated(HttpContext.User))
            {
                if (_authService.IsAdmin(HttpContext.User))
                {
                    var role = _roleService.GetRoleById(updateUserDTO.RoleId);
                    var user = _userService.GetUserById(id);

                    if (user == null)
                    {
                        return NotFound();
                    }

                    if (role == null)
                    {
                        return BadRequest();
                    }

                    user.RoleId = updateUserDTO.RoleId;

                    _userService.UpdateUser(user);

                    _userService.SaveChanges();

                    return Ok(_mapper.Map<UserDTO>(user));
                }
                
                return Forbid();
            }

            return Unauthorized();
        }

        [HttpDelete("{id}")]
        public ActionResult<int> DeleteUser(int id)
        {
            if (_authService.IsAuthenticated(HttpContext.User))
            {
                if (_authService.IsAdmin(HttpContext.User))
                {
                    var user = _userService.GetUserById(id);

                    if (user == null)
                    {
                        return NotFound();
                    }

                    _userService.DeleteUser(user);

                    _userService.SaveChanges();

                    return Ok();
                }
                
                return Forbid();
            }

            return Unauthorized();
        }

        [HttpPut("profile")]
        public ActionResult <string> UpdateProfile(UserProfileDTO userProfileDTO)
        {
            var user = _userService.GetUserByEmail(HttpContext.User.Identity.Name);

            if (user != null)
            {
                var userNameValid = userProfileDTO.Name.Length > 0;

                if (!userNameValid)
                {
                    return BadRequest("Wrong username");
                }

                user.Name = userProfileDTO.Name;
                user.Avatar = userProfileDTO.Avatar;

                _userService.UpdateUser(user);

                _userService.SaveChanges();

                _authService.Login(HttpContext, user);

                return Ok("User profile updated");
            }
            
            return Unauthorized("Access denied");
        }

        [HttpPut("password")]
        public ActionResult <string> UpdatePassword(UserPassDTO userPassDTO)
        {
            if (_authService.IsAuthenticated(HttpContext.User))
            {
                var user = _userService.GetUserByEmail(HttpContext.User.Identity.Name);
                var validPassword = _hashService.Check(user.Password, userPassDTO.OldPassword).Verified;
                var newPassValid = userPassDTO.Password.Length > 0;

                if (user == null)
                {
                    return NotFound();
                }

                if (!validPassword || !newPassValid)
                {
                    return BadRequest("Password not valid");
                }

                user.Password = _hashService.Hash(userPassDTO.Password);

                _userService.UpdateUser(user);

                _userService.SaveChanges();

                return Ok("Password updated");
            }

            return Unauthorized("Access denied");
        }
    }
}