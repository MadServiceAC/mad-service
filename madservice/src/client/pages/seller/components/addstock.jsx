import React from "react"
import productsSvc from "../../../svc/products.svc"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';

const AddStock = ({isOpenAddStock, setIsOpenAddStock, productId, onupdatedStock}) => {
    const validationSchema = Yup.object().shape({
        stock: Yup.number().required('Stock is required').positive('Stock must be positive'),
      });

    const addStock = async (values) => {
        try {
            await productsSvc.addStock(productId, values)
            onupdatedStock()
            setIsOpenAddStock(false)
        } catch (e) {
            console.error("Error menambahkan stock:", e)
        } 
    }
    return(
        <Transition appear show={isOpenAddStock} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpenAddStock(false)}>
            <TransitionChild
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
                <TransitionChild
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <DialogTitle as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Add Product Stock
                    </DialogTitle>
                    <Formik
                    initialValues={{ stock: '' }}
                    validationSchema={validationSchema}
                    onSubmit={addStock}
                    >
                        <Form className="mt-4">
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                            <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                                Enter Stock
                            </label>
                            <Field
                                type="number"
                                name="stock"
                                id="stock"
                                className="w-full mt-1 px-2.5 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <ErrorMessage name="stock" component="div" className="text-red-600 text-sm" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            >
                            Add Stock
                            </button>
                            <button
                            type="button"
                            className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                            onClick={() => setIsOpenAddStock(false)}
                            >
                            Cancel
                            </button>
                        </div>
                        </Form>
                    </Formik>
                </DialogPanel>
                </TransitionChild>
            </div>
            </div>
        </Dialog>
        </Transition>
  )
}

export default AddStock