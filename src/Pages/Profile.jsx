import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import {
  IoArrowBack,
  IoCameraOutline,
  IoLogOutOutline,
  IoSaveOutline,
  IoPersonOutline,
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";

const Profile = () => {
  const { activeUser, updateProfile, logout } = useContext(ShopContext);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    profileImage: "",
  });
 
  console.log(formData)
  useEffect(() => {
    if (!activeUser) {
      navigate("/login");
    } else {
      setFormData({
        username: activeUser.username || "",
        email: activeUser.email || "",
        phone: activeUser.phone || "",
        address: activeUser.address || "",
        profileImage: activeUser.profileImage || "",
      });
    }
  }, [activeUser, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          profileImage: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    }
  };
  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!activeUser) return null;

  return (
    <div className="min-h-screen w-[1200px]  bg-[var(--bg-color)] px-4 py-24 flex">
      <div className="w-full flex flex-col ">
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="p-3 bg-[var(--card-color)] border border-[var(--border-color)] rounded-2xl text-[var(--text-color)] hover:shadow-lg transition-all active:scale-95"
          >
            <IoArrowBack size={24} />
          </button>
          <h1 className="text-3xl font-bold text-[var(--heading-color)]">
            My Profile
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-red-500/10 text-red-500 rounded-2xl font-bold hover:bg-red-500 hover:text-white transition-all active:scale-95"
          >
            <IoLogOutOutline size={22} />
            <span>Logout</span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1 flex flex-col gap-6">
            <div className="bg-[var(--card-color)] border border-[var(--border-color)] rounded-3xl p-8 flex flex-col items-center shadow-xl backdrop-blur-sm">
              <div className="relative group">
                <img
                  src={formData.profileImage}
                  alt="Profile"
                  className="w-40 h-40 rounded-full object-cover border-4 border-[var(--heading-color)]/20 shadow-inner"
                />
                {isEditing && (
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <IoCameraOutline size={30} className="text-white" />
                  </div>
                )}
              </div>
              <h2 className="mt-6 text-2xl font-bold text-[var(--text-color)]">
                {formData.username}
              </h2>
              <p className="text-[var(--text-secondary)]">{formData.email}</p>

              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="mt-8 w-full py-4 bg-[var(--btn-color)] text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-[var(--btn-color)]/30 active:scale-95 transition-all"
                >
                  Edit Profile
                </button>
              ) : (
                <button
                  onClick={handleSave}
                  className="mt-8 w-full flex items-center justify-center gap-2 py-4 bg-green-500 text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-green-500/30 active:scale-95 transition-all"
                >
                  <IoSaveOutline size={20} />
                  <span>Save Changes</span>
                </button>
              )}
            </div>
          </div>

          <div className="col-span-2">
            <div className="bg-[var(--card-color)] border border-[var(--border-color)] rounded-3xl p-8 shadow-xl backdrop-blur-sm flex flex-col gap-6">
              <h3 className="text-xl font-bold text-[var(--heading-color)] flex items-center gap-2 mb-2">
                <IoPersonOutline />
                Account Details
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider ml-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <IoPersonOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[var(--input-color)] border border-[var(--border-color)] focus:border-[var(--heading-color)] outline-none transition-all disabled:opacity-70"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <IoMailOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      disabled
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[var(--input-color)] border border-[var(--border-color)] opacity-70 outline-none cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider ml-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <IoCallOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[var(--input-color)] border border-[var(--border-color)] focus:border-[var(--heading-color)] outline-none transition-all disabled:opacity-70"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 col-span-2">
                  <label className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider ml-1">
                    Shipping Address
                  </label>
                  <div className="relative">
                    <IoLocationOutline className="absolute left-4 top-4 text-[var(--text-secondary)]" />
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      disabled={!isEditing}
                      rows="3"
                      placeholder="123 Shopping St, Fashion City, 560001"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[var(--input-color)] border border-[var(--border-color)] focus:border-[var(--heading-color)] outline-none transition-all disabled:opacity-70 resize-none"
                    />
                  </div>
                </div>

                {isEditing && (
                  <div className="flex flex-col gap-2 col-span-2">
                    <label className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider ml-1">
                      Profile Image URL
                    </label>
                    <input
                      type="file"
                      name="profileImage"
                      onChange={handleImageChange}
                      placeholder="Edit Profile Image URL"
                      className="w-full px-4 py-4 rounded-2xl bg-[var(--input-color)] border border-[var(--border-color)] focus:border-[var(--heading-color)] outline-none transition-all"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
