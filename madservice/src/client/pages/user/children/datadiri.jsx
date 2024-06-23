import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import UserService from "../../../svc/user.svc"

const DataDiri = () => {
  const [initialValues, setInitialValues] = React.useState({
    fullname: "",
    email: "",
    dob: "",
    gender: "",
    phone: "",
    address: "",
    mastery: "",
    skill: "",
    username: "",
    role: ""
  })

  const validationSchema = Yup.object({
    fullname: Yup.string().required("Nama lengkap wajib diisi"),
    email: Yup.string().email("Format email tidak valid").required("Email wajib diisi"),
    phone: Yup.string().required("Nomor HP wajib diisi"),
    dob: Yup.string().required("Tanggal lahir wajib diisi"),
    gender: Yup.string().required("Jenis kelamin wajib diisi"),
    address: Yup.string().required("Alamat wajib diisi"),
  })

  const [isSaved, setIsSaved] = React.useState(false)

  React.useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    if (storedUser) {
      UserService.getUser(storedUser.id)
        .then((res) => {
          const userData = res.data
          setInitialValues({
            fullname: userData.fullname || "",
            email: userData.email || "",
            dob: userData.dob || "",
            gender: userData.gender || "",
            phone: userData.phone || "",
            address: userData.address || "",
            mastery: userData.mastery || "",
            skill: userData.skill || "",
            username: userData.username || "",
            role: userData.role || ""
          })
        })
        .catch((error) => {
          console.error("Error fetching user data:", error)
        })
    }
  }, [])

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"))
      const r = await UserService.updateUser(storedUser.id, values)
      if (r.status === 200) {
        setIsSaved(true)
        setTimeout(() => setIsSaved(false), 5000)
      }
    } catch (error) {
      console.error("Error updating user data:", error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full">
      <h2 className="text-2xl font-bold text-center mb-4">Selamat Datang!</h2>

      {isSaved && (
        <div className="bg-green-500 text-center text-white p-2 rounded-lg mb-4">
          Data Anda telah disimpan!
        </div>
      )}

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} enableReinitialize>
        {({ isSubmitting, values }) => (
          <Form className="mt-16">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium mb-1">Username</label>
                <Field type="text" name="username" id="username" className="w-full p-2 border rounded" value={values.username} disabled />
                <ErrorMessage name="username" component="div" className="text-red-600 text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="role" className="block text-sm font-medium mb-1">Role</label>
                <Field type="text" name="role" id="role" className="w-full p-2 border rounded" value={values.role} disabled />
                <ErrorMessage name="role" component="div" className="text-red-600 text-sm" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="fullname" className="block text-sm font-medium mb-1">Nama Lengkap</label>
              <Field type="text" name="fullname" id="fullname" className="w-full p-2 border rounded" value={values.fullname} />
              <ErrorMessage name="fullname" component="div" className="text-red-600 text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <Field type="email" name="email" id="email" className="w-full p-2 border rounded" value={values.email} />
              <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label htmlFor="dob" className="block text-sm font-medium mb-1">Tanggal Lahir</label>
                <Field type="date" name="dob" id="dob" className="w-full p-2 border rounded" value={values.dob} />
                <ErrorMessage name="dob" component="div" className="text-red-600 text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="gender" className="block text-sm font-medium mb-1">Jenis Kelamin</label>
                <Field as="select" name="gender" id="gender" className="w-full p-2 border rounded" value={values.gender}>
                  <option value="" label="Pilih jenis kelamin" />
                  <option value="L" label="Laki-Laki" />
                  <option value="P" label="Perempuan" />
                </Field>
                <ErrorMessage name="gender" component="div" className="text-red-600 text-sm" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Nomor HP</label>
              <Field type="text" name="phone" id="phone" className="w-full p-2 border rounded" value={values.phone} />
              <ErrorMessage name="phone" component="div" className="text-red-600 text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium mb-1">Alamat</label>
              <Field as="textarea" name="address" id="address" className="w-full p-2 border rounded" value={values.address} />
              <ErrorMessage name="address" component="div" className="text-red-600 text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label htmlFor="mastery" className="block text-sm font-medium mb-1">Keahlian</label>
                <Field
                  as="textarea"
                  name="mastery"
                  id="mastery"
                  className="w-full p-2 border rounded"
                  value={values.mastery}
                  disabled 
                />
                <ErrorMessage name="mastery" component="div" className="text-red-600 text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="skill" className="block text-sm font-medium mb-1">Kualifikasi</label>
                <Field
                  type="text"
                  name="skill"
                  id="skill"
                  className="w-full p-2 border rounded"
                  value={values.skill}
                  disabled 
                />
                <ErrorMessage name="skill" component="div" className="text-red-600 text-sm" />
              </div>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 text-white p-2 rounded">
              {isSubmitting ? "Menyimpan..." : "Simpan Perubahan"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default DataDiri