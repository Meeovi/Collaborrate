using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using App.Models;
using AutoMapper;
using App.DTOs;
using App.Service;

namespace App.Controllers
{
    [Route("/roles")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IRoleService _roleService;
        private readonly IAuthService _authService;

        public RoleController(IMapper mapper, IRoleService roleService, IAuthService authService)
        {
            _mapper = mapper;
            _roleService = roleService;
            _authService = authService;
        }

        [HttpGet]
        public ActionResult <IEnumerable<Role>> GetRoles()
        {
            if (_authService.IsAuthenticated(HttpContext.User))
            {
                if (_authService.IsAdmin(HttpContext.User))
                {
                    var roles = _roleService.GetRoles();

                    return Ok(_mapper.Map<IEnumerable<RoleDTO>>(roles));
                }
                
                return Forbid();
            }

            return Unauthorized();
        }
    }
}