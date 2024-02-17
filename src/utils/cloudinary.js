import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// Method takes localFilePath then upload it to cloudinary

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload file on cloudinary
    const responce = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // ile upload successfully
    console.log("file is uploaded on cloudinary", responce.url);
    return responce;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove locally saved temp file as the upload operation got failed
    return null;
  }
};

cloudinary.uploader.upload(
  "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" },
  function (error, result) {
    console.log(result);
  }
);

export { uploadOnCloudinary };
