import { X } from "lucide-react";

// Flip to false to hide the announcement bar site-wide — layout (navbar/hero offset) adjusts automatically.
export const ANNOUNCEMENT_ENABLED = false;
export const ANNOUNCEMENT_MESSAGE = "Aviso: em breve novidades";

interface AnnouncementBarProps {
  onClose: () => void;
}

const AnnouncementBar = ({ onClose }: AnnouncementBarProps) => {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] flex h-10 items-center justify-center bg-theme-detail-heavy px-10">
      <p className="text-center text-sm font-medium uppercase tracking-[0.18em] text-theme-dominant">
        {ANNOUNCEMENT_MESSAGE}
      </p>
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar aviso"
        className="absolute right-4 text-theme-dominant transition-opacity hover:opacity-70"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
