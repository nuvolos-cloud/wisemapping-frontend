import { Designer, Topic } from '@wisemapping/mindplot';
import NodeProperty from '../node-property';
import {
  getTheUniqueValueOrNull,
  SwitchValueDirection,
  getPreviousValue,
  fontSizes,
  getNextValue,
} from '../../../components/toolbar/ToolbarValueModelBuilder';

class NodePropertyBuilder {
  designer: Designer;

  fontSizeModel: NodeProperty;
  selectedTopicColorModel: NodeProperty;
  fontFamilyModel: NodeProperty;
  fontStyleModel: NodeProperty;
  borderColorModel: NodeProperty;
  fontColorModel: NodeProperty;
  topicShapeModel: NodeProperty;
  topicIconModel: NodeProperty;
  noteModel: NodeProperty;
  linkModel: NodeProperty;

  constructor(designer: Designer) {
    this.designer = designer;
  }

  private selectedTopic() {
    return this.designer.getModel().selectedTopic();
  }

  private getFontSize() {
    return this.designer.getModel().selectedTopic()?.getFontSize();
  }

  private uniqueOrNull(propertyGetter: (Topic: Topic) => any | null) {
    const nodes = this.designer.getModel().filterSelectedTopics();
    return getTheUniqueValueOrNull(nodes, propertyGetter);
  }

  /**
   *
   * @returns model to and switch font weigth
   */
  fontWeigthModel(): NodeProperty {
    return {
      getValue: () => this.designer.getModel().selectedTopic()?.getFontWeight(),
      switchValue: () => this.designer.changeFontWeight(),
    };
  }

  /**
   *
   * @returns model to and switch font size in both directions. Font sizes used to iterate: [6, 8, 10, 15]
   */
  getFontSizeModel(): NodeProperty {
    if (!this.fontSizeModel)
      this.fontSizeModel = {
        getValue: () => this.getFontSize(),
        switchValue: (direction?) => {
          let newValue = undefined;
          if (direction === SwitchValueDirection.down) {
            newValue = getPreviousValue(fontSizes, this.getFontSize());
          }
          if (direction === SwitchValueDirection.up) {
            newValue = getNextValue(fontSizes, this.getFontSize());
          }
          this.designer.changeFontSize(newValue);
        },
      };
    return this.fontSizeModel;
  }

  /**
   *
   * @returns model to get and set topic color
   */
  getSelectedTopicColorModel(): NodeProperty {
    if (!this.selectedTopicColorModel)
      this.selectedTopicColorModel = {
        getValue: () => this.designer.getModel().selectedTopic()?.getBackgroundColor(),
        setValue: (color) => this.designer.changeBackgroundColor(color),
      };

    return this.selectedTopicColorModel;
  }

  /**
   *
   * @returns model to get and set the node link
   */
  getLinkModel(): NodeProperty {
    // const selected = this.selectedTopic();
    if (!this.linkModel)
      this.linkModel = {
        getValue: (): string => this.selectedTopic()?.getLinkValue(),
        setValue: (value: string) => {
          if (value && value.trim() !== '') {
            this.selectedTopic().setLinkValue(value);
          } else {
            this.selectedTopic().setLinkValue(undefined);
          }
        },
      };
    return this.linkModel;
  }

  /**
   *
   * @returns model to get and set topic border color
   */
  getColorBorderModel(): NodeProperty {
    if (!this.borderColorModel)
      this.borderColorModel = {
        getValue: () => this.uniqueOrNull((node) => node.getBorderColor()),
        setValue: (hex: string) => this.designer.changeBorderColor(hex),
      };
    return this.borderColorModel;
  }

  /**
   *
   * @returns model to get and set topic font color
   */
  getFontColorModel(): NodeProperty {
    if (!this.fontColorModel)
      this.fontColorModel = {
        getValue: () => this.uniqueOrNull((node) => node.getFontColor()),
        setValue: (hex: string) => this.designer.changeFontColor(hex),
      };
    return this.fontColorModel;
  }

  /**
   *
   * @returns model to get and set topic icon
   */
  getTopicIconModel(): NodeProperty {
    if (!this.topicIconModel)
      this.topicIconModel = {
        getValue: () => null,
        setValue: (value: string) => {
          const values = value.split(':');
          this.designer.addIconType(values[0] as 'image' | 'emoji', values[1]);
        },
      };
    return this.topicIconModel;
  }

  /**
   *
   * @returns model to get and set topic note
   */
  getNoteModel(): NodeProperty {
    if (!this.noteModel)
      this.noteModel = {
        getValue: (): string => this.selectedTopic()?.getNoteValue(),
        setValue: (value: string) => {
          const note = value && value.trim() !== '' ? value : undefined;
          this.selectedTopic()?.setNoteValue(note);
        },
      };
    return this.noteModel;
  }

  /**
   *
   * @returns model to get and set topic font family
   */
  getFontFamilyModel(): NodeProperty {
    if (!this.fontFamilyModel)
      this.fontFamilyModel = {
        getValue: () => this.uniqueOrNull((node) => node.getFontFamily()),
        setValue: (value: string) => this.designer.changeFontFamily(value),
      };
    return this.fontFamilyModel;
  }

  /**
   *
   * @returns model to get and switch topic style
   */
  getFontStyleModel(): NodeProperty {
    if (!this.fontStyleModel)
      this.fontStyleModel = {
        getValue: () => this.selectedTopic()?.getFontStyle(),
        switchValue: () => this.designer.changeFontStyle(),
      };
    return this.fontStyleModel;
  }

  /**
   *
   * @returns model to get and set topic shape
   */
  getTopicShapeModel(): NodeProperty {
    if (!this.topicShapeModel)
      this.topicShapeModel = {
        getValue: () => this.uniqueOrNull((node) => node.getShapeType()),
        setValue: (value: string) => this.designer.changeTopicShape(value),
      };
    return this.topicShapeModel;
  }
}
export default NodePropertyBuilder;
