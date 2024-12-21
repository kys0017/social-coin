import { Redirect, Stack } from 'expo-router';
import { useSession } from '@/hooks/useSession';

export default function AuthLayout() {
  const session = useSession();

  if (!session) {
    return <Redirect href={'/login'} />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
