using System.Collections.Generic;
using App.Data;
using App.Models;

namespace App.Service
{

    public class RoleService : IRoleService {

        private readonly IRoleRepository _repository;

        public RoleService(IRoleRepository repository)
        {
            _repository = repository;
        }

        public Role GetRoleById(int id)
        {
            var Role = _repository.GetRoleById(id);

            return Role;
        }

        public IEnumerable<Role> GetRoles()
        {
            var Roles = _repository.GetRoles();

            return Roles;
        }

        public void SaveChanges()
        {
            _repository.SaveChanges();
        }
    }
}