import { MessageDefinitionField } from "@lichtblick/message-definition";

export function messageDefinitionHasDataFields(fields: MessageDefinitionField[]): boolean {
  return fields.some((field) => field.isConstant !== true);
}
