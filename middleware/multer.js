const multer = require("multer");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3-v2");
const ENV = process.env;

const s3 = new AWS.S3({
  secretAccessKey: `${ENV.SECRET_KEY}`,
  accessKeyId: `${ENV.SECRET_KEY_ID}`,
  region: `${ENV.ORIGIN}`,
  correctClockSkew: true,
});

const uploader = (folder) =>
  multer({
    storage: multerS3({
      s3: s3,
      acl: "public-read",
      bucket: `${ENV.BUCKET_NAME}`,
      key: function (req, file, cb) {
        cb(null, file.originalname); //use Date.now() for unique file keys
      },
    }),
  });

async function addPathToBody(req, res, next) {
  if (req.files) {
    if (!Array.isArray(req.files)) {
      let files = {};
      Object.keys(req.files).map((key) => (files[key] = { files: [] }));
      for (var key in req.files) {
        req.files[key].map((file) =>
          files[key].files.push({
            url:
              file.path != undefined ? process.env.BASE_URL + file.path : null,
          })
        );
        req.body["images"] = files;
      }
    } else {
      let files = [];
      req.files.map((file) => {
        files.push({
          url: file.path != undefined ? process.env.BASE_URL + file.path : null,
        });
      });
      req.body["images"] = files;
    }
  }

  next();
}

module.exports = (folder = "/", field, type = "single") => {
  return [
    type === "array"
      ? uploader(folder).array(field)
      : type === "fields"
      ? uploader(folder).fields(field)
      : uploader(folder).single(field),
    addPathToBody,
  ];
};
