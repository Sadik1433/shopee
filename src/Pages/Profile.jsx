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
import { MdShoppingBag } from "react-icons/md";

const Profile = () => {
  const { activeUser, updateProfile, logout, orders } = useContext(ShopContext);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    profileImage: "",
  });
 
  const userOrders = activeUser ? orders.filter((o) => o.userEmail === activeUser.email) : [];
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
    <div className="min-h-screen w-full max-w-[1200px] mx-auto bg-[var(--bg-color)] px-3 sm:px-6 py-20 sm:py-24 flex">
      <div className="w-full flex flex-col">
        {/* Header */}
        <div className="mb-6 sm:mb-8 flex items-center justify-between gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2.5 sm:p-3 bg-[var(--card-color)] border border-[var(--border-color)] rounded-2xl text-[var(--text-color)] hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            aria-label="Go back"
          >
            <IoArrowBack size={22} />
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--heading-color)]">
            My Profile
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-red-500/10 text-red-500 rounded-2xl font-bold hover:bg-red-500 hover:text-white transition-all active:scale-95 text-sm sm:text-base cursor-pointer"
          >
            <IoLogOutOutline size={20} />
            <span>Logout</span>
          </button>
        </div>

        {/* Main Grid: 1 col on mobile/tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Avatar & Summary Card */}
          <div className="col-span-1 flex flex-col gap-6">
            <div className="bg-[var(--card-color)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-8 flex flex-col items-center shadow-xl backdrop-blur-sm">
              <div className="relative group">
                <img
                  src={formData.profileImage}
                  alt="Profile"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-[var(--heading-color)]/20 shadow-inner"
                />
                {isEditing && (
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <IoCameraOutline size={30} className="text-white" />
                  </div>
                )}
              </div>
              <h2 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-bold text-[var(--text-color)] text-center">
                {formData.username}
              </h2>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base text-center break-all">{formData.email}</p>

              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="mt-6 sm:mt-8 w-full py-3.5 sm:py-4 bg-[var(--btn-color)] text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-[var(--btn-color)]/30 active:scale-95 transition-all cursor-pointer text-sm sm:text-base"
                >
                  Edit Profile
                </button>
              ) : (
                <button
                  onClick={handleSave}
                  className="mt-6 sm:mt-8 w-full flex items-center justify-center gap-2 py-3.5 sm:py-4 bg-green-500 text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-green-500/30 active:scale-95 transition-all cursor-pointer text-sm sm:text-base"
                >
                  <IoSaveOutline size={20} />
                  <span>Save Changes</span>
                </button>
              )}
            </div>
          </div>

          {/* Account Details Form */}
          <div className="col-span-1 lg:col-span-2">
            <div className="bg-[var(--card-color)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-sm flex flex-col gap-6">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--heading-color)] flex items-center gap-2 mb-2">
                <IoPersonOutline />
                Account Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                      className="w-full pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base rounded-2xl bg-[var(--input-color)] border border-[var(--border-color)] focus:border-[var(--heading-color)] outline-none transition-all disabled:opacity-70 text-[var(--text-color)]"
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
                      className="w-full pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base rounded-2xl bg-[var(--input-color)] border border-[var(--border-color)] opacity-70 outline-none cursor-not-allowed text-[var(--text-color)]"
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
                      className="w-full pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base rounded-2xl bg-[var(--input-color)] border border-[var(--border-color)] focus:border-[var(--heading-color)] outline-none transition-all disabled:opacity-70 text-[var(--text-color)]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 col-span-1 sm:col-span-2">
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
                      className="w-full pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base rounded-2xl bg-[var(--input-color)] border border-[var(--border-color)] focus:border-[var(--heading-color)] outline-none transition-all disabled:opacity-70 resize-none text-[var(--text-color)]"
                    />
                  </div>
                </div>

                {isEditing && (
                  <div className="flex flex-col gap-2 col-span-1 sm:col-span-2">
                    <label className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider ml-1">
                      Profile Image
                    </label>
                    <input
                      type="file"
                      name="profileImage"
                      onChange={handleImageChange}
                      className="w-full px-4 py-3 rounded-2xl bg-[var(--input-color)] border border-[var(--border-color)] focus:border-[var(--heading-color)] outline-none transition-all text-sm text-[var(--text-color)] file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[var(--heading-color)] file:text-white cursor-pointer"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Orders Quick View */}
          <div className="col-span-1 lg:col-span-3 mt-2 sm:mt-4">
            <div className="bg-[var(--card-color)] border border-[var(--border-color)] rounded-3xl p-5 sm:p-6 shadow-xl backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <MdShoppingBag size={24} className="text-[var(--heading-color)]" />
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--heading-color)]">My Orders</h3>
                </div>
                <button
                  onClick={() => navigate("/orders")}
                  className="px-5 py-2 bg-[var(--btn-color)] text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-[var(--btn-color)]/30 active:scale-95 transition-all text-xs sm:text-sm self-start sm:self-auto cursor-pointer"
                >
                  View All Orders →
                </button>
              </div>
              {userOrders.length === 0 ? (
                <div className="flex flex-col items-center py-8 gap-3">
                  <p className="text-[var(--text-secondary)] text-sm sm:text-base">You haven't placed any orders yet.</p>
                  <button
                    onClick={() => navigate("/")}
                    className="text-[var(--heading-color)] font-bold hover:underline cursor-pointer text-sm"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-4">
                  {[
                    { label: "Total Orders", value: userOrders.length, icon: "📦" },
                    { label: "Total Spent", value: `₹${userOrders.reduce((s, o) => s + o.total, 0)}`, icon: "💰" },
                    { label: "Items Bought", value: userOrders.reduce((s, o) => s + o.items.reduce((a, i) => a + i.quantity, 0), 0), icon: "🛍️" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-[var(--input-color)] rounded-2xl p-4 text-center border border-[var(--border-color)]">
                      <div className="text-2xl sm:text-3xl mb-1">{stat.icon}</div>
                      <p className="text-xl sm:text-2xl font-black text-[var(--heading-color)]">{stat.value}</p>
                      <p className="text-xs text-[var(--text-secondary)] font-medium mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
