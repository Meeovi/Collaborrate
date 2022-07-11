const Knex = require('knex')
const casbin = require('casbin');
const KnexAdapter = require('casbin-knex-adapter');

(async function() {
  // Instantiate DB connection
  const knex = Knex(knexOptions)
  // Create adapter
  const adapter = await KnexAdapter.newAdapter({ knex });

  // Create casbin enforcer
  const enforcer = await casbin.newEnforcer('model.conf', adapter);

  // Load policy from DB
  await enforcer.loadPolicy();

  // Check permission
  if (await enforcer.enforce('user', 'resource', 'read')) {
    // Do something if user is authorized
  }

  // Modify policy
  // await enforcer.addPolicy(...)
  // await enforcer.removePolicy(...)
  // await adapter.removePolicyWhere({ 'v0': '00001' }) // needs to be reloaded from enforcer afterwards

  // Rewrite entire policy in DB
  await enforcer.savePolicy();
})();