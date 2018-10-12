# These are the recorded steps to generate the dawn of time shell repo to intialize the eBusiness project to start development on.
1. Run the following command: "sfdx force:project:create --projectname eBusiness" 
    - This command requires the sales force cli https://developer.salesforce.com/tools/sfdxcli
2. Initialize a git repo for the project.
    - This command requires git to be installed. https://git-scm.com/
3. Create a .gitignore file at the top level of the repo.
    - This file is used to ignore certain files that we would not want to track inside the repo.
4. Run the following command: "sfdx force:config:set defaultusername=StephenScratchOrg" 
    - Where 'StephenScratchOrg' is your scratch org. This will setup the scratch org to be the default in your local repo directory.
5. Once you have a generated community, run a pull on your scratch org with the following command: ""
