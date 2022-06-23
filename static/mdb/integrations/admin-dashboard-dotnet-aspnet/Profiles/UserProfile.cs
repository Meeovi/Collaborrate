using App.DTOs;
using App.Models;
using AutoMapper;

namespace App.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, UserDTO>();
            CreateMap<CreateUserDTO, User>();
            CreateMap<UserProfileDTO, User>();
            CreateMap<UpdateUserDTO, User>();
        }
    }
}