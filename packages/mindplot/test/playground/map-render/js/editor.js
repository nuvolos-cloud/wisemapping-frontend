import '../css/editor.less';
import { buildDesigner, loadDesignerOptions, loadExample } from './loader';
import { PersistenceManager } from '../../../../src';

const example = async () => {
  const mapId = 'welcome';
  const options = await loadDesignerOptions();
  const designer = buildDesigner(options);

  // Load map from XML file persisted on disk...
  const persistence = PersistenceManager.getInstance();
  const mindmap = persistence.load(mapId);
  designer.loadMap(mindmap);
};

loadExample(example);
