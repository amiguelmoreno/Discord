import currentProfile from '@/lib/currentProfile';
import { db } from '@/lib/db';
import { redirectToSignIn } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

interface InviteCodePageProps {
  params: { inviteCode: string };
}

const inviteCodePage = async ({ params }: InviteCodePageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  if (!params.inviteCode) {
    return redirect('/');
  }

  const exixtingServer = await db.server.findFirst({
    where: {
      inviteCode: params.inviteCode,
      members: { some: { profileId: profile.id } },
    },
  });

  if (exixtingServer) {
    return redirect(`/servers/${exixtingServer.id}`);
  }

  const server = await db.server.update({
    where: { inviteCode: params.inviteCode },
    data: { members: { create: [{ profileId: profile.id }] } },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return null;
};

export default inviteCodePage;
