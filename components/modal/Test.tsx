import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

type ModalProps = {
  isOpen: boolean;
  toggle: () => void;
  title: string;
  body: string;
  footer?: JSX.Element;
  isVisible:boolean;
  onClose : any; 
};

const Test: React.FC<ModalProps> = ({ isOpen, toggle, title, body, footer,isVisible, onClose }) => {
  const onChang = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGT(event.target.value)
  }
  const [gt, setGT] = useState("");
  // setGT("Nam")
  // const [startDate, setStartDate] = useState(new Date());

  // const [isOpen, setState] = useState(false);

  return (
   <div>
      <input onChange={onChang} type="radio" value="Nam" name='gt' checked={ gt=== "Nam"}/> Nam
      <input onChange={onChang} type="radio" value="Nu" name='gt' checked={ gt=== "Nu"} /> Nu
    
   </div>
  );
};

export default Test;

