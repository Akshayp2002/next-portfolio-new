// app/page.tsx
import { redirect } from 'next/navigation';

export default function RootPage() {
  // This will instantly move the user to /home 
  // and send a 307 (Temporary Redirect) status code.
  redirect('/home');
}