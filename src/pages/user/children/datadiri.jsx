import React from "react";

const DataDiri = () => {
  const [isSaved, setIsSaved] = React.useState(false);

  const handleSave = (event) => {
    event.preventDefault();
    setIsSaved(true); // Simulate successful save
    setTimeout(() => setIsSaved(false), 5000); // Dissappear after 5 seconds
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full">
      <h2 className="text-2xl font-bold text-center mb-4">Selamat Datang!</h2>

      {isSaved && (
        <div className="bg-green-500 text-center text-white p-2 rounded-lg mb-4">
          Data Anda telah disimpan!
        </div>
      )}

      <form onSubmit={handleSave}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
          <input
            type="text"
            value="Luthfi Ilmukti"
            className="w-full p-2 border rounded"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value="luthfi@gmail.com"
            className="w-full p-2 border rounded"
            readOnly
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Tanggal Lahir
            </label>
            <input
              type="text"
              value="15/06/2001"
              className="w-full p-2 border rounded"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Jenis Kelamin
            </label>
            <select className="w-full p-2 border rounded">
              <option>Laki-laki</option>
              <option>Perempuan</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">No. HP</label>
            <input
              type="text"
              value="089744727743"
              className="w-full p-2 border rounded"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Alamat</label>
            <input
              type="text"
              value="Paloh Lada"
              className="w-full p-2 border rounded"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Keahlian</label>
            <textarea className="w-full p-2 border rounded" readOnly>
              Professional Heating, Ventilating Airconditioning & Refrigeration
              Solution
            </textarea>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Kualifikasi
            </label>
            <input
              type="text"
              value="Bersertifikat"
              className="w-full p-2 border rounded"
              readOnly
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
};

export default DataDiri;
