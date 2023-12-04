import { PostImage } from "@/components/ImageBB/imageUpload";
import { useAddProductsMutation } from "@/redux/features/productFeather/products";
import { useState } from "react";
import toast from "react-hot-toast";

const PostProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLink, setImageLink] = useState();
  const [addProducts, resInfo] = useAddProductsMutation();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [productData, setProductData] = useState({
    name: "",
    dis: "",
    image: imageLink,
    price: "",
    regPrice: "",
    instructor: "",
    enrollmentStatus: "open",
    thumbnail: "",
    duration: "",
    schedule: "",
    location: "",
  });

  const handleInputChange = (e, index, field) => {
    const { value, name } = e.target;

    if (index !== null) {
      const updatedKeyFeatures = [...productData.keyFeatures];
      updatedKeyFeatures[index][field] = value;
      setProductData({ ...productData, keyFeatures: updatedKeyFeatures });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  // handle submit also show toast if success
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: productData.name,
      dis: productData.dis,
      image: imageLink,
      price: productData.price,
      regPrice: productData.regPrice,
      instructor: productData.instructor,
      enrollmentStatus: productData.enrollmentStatus,
      thumbnail: productData.thumbnail,
      duration: productData.duration,
      schedule: productData.schedule,
      location: productData.location,
    };
    const res = await addProducts(data);

    if (resInfo.isSuccess) {
      toast.success("Your Product Added Successfully..!");
      setProductData({
        name: "",
        dis: "",
        image: "",
        price: "",
        regPrice: "",
        instructor: "",
        enrollmentStatus: "",
        thumbnail: "",
        duration: "",
        schedule: "",
        location: "",
      });
    }
    if (res.error) {
      toast.error("Something went wrong..!");
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    const imageUrl = await PostImage(file);
    setImageLink(imageUrl);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress === 100) {
        clearInterval(interval);
      }
    }, 100);
  };

  return (
    <div className="flex items-center justify-center min-h-screen pb-20 pt-36 bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="w-4/5 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-3xl font-semibold text-center text-gray-800">
          Add a Course
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              Course Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={productData?.name}
              onChange={(e) => handleInputChange(e, null, "name")}
              className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Product Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dis" className="block text-gray-600">
              Description
            </label>
            <textarea
              id="dis"
              name="dis"
              required
              value={productData.dis}
              onChange={(e) => handleInputChange(e, null, "dis")}
              className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
              rows="4"
              placeholder="Product Description"
            />
          </div>
          <div className="mb-10">
            <label htmlFor="image" className="block text-gray-600">
              Upload Product Image
            </label>
            <label
              htmlFor="image"
              className="w-full p-4 transition duration-300 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:bg-gray-100"
            >
              {selectedImage ? (
                <div>
                  <img
                    draggable={false}
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected Feather"
                    className="object-cover w-full rounded-md h-36"
                  />
                  {uploadProgress < 100 && (
                    <div className="mt-2">
                      <div className="w-full h-2 bg-blue-500 rounded-md">
                        <div
                          className="h-2 bg-blue-600"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-center">
                  Drag & drop an image or click to select
                </p>
              )}
            </label>
            <input
              type="file"
              required
              id="image"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <label htmlFor="price" className="block text-gray-600">
                Price
              </label>
              <input
                type="number"
                required
                id="price"
                name="price"
                value={productData.price}
                onChange={(e) => handleInputChange(e, null, "price")}
                className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus-border-blue-400"
                placeholder="Price"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="regPrice" className="block text-gray-600">
                Regular Price
              </label>
              <input
                type="number"
                id="regPrice"
                name="regPrice"
                required
                value={productData.regPrice}
                onChange={(e) => handleInputChange(e, null, "regPrice")}
                className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus-border-blue-400"
                placeholder="Regular Price"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <label htmlFor="instructor" className="block text-gray-600">
                Instructor
              </label>
              <input
                type="text"
                id="instructor"
                name="instructor"
                required
                value={productData.instructor}
                onChange={(e) => handleInputChange(e, null, "instructor")}
                className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus-border-blue-400"
                placeholder="Instructor"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="enrollmentStatus" className="block text-gray-600">
                Enrollment Status
              </label>
              <select
                id="enrollmentStatus"
                name="enrollmentStatus"
                value={productData.enrollmentStatus}
                onChange={(e) => handleInputChange(e, null, "enrollmentStatus")}
                className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus-border-blue-400"
              >
                <option value="open">Open</option>
                <option value="closed">Closed</option>
                <option value="in_progress">In Progress</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <label htmlFor="thumbnail" className="block text-gray-600">
                Thumbnail
              </label>
              <input
                type="text"
                id="thumbnail"
                name="thumbnail"
                required
                value={productData.thumbnail}
                onChange={(e) => handleInputChange(e, null, "thumbnail")}
                className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus-border-blue-400"
                placeholder="Thumbnail"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="duration" className="block text-gray-600">
                Duration
              </label>
              <input
                type="text"
                id="duration"
                name="duration"
                required
                value={productData.duration}
                onChange={(e) => handleInputChange(e, null, "duration")}
                className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus-border-blue-400"
                placeholder="Duration"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <label htmlFor="schedule" className="block text-gray-600">
                Schedule
              </label>
              <input
                type="time"
                id="schedule"
                name="schedule"
                required
                value={productData.schedule}
                onChange={(e) => handleInputChange(e, null, "schedule")}
                className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus-border-blue-400"
                placeholder="Schedule"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-600">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={productData.location}
                onChange={(e) => handleInputChange(e, null, "location")}
                className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus-border-blue-400"
                placeholder="Location"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Post Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostProduct;
