import { X } from "lucide-react";

interface AnnouncementBarProps {
  message: string;
  onClose: () => void;
}

const AnnouncementBar = ({ message, onClose }: AnnouncementBarProps) => {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] flex h-10 items-center justify-center bg-theme-detail-heavy px-10">
      <p className="text-center text-sm font-medium uppercase tracking-[0.18em] text-theme-dominant">
        {message}
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
