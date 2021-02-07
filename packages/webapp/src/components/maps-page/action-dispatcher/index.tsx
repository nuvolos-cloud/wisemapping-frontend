import React from 'react';
import RenameDialog from './rename-dialog';
import DeleteDialog from './delete-dialog';
import { ActionType } from '../action-chooser';
import { ErrorInfo, MapInfo } from '../../../client';
import Client from '../../../client';
import { useSelector } from "react-redux";
import { QueryClient, useQuery } from 'react-query';
import { activeInstance } from '../../../redux/clientSlice';
import DuplicateDialog from './duplicate-dialog';
import CreateDialog from './create-dialog';
import HistoryDialog from './history-dialog';
import ImportDialog from './import-dialog';
import PublishDialog from './publish-dialog';
import InfoDialog from './info-dialog';
import DeleteMultiselectDialog from './delete-multiselect-dialog';

export type BasicMapInfo = {
  name: string;
  description: string | undefined;
}

type ActionDialogProps = {
  action?: ActionType,
  mapsId: number[],
  onClose: () => void
}

const ActionDispatcher = (props: ActionDialogProps) => {
  const mapsId = props.mapsId;
  const action = props.action;

  const handleOnClose = (): void => {
    props.onClose();
  }

  switch (action) {
    case 'open':
      window.location.href = `/c/maps/${mapsId}/edit`;
      break;
    case 'print':
      window.open(`/c/maps/${mapsId}/print`, 'print');
      break;
  }

  return (
    <span>

      {action === 'create' && <CreateDialog onClose={handleOnClose} />}
      {(action === 'delete' && mapsId.length == 1) && <DeleteDialog onClose={handleOnClose} mapId={mapsId[0]} />}
      {(action === 'delete' && mapsId.length > 1) && <DeleteMultiselectDialog onClose={handleOnClose} mapsId={mapsId} />}
      {action === 'rename' && <RenameDialog onClose={handleOnClose} mapId={mapsId[0]} />}
      {action === 'duplicate' && <DuplicateDialog onClose={handleOnClose} mapId={mapsId[0]} />}
      {action === 'history' && <HistoryDialog onClose={handleOnClose} mapId={mapsId[0]} />}
      {action === 'import' && <ImportDialog onClose={handleOnClose} />}
      {action === 'publish' && <PublishDialog onClose={handleOnClose} mapId={mapsId[0]} />}
      {action === 'info' && <InfoDialog onClose={handleOnClose} mapId={mapsId[0]} />}
      {action === 'create' && <CreateDialog onClose={handleOnClose} />}

    </span >
  );
}
type MapLoadResult = {
  isLoading: boolean,
  error: ErrorInfo | null,
  map: MapInfo | null
}

export const fetchMapById = (id: number): MapLoadResult => {

  const service: Client = useSelector(activeInstance);
  const { isLoading, error, data } = useQuery<unknown, ErrorInfo, MapInfo[]>('maps', () => {
    return service.fetchAllMaps();
  });

  const result = data?.find(m => m.id == id);
  const map = result ? result : null;
  return { isLoading: isLoading, error: error, map: map };
}


export const handleOnMutationSuccess = (onClose: () => void, queryClient: QueryClient): void => {
  queryClient.invalidateQueries('maps')
  onClose();
}

export type SimpleDialogProps = {
  mapId: number,
  onClose: () => void
}

export default ActionDispatcher;


