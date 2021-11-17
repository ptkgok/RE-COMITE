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
      { text: "Relatório teste" },
      { table: {
        body: [["Descrição", "Preço", "Quantidade"]]
      } }
    ]
  }
  
  const PdfDoc = Printer.createPdfKitDocument(docDefinitions)
  
  const chunks = []

  PdfDoc.on('data', (chunk) => {
    console.log(chunk)
    chunks.push(chunk)
  })
  PdfDoc.end()

  PdfDoc.on("end", (chunk) => {
    const result = Buffer.concat(chunk)
    PdfDoc.emit
    return result
  })

}
