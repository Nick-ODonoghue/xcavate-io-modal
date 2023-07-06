"use client";

import { useState } from "react";

import Button from "@/components/Button";
import Modal from "@/components/Modal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <main className="flex min-h-screen items-center justify-center relative">
      <div>
        <Button onClick={handleClick} />
        <Modal isOpen={showModal} isClosed={handleClose} />
      </div>
    </main>
  );
}
