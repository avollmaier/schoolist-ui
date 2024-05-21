module.exports = {
  'edge-service': {
    input: './swagger/edge-service/swagger.json',
    output: './app/api/model/edge-service',
  },
  'course-service': {
      input: './openapi.yaml',
      output: './app/api/model/course-service',
  },
};