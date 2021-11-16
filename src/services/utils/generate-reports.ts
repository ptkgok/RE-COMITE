 import PdfPrinter from "pdfmake";
import { TDocumentDefinitions } from "pdfmake/interfaces";

export const GenerateReports = (payload) => {
  const fonts = {
    Helvetica: {
      normal: "Helvetica",
      bold: "Helvetica-Bold",
      italics: "Helvetica-Oblique",
      bolditalics: "Helvetica-BoldOblique"
    }
  }
  
  const Printer = new PdfPrinter(fonts)
  
  const docDefinitions: TDocumentDefinitions = {
    defaultStyle: { font: "Helvetica" },
    pageMargins: [15,50,15,40],
    pageSize: 'A4',
    content: [
      { text: "Relatório teste" }
    ]
  }
  
  const PdfDoc = Printer.createPdfKitDocument(docDefinitions)
  
  return PdfDoc.save()
}
