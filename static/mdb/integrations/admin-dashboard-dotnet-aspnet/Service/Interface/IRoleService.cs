using System.Collections.Generic;
using App.Models;

namespace App.Service 
{
    public interface IRoleService
    {
        void SaveChanges();

        IEnumerable <Role> GetRoles();

        Role GetRoleById(int id);
    }
}