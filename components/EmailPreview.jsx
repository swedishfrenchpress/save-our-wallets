import React, { useState, useEffect, useRef } from 'react';

const EmailPreview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [letterText, setLetterText] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);
  const modalRef = useRef(null);
  const textareaRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Letter content extracted from the screenshot
  const defaultLetter = `Dear U.S. Senator Nancy Pelosi,

I am writing as your constituent to urge your support for Section 109 of the CLARITY Act (H.R. 3633). This critical provision protects the fundamental tools that make Bitcoin sovereign and censorship-resistant while ensuring appropriate regulatory oversight.

Section 109 provides essential clarity by establishing that individuals and entities who do not control consumer funds, only provide software or computing services, and do not act as financial intermediaries should not be subject to money transmitter licensing requirements they cannot comply with anyway.

Without this protection, we risk:
• Pushing wallet development offshore to poorly-regulated jurisdictions
• Hindering American competitiveness in open source financial technology
• Creating confusion for builders who publish code and run infrastructure
• Chilling innovation that improves consumer safety and transparency

Please support Section 109 of the CLARITY Act to keep American leadership in responsible Bitcoin development and protect the rights of users and developers.

Thank you for your time and service.

Sincerely,
[Your Name]
[City, State]`;

  // Initialize letter text
  useEffect(() => {
    setLetterText(defaultLetter);
  }, []);

  // Handle modal open
  const openModal = () => {
    setIsModalOpen(true);
    setCopySuccess(false);
  };

  // Handle modal close
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle copy to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(letterText);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      if (textareaRef.current) {
        textareaRef.current.select();
        document.execCommand('copy');
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      }
    }
  };

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Focus trap - focus the close button when modal opens
      setTimeout(() => {
        if (closeButtonRef.current) {
          closeButtonRef.current.focus();
        }
      }, 100);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Email Preview
          </h1>
          <p className="text-gray-600">
            Preview and customize your letter to representatives
          </p>
        </div>

        {/* Main Action */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <button
            onClick={openModal}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Open email preview to edit and copy letter"
          >
            Send Email
          </button>
          
          <p className="text-sm text-gray-500 mt-4 max-w-md mx-auto">
            Open your email app, paste the text, add a subject, and send.
          </p>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeModal();
              }
            }}
          >
            <div 
              ref={modalRef}
              className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 id="modal-title" className="text-xl font-semibold text-gray-900">
                  Edit Your Letter
                </h2>
                <button
                  ref={closeButtonRef}
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 p-6 overflow-hidden">
                <textarea
                  ref={textareaRef}
                  value={letterText}
                  onChange={(e) => setLetterText(e.target.value)}
                  className="w-full h-96 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm leading-relaxed"
                  placeholder="Your letter content..."
                  aria-label="Editable letter content"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50 rounded-b-lg">
                <button
                  onClick={copyToClipboard}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    copySuccess 
                      ? 'bg-green-100 text-green-700 ring-green-500' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700 ring-gray-500'
                  }`}
                  aria-label="Copy letter to clipboard"
                >
                  {copySuccess ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy to Clipboard
                    </>
                  )}
                </button>

                <button
                  onClick={closeModal}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Close modal and finish editing"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailPreview;
