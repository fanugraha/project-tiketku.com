import React from "react";
import Input from "../../Elements/Input/Input";
import Button from "../../Elements/Button/Button";
import "./UserFillFormStyle.css";

const UserFillForm = () => {
  return (
    <div className="FillForm">
      <Input
        type="text"
        placeholder="Siap lepas landas dari?"
        className="medium"
      />
      <img src="src/assets/Icon & Logo/ArrowRepeat.svg" alt="" />
      <Input
        type="text"
        placeholder="Mendarat di kota mana tujuanmu?"
        className="medium"
      />
      <Input type="text" placeholder="30 Mar" className="tanggal"></Input>
      <Button variant="search-btn">
        <img src="src\assets\Icon & Logo\Search.svg" alt="" />
        Cari
      </Button>
    </div>
  );
};

export default UserFillForm;
