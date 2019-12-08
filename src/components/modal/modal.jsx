import React from "react";
import PropTypes from "prop-types";
import Portal from "../portal/portal";
import Icon from "../icon/icon";
import classNames from "classnames";

import "./modal.css";

const Modal = ({
  title,
  isOpen,
  onCancel,
  onSubmit,
  children,
  classHeightContainer
}) => {
  const classes = classNames("modalWindow", classHeightContainer);

  return (
    <>
      {isOpen && (
        <Portal>
          <div className="modalOverlay">
            <div className={classes}>
              <div className="modalHeader">
                <div className="modalTitle">{title}</div>
                <Icon name="times" size={1.3} onClick={onCancel} />
              </div>
              <div className="modalBody">{children}</div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};
Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  classHeightContainer: PropTypes.string
};
Modal.defaultProps = {
  title: "Modal title",
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null,
  classHeightContainer: null
};
export default Modal;
