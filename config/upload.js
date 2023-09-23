const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS =  require('aws-sdk');


require('aws-sdk/lib/maintenance_mode_message').suppress = true;



AWS.config.update({
    accessKeyId: process.env.aws_access_key_id,
    secretAccessKey: process.env.aws_secret_access_key,
    region: 'eu-north-1',
  });
  
  const s3 = new AWS.S3();
  
  
  
  const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'codevider-crm', 
        key: function (req, file, cb) {

            cb(null, `profile-photos/${Date.now()}-${file.originalname}`);
        },
        contentType:function (req, file, cb) {

          cb(null, file.mimetype);
      }
    }),
  });

module.exports = upload;