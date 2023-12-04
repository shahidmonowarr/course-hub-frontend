export const PostImage = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  const url = `https://api.imgbb.com/1/upload?key=64f67bdf230832be947d8c18566f658b`;
  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  // console.log(data);
  const imageUrl = data.data.display_url;
  return imageUrl;
};
