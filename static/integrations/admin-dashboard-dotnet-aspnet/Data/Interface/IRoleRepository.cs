using System.Collections.Generic;
using App.Models;

namespace App.Data 
{
    public interface IRoleRepository
    {
        IEnumerable <Role> GetRoles();

        Role GetRoleById(int id);

        void SaveChanges();
    }
}