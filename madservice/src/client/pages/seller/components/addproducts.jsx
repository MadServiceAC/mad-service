import React from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import ProductDataService from '../../../svc/products.svc'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    sku: Yup.string().required('SKU is required'),
    image_path: Yup.string().required('Image Path is required'),
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    category: Yup.string().required('Category is required'),
    brand: Yup.string().required('Brand is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
    stock: Yup.number().required('Stock is required').min(0, 'Stock cannot be negative'),
    color: Yup.string().required('Color is required'),
    powerCons: Yup.number().required('Power Consumption is required').positive('Power Consumption must be positive'),
    dimen: Yup.string().required('Dimensions are required'),
    weight: Yup.number().required('Weight is required').positive('Weight must be positive'),
    warranty: Yup.string().required('Warranty is required'),
    coolingCap: Yup.number().required('Cooling Capacity is required').positive('Cooling Capacity must be positive'),
    refType: Yup.string().required('Refrigerant Type is required'),
    pipeSize: Yup.string().required('Pipe Size is required'),
    outdoorDimen: Yup.string().required('Outdoor Dimensions are required'),
    outdoorWeight: Yup.number().required('Outdoor Weight is required').positive('Outdoor Weight must be positive'),
    madeIn: Yup.string().required('Made In is required'),
})

const initialValues = {
    sku: '',
    image_path: '',
    name: '',
    description: '',
    category: '',
    brand: '',
    price: '',
    stock: '',
    color: '',
    powerCons: '',
    dimen: '',
    weight: '',
    warranty: '',
    coolingCap: '',
    refType: '',
    pipeSize: '',
    outdoorDimen: '',
    outdoorWeight: '',
    madeIn: '',
}

export default function AddProduct({ addProduct, setAddProduct }) {
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await ProductDataService.postProduct(values)
            await ProductDataService.getAllProducts()
            setAddProduct(false)
        } catch (error) {
            console.error('Error creating product:', error)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <Transition show={addProduct} as={React.Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setAddProduct(false)}>
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
                                <DialogTitle
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Create Product
                                </DialogTitle>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ isSubmitting }) => (
                                        <Form className="mt-4">
                                            <div className="grid grid-cols-1 gap-4">
                                                <div>
                                                    <label htmlFor="sku" className="block text-sm font-medium text-gray-700">
                                                        SKU
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        name="sku"
                                                        id="sku"
                                                        className="w-full mt-1 px-2.5 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <ErrorMessage name="sku" component="div" className="text-red-600 text-sm" />
                                                </div>
                                                <div>
                                                    <label htmlFor="image_path" className="block text-sm font-medium text-gray-700">
                                                        Image
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        name="image_path"
                                                        id="image_path"
                                                        className="w-full mt-1 px-2.5 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <ErrorMessage name="image_path" component="div" className="text-red-600 text-sm" />
                                                </div>
                                                <div>
                                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                        Name
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        className="w-full mt-1 px-2.5 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <ErrorMessage name="name" component="div" className="text-red-600 text-sm" />
                                                </div>
                                                <div>
                                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                                        Description
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        name="description"
                                                        id="description"
                                                        className="w-full mt-1 px-2.5 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <ErrorMessage name="description" component="div" className="text-red-600 text-sm" />
                                                </div>
                                                <div>
                                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                                        Category
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        name="category"
                                                        id="category"
                                                        className="w-full mt-1 px-2.5 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <ErrorMessage name="category" component="div" className="text-red-600 text-sm" />
                                                </div>
                                                <div>
                                                    <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                                                        Brand
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        name="brand"
                                                        id="brand"
                                                        className="w-full mt-1 px-2.5 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <ErrorMessage name="brand" component="div" className="text-red-600 text-sm" />
                                                </div>
                                                <div>
                                                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                                        Price
                                                    </label>
                                                    <Field
                                                        type="number"
                                                        name="price"
                                                        id="price"
                                                        className="w-full mt-1 px-2.5 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <ErrorMessage name="price" component="div" className="text-red-600 text-sm" />
                                                </div>
                                                <div>
                                                    <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                                                        Stock
                                                    </label>
                                                    <Field
                                                        type="number"
                                                        name="stock"
                                                        id="stock"
                                                        className="w-full mt-1 px-2.5 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <ErrorMessage name="stock" component="div" className="text-red-600 text-sm" />
                                                </div>
                                                <div>
                                                    <label htmlFor="color" className="block text-sm font-medium text-gray-700">
                                                        Color
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        name="color"
                                                        id="color"
                                                        className="w-full mt-1 px-2.5 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <ErrorMessage name="color" component="div" className="text-red-600 text-sm" />
                                                </div>
                                                <div>
                                                    <label htmlFor="powerCons" className="block text-sm font-medium text-gray-700">
                                                        Power Consumption
                                                    </label>
                                                    <Field
                                                        type="number"
                                                        name="powerCons"
                                                        id="powerCons"
                                                        className="w-full mt-1 px-2.5 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <ErrorMessage name="powerCons" component="div" className="text-red-600 text-sm" />
                                                </div>
                                                <div>
                                                    <label htmlFor="dimen" className="block text-sm font-medium text-gray-700">
                                                        Dimensions
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        name="dimen"
                                                        id="dimen"
                                                        className="w-full mt-1 px-2.5 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <ErrorMessage name="dimen" component="div" className="text-red-600 text-sm" />
                                                </div>
                                                <div>
                                                    <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                                                        Weight
                                                    </label>
                                                    <Field
                                                        type="number"
                                                        name="weight"
                                                        id="weight"
                                                        className="w-full mt-1 px-2.5 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <ErrorMessage name="weight" component="div" className="text-red-600 text-sm" />
                                                </div>
                                                <div>
                                                    <label htmlFor="warranty" className="block text-sm font-medium text-gray-700">
                                                        Warranty
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        name="warranty"
                                                        id="warranty"
                                                        className="w-full mt-1 px-2.5 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <ErrorMessage name="warranty" component="div" className="text-red-600 text-sm" />
                                                </div>
                                                <div>
                                                    <label htmlFor="coolingCap" className="block text-sm font-medium text-gray-700">
                                                        Cooling Capacity
                                                    </label>
                                                    <Field
                                                        type="number"
                                                        name="coolingCap"
                                                        id="coolingCap"
                                                        className="w-full mt-1 px-2.5 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <ErrorMessage name="coolingCap" component="div" className="text-red-600 text-sm" />
                                                </div>
                                                <div>
                                                    <label htmlFor="refType" className="block text-sm font-medium text-gray-700">
                                                        Refrigerant Type
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        name="refType"
                                                        id="refType"
                                                        className="w-full mt-1 px-2.5 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <ErrorMessage name="refType" component="div" className="text-red-600 text-sm" />
                                                </div>
                                                <div>
                                                    <label htmlFor="pipeSize" className="block text-sm font-medium text-gray-700">
                                                        Pipe Size
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        name="pipeSize"
                                                        id="pipeSize"
                                                        className="w-full mt-1 px-2.5 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <ErrorMessage name="pipeSize" component="div" className="text-red-600 text-sm" />
                                                </div>
                                                <div>
                                                    <label htmlFor="outdoorDimen" className="block text-sm font-medium text-gray-700">
                                                        Outdoor Dimensions
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        name="outdoorDimen"
                                                        id="outdoorDimen"
                                                        className="w-full mt-1 px-2.5 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <ErrorMessage name="outdoorDimen" component="div" className="text-red-600 text-sm" />
                                                </div>
                                                <div>
                                                    <label htmlFor="outdoorWeight" className="block text-sm font-medium text-gray-700">
                                                        Outdoor Weight
                                                    </label>
                                                    <Field
                                                        type="number"
                                                        name="outdoorWeight"
                                                        id="outdoorWeight"
                                                        className="w-full mt-1 px-2.5 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <ErrorMessage name="outdoorWeight" component="div" className="text-red-600 text-sm" />
                                                </div>
                                                <div>
                                                    <label htmlFor="madeIn" className="block text-sm font-medium text-gray-700">
                                                        Made In
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        name="madeIn"
                                                        id="madeIn"
                                                        className="w-full mt-1 px-2.5 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <ErrorMessage name="madeIn" component="div" className="text-red-600 text-sm" />
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                >
                                                    Submit
                                                </button>
                                                <button
                                                    type="button"
                                                    className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                                                    onClick={() => setAddProduct(false)}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
