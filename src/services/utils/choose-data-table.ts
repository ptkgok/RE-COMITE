export function ChooseColumns(
  columns: string[],
  columnsToChoose: string[]
): string[] {
  return columns.filter((column) => columnsToChoose.includes(column));
}