import React from 'react';
import PropTypes from 'prop-types';
import Icon from "@/components/ui/Icon";
import { Dialog, DialogPanel, Description, DialogBackdrop } from '@headlessui/react';

const ModalForm = ({
  modalTitle = 'Extra Large modal',
  onSubmit,
  onCancel,
  onOpen,
  onClose,
  children,
  btnLabelSubmit = 'Simpan',
  btnLabelCancel = 'Batal',
  description,
  className = 'w-full',
}) => {
  

  return (
    <div>
      <Dialog open={onOpen} onClose={onClose} className={`relative z-[99999] w-full max-w-7xl max-h-full`}>
        <DialogBackdrop className='fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:opacity-0'>
          <div className="fixed inset-0 w-screen overflow-y-auto p-4">
            <div className="flex min-h-full justify-center">
              <DialogPanel className={`transform overflow-hidden rounded-md p-2 border
                 bg-white dark:bg-slate-800 text-left align-middle shadow-xl transition-alll h-full ${className}`}>
                <div className="flex items-center justify-between md:p-2 border-b rounded-t mb-2 dark:border-gray-600 border-gray-200">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    {modalTitle}
                  </h3>
                  <button onClick={onClose} type="button" className="text-gray-400 bg-transparent border-2 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="extralarge-modal">
                    <Icon icon="heroicons-outline:x" />
                  </button>
                </div>
                <div className="p-4 md:p-2 space-y-4">
                  {description? <Description>{description}</Description> : ''}
                  {children}
                </div>
                <div className="flex items-center p-2 md:p-2 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600 justify-end">
                  <button onClick={onSubmit} data-modal-hide="extralarge-modal" type="button" className="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <Icon icon="heroicons:document-plus" width="20" className="mr-2" />
                    {btnLabelSubmit}
                  </button>
                  <button onClick={!onCancel? onClose : onCancel} data-modal-hide="extralarge-modal" type="button" className="inline-flex py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-yellow-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <Icon icon="heroicons:x-mark" width="20" className="mr-2" />
                    {btnLabelCancel}
                  </button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </DialogBackdrop>
      </Dialog>
    </div>
  );
};
ModalForm.propTypes = {
  btnLabel: PropTypes.string,
  icon: PropTypes.string,
  modalTitle: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  onOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  btnLabelSubmit: PropTypes.string,
  btnLabelCancel: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};

export default ModalForm;
