import { ClerkLoaded, ClerkLoading, SignUp } from '@clerk/nextjs';
import { Loader2 } from 'lucide-react';

export default function Page() {
  return (
    
      <div className="h-full flex-col items-center justify-center px-4 lg:flex">
        <div className="mt-8 flex items-center justify-center">
          <ClerkLoaded>
            <SignUp path="/sign-up" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      
      
  );
}
