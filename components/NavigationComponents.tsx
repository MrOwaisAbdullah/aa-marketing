'use client';

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const FloatingNavbar = dynamic(() => import('@/components/FloatingNavbar'));
const WhatsAppButton = dynamic(() => import('@/components/ui/WhatsappButton'));

export default function NavigationComponents() {
  const pathname = usePathname();
  const isStudioRoute = pathname?.startsWith('/studio');

  if (isStudioRoute) {
    return null;
  }

  return (
    <>
      <FloatingNavbar />
      <WhatsAppButton
        phoneNumber="+923352867361"
        message="Hello, I'm interested in your services!"
        tooltipMessages={[
          "Hi, Need Our Help?",
          "Contact us now!",
          "Need a quote?",
          "Get help instantly",
        ]}
        initialDelay={5000}
      />
    </>
  );
}
