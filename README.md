# lama-backend

### Deployed Url = https://busy-erin-viper-vest.cyclic.app/

### Project Endpoints

1. *Retrieve Project Details*
   - *Endpoint:* /project
   - *Method:* GET
   - *Description:* Retrieve details of a specific project.

2. *Create New Project*
   - *Endpoint:* /project
   - *Method:* POST
   - *Description:* Create a new project.

3. *Delete Project*
   - *Endpoint:* /project
   - *Method:* DELETE
   - *Description:* Delete a specific project.

4. *Update Project*
   - *Endpoint:* /project
   - *Method:* PATCH
   - *Description:*Update a specific project.

5. *Get Projects by User*
   - *Endpoint:* /Project/all
   - *Method:* GET
   - *Description:* Retrieve all projects related to a user.
   - *Params:*
     - user (key)
     - email (email as parameter)

### Uploads Endpoints

1. *Retrieve Project Details*
   - *Endpoint:* /uploads
   - *Method:* GET
   - *Description:* Retrieve details of a specific project.

2. *Create New Upload*
   - *Endpoint:* /uploads
   - *Method:* POST
   - *Description:* Create a new Upload.

3. *Delete Upload*
   - *Endpoint:* /uploads
   - *Method:* DELETE
   - *Description:* Delete a specific upload.

4. *Update Upload*
   - *Endpoint:* /uploads
   - *Method:* PATCH
   - *Description:*Update a specific project.

5. *Get uploads by User*
   - *Endpoint:* /uploads/all
   - *Method:* GET
   - *Description:* Retrieve all uploads by projectId.
   - *Params:*
     - projectId (key)
