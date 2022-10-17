const fastify = require('fastify')()

fastify.register(require('fastify-kubernetes'), {
  // Optional, defaults to OS default Kubeconfig file location
  // file: '/home/app/.kube/config',
  // Context to use
  context: 'production'
})

fastify.get('/pods', async function (req, reply) {
  const client = this.kubernetes.api.CoreV1Api
  const result = await client.listNamespacedPod(this.kubernetes.namespace)
  reply.send(result.body.items)
})

fastify.listen(3000, err => {
  if (err) throw err
})