module.exports = function(grunt) {

  grunt.initConfig({
    aws: grunt.file.readJSON('aws-keys.json'), // Read the file
    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>', // Use the variables
        secretAccessKey: '<%= aws.AWSSecretKey %>', // You can also use env variables
        region: 'us-west-1'
      },
      dist: {
        options: {
          bucket: 'robinhood-fec-shehu',
          differential: true // Only uploads the files that have changed
        },
        files: [
          {
            expand: true,
            cwd: "public/dist",
            src: ["*.js"],
            dest: "",
            'action': 'upload',
          }
        ]
      },
    },
  });

  grunt.loadNpmTasks('grunt-aws-s3');

  grunt.registerTask('deploy', ['aws_s3']);

};