import { EditState } from './pages/edit/edit-state';
import { ListState } from './pages/list/list-state';

export interface AppState {
    list: ListState;
    edit: EditState;
}
