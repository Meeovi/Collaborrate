using App.DTOs;
using App.Models;
using AutoMapper;

namespace App.Profiles
{
    public class RoleProfile : Profile
    {
        public RoleProfile()
        {
            CreateMap<Role, RoleDTO>();
        }
    }
}