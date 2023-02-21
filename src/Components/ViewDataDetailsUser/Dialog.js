import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

const DialogComponent = ({ url, isopen, ID, handleToClose }) => {
  var ipfs_hash = "http://ipfs.io/ipfs/"
  return (
    <Dialog open={isopen} onClose={handleToClose} id={ID}>
      <DialogTitle>{""}</DialogTitle>
      <DialogContent>
        <div
          id={ID}
          style={{
            backgroundImage: `url(${ipfs_hash+url})`,
            width: "400px",
            height: "400px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
