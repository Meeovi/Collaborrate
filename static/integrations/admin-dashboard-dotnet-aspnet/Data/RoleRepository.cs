using System.Collections.Generic;
using System.Linq;
using App.Models;

namespace App.Data
{
    public class RoleRepository : IRoleRepository
    {
        private readonly DataContext _context;

        public RoleRepository(DataContext context)
        {
            _context = context;
        }

        public Role GetRoleById(int id)
        {
            return _context.Roles.FirstOrDefault(p => p.Id == id);
        }

        public IEnumerable<Role> GetRoles()
        {
            return _context.Roles.ToList();
        }
        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}