using System;
using System.Security.Claims;
using System.Threading.Tasks;
using App.DTOs;
using App.Models;
using Microsoft.AspNetCore.Http;

namespace App.Service 
{
    public interface IAuthService
    {
        User AuthenticateUser(LoginDTO loginDTO);

        Boolean IsAuthenticated(ClaimsPrincipal user);

        Boolean IsAdmin(ClaimsPrincipal user);

        Boolean IsProfileUpdateAuthorized(ClaimsPrincipal user, User userModel);

        Task Login(HttpContext context, User user);
    }
}