import { supabase } from '../utils/supabase/supabase.utils';
import { redirect } from 'next/navigation';
export const SignInWithEmailHandler = async ({
  userEmail,
  userPassword,
}: {
  userEmail: string;
  userPassword: string;
}) => {
  await supabase.auth.signInWithPassword({
    email: userEmail,
    password: userPassword,
  });
  redirect('/');
};
export const SignUpHandler = async ({
  userEmail,
  userPassword,
}: {
  userEmail: string;
  userPassword: string;
}) => {
  await supabase.auth.signUp({
    email: userEmail,
    password: userPassword,
    options: {
      emailRedirectTo: `${location.origin}/auth/callback`,
    },
  });
};
export const SignOutHandler = async () => {
  await supabase.auth.signOut();
};
