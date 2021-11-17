import PdfPrinter from "pdfmake";
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { VercelRequest, VercelResponse } from '@vercel/node'
import { Prisma } from 'services/utils/prisma-client'

export default async (request: VercelRequest, response: VercelResponse) => {

  // Configs
  const fonts = {
    Helvetica: {
      normal: "Helvetica",
      bold: "Helvetica-Bold",
      italics: "Helvetica-Oblique",
      bolditalics: "Helvetica-BoldOblique"
    }
  }
  const Printer = new PdfPrinter(fonts)
  

  // Definition of PDF
  // const ProdutividadeDiaria = await Prisma.$queryRaw`SELECT * from RG WHERE Status like ${Status} and DataDeSolicitacao between ${DataDeSolicitacaoInicial} and ${DataDeSolicitacaoFinal} order by DataDeSolicitacao, NomeCompleto asc`;
  // const body = []
  
  const docDefinitions: TDocumentDefinitions = {
    defaultStyle: { font: "Helvetica" },
    info: { title: "Relatorio",  },
    pageMargins: [15,35,15,40],
    pageSize: 'A4',
    content: [
      { alignment: "justify",
        columns: [
          { text: 'Relatório de Produtividade Diária', style: 'header', alignment: 'left' },
          { text: 'Logo', alignment: 'right' }
        ]
       },
      { text: "Relatório teste" },
      { table: {
        heights: function (row) { return (row + 1) * 25 },
        body: [[
          { text: "Descrição", style: "columnsTitle" },
          { text: "Descrição1", style: "columnsTitle" },
          { text: "Descrição2", style: "columnsTitle" },
          ], 
          // ...body
        ]
      }}
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        alignment: 'center'
      },
      columnsTitle: {
        fillColor: "#0074c1",
        color: "#fff",
        alignment: "center",
        fontSize: 13
      }
    }
  }
  
  const PdfDoc = Printer.createPdfKitDocument(docDefinitions)
  
  const chunks = []
  PdfDoc.on('data', (chunk) => chunks.push(chunk))
  PdfDoc.end()
  PdfDoc.on("end", () => response.end(chunks))
}
