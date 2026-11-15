import { Link, useLocation } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import {
  IoClose,
  IoHome,
  IoHomeOutline,
  IoShirt,
  IoShirtOutline,
  IoWoman,
  IoWomanOutline,
  IoHappy,
  IoHappyOutline,
  IoPhonePortrait,
  IoPhonePortraitOutline,
  IoCart,
  IoCartOutline,
  IoHeart,
  IoHeartOutline,
  IoCube,
  IoCubeOutline,
} from "react-icons/io5";

const SideBar = () => {
  const { isMobileSidebarOpen, closeMobileSidebar, cartItems, watchlist } = useContext(ShopContext);
  const [isDesktopExpanded, setIsDesktopExpanded] = useState(false);
  const location = useLocation();

  const totalCartCount = Object.values(cartItems || {}).reduce((acc, qty) => acc + qty, 0);
  const totalFavCount = watchlist?.length || 0;

  const navLinks = [
    { to: "/", label: "Home", icon: IoHomeOutline, activeIcon: IoHome },
    { to: "/men", label: "Men", icon: IoShirtOutline, activeIcon: IoShirt },
    { to: "/women", label: "Women", icon: IoWomanOutline, activeIcon: IoWoman },
    { to: "/kids", label: "Kids", icon: IoHappyOutline, activeIcon: IoHappy },
    { to: "/electro", label: "Electronic", icon: IoPhonePortraitOutline, activeIcon: IoPhonePortrait },
    { to: "/cart", label: "Cart", icon: IoCartOutline, activeIcon: IoCart, badge: totalCartCount },
    { to: "/favourite", label: "Favourite", icon: IoHeartOutline, activeIcon: IoHeart, badge: totalFavCount },
    { to: "/orders", label: "Orders", icon: IoCubeOutline, activeIcon: IoCube },
  ];

  return (
    <>
      {/* ── Desktop SideBar (Style 1: Professional Vector SVG Icons with Crystal Glassmorphism) ── */}
      <aside
        className={`hidden lg:flex flex-col fixed top-0 left-0 bottom-0 z-30 transition-all duration-300 pt-20 border-r border-[var(--border-color)]/80 ${
          isDesktopExpanded
            ? "w-64 bg-[var(--card-color)]/95 backdrop-blur-2xl shadow-2xl"
            : "w-20 bg-[var(--card-color)]/90 backdrop-blur-xl shadow-lg"
        }`}
      >
        {/* Toggle Menu Button */}
        <div className="px-3 py-2 flex items-center justify-center border-b border-[var(--border-color)]/50 mb-3">
          <button
            onClick={() => setIsDesktopExpanded((prev) => !prev)}
            className={`rounded-2xl transition-all duration-200 cursor-pointer flex items-center text-[var(--text-color)] hover:text-[var(--heading-color)] hover:bg-[var(--input-color)] active:scale-95 ${
              isDesktopExpanded
                ? "w-full px-4 py-2.5 gap-3 justify-start bg-[var(--input-color)]/60"
                : "w-12 h-12 justify-center"
            }`}
            title={isDesktopExpanded ? "Collapse Menu" : "Expand Menu"}
            aria-label="Toggle sidebar menu"
          >
            <TfiMenu size={22} className="shrink-0 text-[var(--heading-color)]" />
            {isDesktopExpanded && (
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] whitespace-nowrap overflow-hidden">
                Navigation
              </span>
            )}
          </button>
        </div>

        {/* Nav Links with Crisp Vector SVG Icons & Tooltips */}
        <ul className="flex flex-col gap-2 px-3 py-1 overflow-y-auto overflow-x-hidden scrollbar-hide flex-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            const IconComponent = isActive ? link.activeIcon : link.icon;

            return (
              <li key={link.to} className="flex justify-center relative group">
                <Link
                  to={link.to}
                  className={`flex items-center transition-all duration-200 cursor-pointer relative ${
                    isDesktopExpanded
                      ? `w-full px-4 py-3 rounded-2xl gap-3.5 ${
                          isActive
                            ? "bg-[var(--heading-color)]/15 dark:bg-[var(--heading-color)]/25 backdrop-blur-xl text-[var(--heading-color)] dark:text-purple-300 font-bold shadow-lg shadow-[var(--heading-color)]/20 border border-[var(--heading-color)]/40 ring-1 ring-white/10 scale-[1.02]"
                            : "text-[var(--text-color)] hover:bg-[var(--input-color)] hover:text-[var(--heading-color)] hover:translate-x-1 border border-transparent"
                        }`
                      : `w-12 h-12 rounded-2xl justify-center ${
                          isActive
                            ? "bg-[var(--heading-color)]/20 dark:bg-[var(--heading-color)]/30 backdrop-blur-xl text-[var(--heading-color)] dark:text-purple-300 shadow-lg shadow-[var(--heading-color)]/25 border border-[var(--heading-color)]/45 ring-1 ring-white/20 scale-105"
                            : "text-[var(--text-secondary)] hover:text-[var(--heading-color)] hover:bg-[var(--input-color)] hover:scale-105 border border-transparent"
                        }`
                  }`}
                >
                  {/* Left accent bar on active when collapsed */}
                  {isActive && !isDesktopExpanded && (
                    <span className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-r-full bg-[var(--heading-color)] shadow-sm shadow-[var(--heading-color)] animate-pulse" />
                  )}

                  {/* Vector SVG Icon */}
                  <IconComponent size={24} className="shrink-0 drop-shadow-xs" />

                  {/* Expanded Text Label */}
                  {isDesktopExpanded && (
                    <span className="text-sm font-semibold whitespace-nowrap overflow-hidden transition-all duration-200 flex-1">
                      {link.label}
                    </span>
                  )}

                  {/* Active / Counter Badge */}
                  {link.badge > 0 && (
                    <span
                      className={`flex items-center justify-center font-bold text-[10px] rounded-full transition-all ${
                        isDesktopExpanded
                          ? "px-2 py-0.5 ml-auto " + (isActive ? "bg-[var(--heading-color)] text-white shadow-sm" : "bg-[var(--heading-color)]/20 text-[var(--heading-color)] border border-[var(--heading-color)]/40")
                          : "absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white shadow-md border-2 border-[var(--card-color)]"
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}
                </Link>

                {/* Floating Tooltip in Collapsed Mode */}
                {!isDesktopExpanded && (
                  <div className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[var(--card-color)] text-[var(--text-color)] text-xs font-bold border border-[var(--border-color)] shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 z-50 drop-shadow-md">
                    {link.label}
                    {link.badge > 0 && <span className="ml-1.5 text-[var(--heading-color)]">({link.badge})</span>}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </aside>

      {/* ── Mobile & Tablet SideBar Drawer (Matching Vector SVG Icons) ── */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={closeMobileSidebar}
          aria-hidden="true"
        />
      )}
      <div
        className={`fixed top-0 left-0 bottom-0 z-50 w-72 bg-[var(--card-color)]/95 backdrop-blur-2xl border-r border-[var(--border-color)]/80 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col lg:hidden ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-[var(--border-color)]/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold font-serif text-[var(--heading-color)]">Shopee Menu</span>
          </div>
          <button
            onClick={closeMobileSidebar}
            className="p-2 rounded-xl text-[var(--text-color)] hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <IoClose size={26} />
          </button>
        </div>
        <ul className="flex flex-col gap-2 p-3 text-base font-medium text-[var(--text-color)] overflow-y-auto scrollbar-hide">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            const IconComponent = isActive ? link.activeIcon : link.icon;

            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={closeMobileSidebar}
                  className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all cursor-pointer border ${
                    isActive
                      ? "bg-[var(--heading-color)]/20 dark:bg-[var(--heading-color)]/30 backdrop-blur-xl text-[var(--heading-color)] dark:text-purple-300 font-bold shadow-lg shadow-[var(--heading-color)]/20 border-[var(--heading-color)]/40 ring-1 ring-white/10"
                      : "hover:bg-[var(--input-color)] border-transparent text-[var(--text-color)]"
                  }`}
                >
                  <IconComponent size={24} className="shrink-0" />
                  <span className="text-base sm:text-lg flex-1">{link.label}</span>
                  {link.badge > 0 && (
                    <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-red-500 text-white">
                      {link.badge}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
