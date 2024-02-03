import Dialog from "@/ui/Dialog";
import { useState } from "react";

const DialogPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const renderBody = () => (
    <div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus
        at ultrices mi tempus imperdiet. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis
        leo vel. Risus at ultrices mi tempus imperdiet. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
        elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus
        at ultrices mi tempus imperdiet. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis
        leo vel. Risus at ultrices mi tempus imperdiet. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
        elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus
        at ultrices mi tempus imperdiet. leo vel. Risus at ultrices mi tempus
        imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
        dolor purus non enim praesent elementum facilisis leo vel. Risus at
        ultrices mi tempus imperdiet. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis
        leo vel. Risus at ultrices mi tempus imperdiet. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
        elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.
      </div>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={() => setShowDialog(true)}>
        Open Dialog
      </button>
      <button type="button" onClick={() => setShowModal(true)}>
        Open Modal
      </button>
      <Dialog
        type="dialog"
        title="Use Google's location service?"
        onClose={() => setShowDialog(false)}
        open={showDialog}
        content="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
      />
      <Dialog
        onClose={() => {
          setShowModal(false);
        }}
        title="Billions"
        type="modal"
        open={showModal}
        renderBody={renderBody()}
      />
    </div>
  );
};

export default DialogPage;
