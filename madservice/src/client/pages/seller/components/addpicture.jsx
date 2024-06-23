import React from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import * as Yup from "yup"
import productsSvc from "../../../svc/products.svc"

const AddPicturePopup = ({ addPictureOpen, setAddPictureOpen, id, onPictureAdded }) => {

  const initialValues = {
    picture: null,
  }

  const handleUpload = async (values) => {
    try {
      const formData = new FormData()
      formData.append('image', values.picture)
      await productsSvc.uploadProduct(id, formData)
      onPictureAdded()
      setAddPictureOpen(false)
    } catch (e) {
        console.error("Error mengupload gambar:", e)
    }
  }

  const validationSchema = Yup.object({
    picture: Yup.mixed()
      .required("Gambar wajib diisi")
      .test("fileSize", "Ukuran gambar terlalu besar", (value) => {
        return value && value.size <= 2 * 1024 * 1024 // 2MB
      })
      .test("fileType", "Format gambar tidak valid", (value) => {
        return value && ["image/jpeg", "image/png", "image/gif"].includes(value.type)
      }),
  })

  return (
    <Transition appear show={addPictureOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setAddPictureOpen(false)}>
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
                  Tambahkan Gambar
                </DialogTitle>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={async (values, { setSubmitting }) => {
                    await handleUpload(values);
                    setSubmitting(false);
                  }}
                >
                  {({ setFieldValue, isSubmitting }) => (
                    <Form className="mt-4">
                      <div className="mb-4">
                        <label htmlFor="picture" className="block text-sm font-medium mb-1">Pilih Gambar</label>
                        <input
                          id="picture"
                          name="picture"
                          type="file"
                          accept="image/*"
                          onChange={(event) => {
                            setFieldValue("picture", event.currentTarget.files[0])
                          }}
                          className="w-full p-2 border rounded"
                        />
                        <ErrorMessage name="picture" component="div" className="text-red-600 text-sm" />
                      </div>
                      <div className="flex justify-end gap-4">
                        <button
                          type="button"
                          className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md"
                          onClick={() => setAddPictureOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md"
                        >
                          {isSubmitting ? "Submitting..." : "Tambahkan"}
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

export default AddPicturePopup
