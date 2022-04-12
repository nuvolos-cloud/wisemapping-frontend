/*
 *    Copyright [2021] [wisemapping]
 *
 *   Licensed under WiseMapping Public License, Version 1.0 (the "License").
 *   It is basically the Apache License, Version 2.0 (the "License") plus the
 *   "powered by wisemapping" text requirement on every single page;
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the license at
 *
 *       http://www.wisemapping.org/license
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */
import BootstrapDialog from '../bootstrap/BootstrapDialog';
import { $msg } from '@wisemapping/mindplot';


class KeyboardShortcutDialog extends BootstrapDialog {
    constructor() {
        super($msg('SHORTCUTS'), {
            closeButton: true,
            acceptButton: false,
        });
        this.setContent(`<div id="keyboardTable">
    <table>
        <colgroup>
            <col width="40%"/>
            <col width="30%"/>
            <col width="30%"/>
        </colgroup>
        <thead>
        <tr>
            <th>${$msg('ACTION')}</th>
            <th>Windows - Linux</th>
            <th>Mac OS X</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>${$msg('SAVE_CHANGES')}</td>
            <td>${$msg('CTRL')} + S</td>
            <td>⌘ + S</td>
        </tr>
        <tr>
            <td>${$msg('CREATE_SIBLING_TOPIC')}</td>
            <td>Enter</td>
            <td>Enter</td>
        </tr>
        <tr>
            <td>${$msg('CREATE_CHILD_TOPIC')}</td>
            <td>${$msg('K_INSERT')} / Tab</td>
            <td>⌘ + Enter / Tab</td>
        </tr>
        <tr>
            <td>${$msg('DELETE_TOPIC')}</td>
            <td>${$msg('K_DELETE')}</td>
            <td>Delete</td>
        </tr>
        <tr>
            <td>${$msg('EDIT_TOPIC_TEXT')}</td>
            <td>${$msg('JUST_START_TYPING')} | F2</td>
            <td>${$msg('JUST_START_TYPING')} | F2</td>
        </tr>
        <tr>
            <td>${$msg('MULTIPLE_LINES')}</td>
            <td>${$msg('CTRL')} + Enter</td>
            <td>⌘ + Enter</td>
        </tr>
        <tr>
            <td>${$msg('COPY_AND_PASTE_TOPICS')}</td>
            <td>${$msg('CTRL')} + C / ${$msg('CTRL')} + V</td>
            <td>⌘ + C / ⌘ + V</td>
        </tr>

        <tr>
            <td>${$msg('COLLAPSE_CHILDREN')}</td>
            <td>${$msg('SPACE_BAR')}</td>
            <td>${$msg('SPACE_BAR')}</td>
        </tr>
        <tr>
            <td>${$msg('TOPIC_NAVIGATION')}</td>
            <td>${$msg('ARROW_KEYS')}</td>
            <td>${$msg('ARROW_KEYS')}</td>
        </tr>
        <tr>
            <td>${$msg('SELECT_MULTIPLE_NODES')}</td>
            <td>${$msg('CTRL')} + ${$msg('MOUSE_CLICK')}</td>
            <td>${$msg('CTRL')} + ${$msg('MOUSE_CLICK')}</td>
        </tr>
        <tr>
            <td>${$msg('UNDO_EDITION')}</td>
            <td>${$msg('CTRL')} + Z</td>
            <td>⌘ + Z</td>
        </tr>
        <tr>
            <td>${$msg('REDO_EDITION')}</td>
            <td>${$msg('CTRL')} + Shift + Z</td>
            <td>⌘ + Shift + Z</td>
        </tr>
        <tr>
            <td>${$msg('SELECT_ALL_TOPIC')}</td>
            <td>${$msg('CTRL')} + A</td>
            <td>⌘ + A</td>
        </tr>
        <tr>
            <td>${$msg('CANCEL_TEXT_CHANGES')}</td>
            <td>Esc</td>
            <td>Esc</td>
        </tr>
        <tr>
            <td>${$msg('DESELECT_ALL_TOPIC')}</td>
            <td>${$msg('CTRL')} + Shift + A</td>
            <td>⌘ + Shift + A</td>
        </tr>
        <tr>
            <td>${$msg('CHANGE_TEXT_ITALIC')}</td>
            <td>${$msg('CTRL')} + I</td>
            <td>⌘ + I</td>
        </tr>
        <tr>
            <td>${$msg('CHANGE_TEXT_BOLD')}</td>
            <td>${$msg('CTRL')} + B</td>
            <td>⌘ + B</td>
        </tr>
        <tr>
            <td>${$msg('TOPIC_NOTE')}</td>
            <td>${$msg('CTRL')} + K</td>
            <td>⌘ + K</td>
        </tr>
        <tr>
            <td>${$msg('TOPIC_LINK')}</td>
            <td>${$msg('CTRL')} + L</td>
            <td>⌘ + L</td>
        </tr>
        </tbody>
    </table>
</div>`);
        this.show();
    }
}

export default KeyboardShortcutDialog;
