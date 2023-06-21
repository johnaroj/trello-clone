import { storage, ID } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;
  const fileUploaded = await storage.createFile(
    "6490a2400d7f06a0bd00",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
