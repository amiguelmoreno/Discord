'use client';

import { useEffect, useState } from 'react';
import CreateServerModal from '@/components/modals/createServerModal';
import InviteModal from '@/components/modals/inviteModal';
import EditServerModal from '@/components/modals/editServerModal';
import MembersModal from '@/components/modals/membersModal';
import CreateChannelModal from '@/components/modals/createChannelModal';
import LeaveServerModal from '@/components/modals/leaveServerModal';
import DeleteServerModal from '@/components/modals/deleteServerModal';
import DeleteChannelModal from '@/components/modals/deleteChannelModal';
import EditChannelModal from '../modals/editChannelModal';
import MessageFileModal from '../modals/messageFileModal';
import { DeleteMessageModal } from '../modals/deleteMessageModal';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal></CreateServerModal>
      <InviteModal></InviteModal>
      <EditServerModal></EditServerModal>
      <MembersModal></MembersModal>
      <CreateChannelModal></CreateChannelModal>
      <LeaveServerModal></LeaveServerModal>
      <DeleteServerModal></DeleteServerModal>
      <DeleteChannelModal></DeleteChannelModal>
      <EditChannelModal></EditChannelModal>
      <MessageFileModal></MessageFileModal>
      <DeleteMessageModal></DeleteMessageModal>
    </>
  );
};

export default ModalProvider;
