import React, { createContext, useContext, useState, useCallback } from 'react';
import EnquiryModal from '../components/sections/EnquiryModal';

interface ModalContextType {
  openEnquiryModal: () => void;
  closeEnquiryModal: () => void;
  isEnquiryModalOpen: boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  const openEnquiryModal = useCallback(() => {
    setIsEnquiryModalOpen(true);
  }, []);

  const closeEnquiryModal = useCallback(() => {
    setIsEnquiryModalOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ openEnquiryModal, closeEnquiryModal, isEnquiryModalOpen }}>
      {children}
      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={closeEnquiryModal} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
