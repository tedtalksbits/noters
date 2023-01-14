import React, { useState } from "react";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Flex } from "@chakra-ui/react";

const Folder = ({ id }) => {
   const [showActionButtons, setshowActionButtons] = useState(false);
   const [isEditing, setIsEditing] = useState(false);
   const [folderName, setFolderName] = useState({
      title: "Default title",
   });

   const handleShowActionButtons = () => {
      setshowActionButtons((prev) => !prev);
   };
   const handleIsEditing = () => {
      setIsEditing((prev) => !prev);
   };
   const handleChange = (e) => {
      setFolderName({ ...folderName, title: e.target.value });
   };
   return (
      <>
         <Box>
            <Flex>
               <Link href={`/${id}`}>
                  {isEditing ? "" : <p>{folderName.title}</p>}
               </Link>
               {isEditing && (
                  <form
                     onSubmit={(e) => {
                        handleIsEditing();
                        e.preventDefault();
                     }}
                  >
                     <input
                        type="text"
                        value={folderName.title}
                        onChange={handleChange}
                     />
                     <button type="submit" value="" hidden />
                  </form>
               )}
               <MoreVertIcon onClick={handleShowActionButtons} />
               {showActionButtons && (
                  <div className="action-buttons">
                     <DeleteIcon />
                     <EditIcon onClick={handleIsEditing} />
                  </div>
               )}
            </Flex>
         </Box>
      </>
   );
};

export default Folder;
