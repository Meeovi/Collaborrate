using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using App.Data;
using App.DTOs;
using App.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;

namespace App.Service
{

    public class AuthService : IAuthService
    {
        private IUserRepository _repository;
        private IHashService _hashService;

        public AuthService(IUserRepository repository, IHashService hashService)
        {
            _repository = repository;
            _hashService = hashService;
        }

        public User AuthenticateUser(LoginDTO loginDTO)
        {
            var user = _repository.GetUserByEmail(loginDTO.Email);
            var validPassword = _hashService.Check(user.Password, loginDTO.Password).Verified;

            if (user != null && validPassword) {
                return user;
            }

            return null;
        }

        public bool IsAuthenticated(ClaimsPrincipal user)
        {
            return user != null && user.Identity != null && user.Identity.IsAuthenticated;
        }

        public bool IsAdmin(ClaimsPrincipal user)
        {
            if (user == null)
            {
                return false;
            }
            
            var roleClaim = user.Claims.First(c => c.Type == "UserRole");

            return roleClaim != null && roleClaim.Value == "Admin";
        }

        public bool IsProfileUpdateAuthorized(ClaimsPrincipal user, User userModel)
        {
            if (user == null || userModel == null || user.Identity == null)
            {
                return false;
            }

            return IsAuthenticated(user) && (IsAdmin(user) || user.Identity.Name == userModel.Email);
        }

        public Task Login(HttpContext context, User user)
        {
            var avatarSrc = user.Avatar == null ? "" : user.Avatar;

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Email),
                new Claim("Username", user.Name),
                new Claim("Avatar", avatarSrc),
                new Claim("UserRole", user.Role.Name)
            };

            var identity = new ClaimsIdentity(
                claims, CookieAuthenticationDefaults.AuthenticationScheme
            );

            var principal = new ClaimsPrincipal(identity);
            var props = new AuthenticationProperties();

            return context.SignInAsync(
                CookieAuthenticationDefaults.AuthenticationScheme, 
                principal,
                props);
        }
    }
}