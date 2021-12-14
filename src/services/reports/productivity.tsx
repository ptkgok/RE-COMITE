import pdfmake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { TDocumentDefinitions } from 'pdfmake/interfaces'

function ProductivityReport(payload) {
  pdfmake.vfs = pdfFonts.pdfMake.vfs

  const reportTitle = [
    {
      text: 'Relatório de Produtividade diária',
      fontSize: 15,
      bold: true,
      margin: [15, 20, 0, 45]
    }
  ]

  const data = payload.map(data => {
    return [
      { text: data.nome_completo, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: data.cpf, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: data.motivo, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: data.data_de_solicitacao, fontSize: 9, margin: [0, 2, 0, 2] }
    ]
  })

  console.log(data)

  const details = [
    {
      table: {
        headerRows: 1,
        widths: ['*', '*', '*', '*'],
        body: [
          [
            { text: 'Código', style: 'tableHeader', fontSize: 10 },
            { text: 'Código', style: 'tableHeader', fontSize: 10 },
            { text: 'Código', style: 'tableHeader', fontSize: 10 },
            { text: 'Código', style: 'tableHeader', fontSize: 10 }
          ],
          ...data
        ]
      },
      layout: 'headerLineOnly'
    }
  ]

  const Footer = (currentPage, pageCount) => {
    return [
      {
        text: currentPage + ' / ' + pageCount,
        aligment: 'right',
        fontSize: 9,
        bold: true,
        margin: [0, 10, 20, 45] // left, top, right, bottom
      }
    ]
  }

  const docDefinitions: any = {
    pageSize: 'A4',
    pageMargins: [15, 50, 15, 40],
    header: [reportTitle],
    content: [details],
    footer: Footer
  }

  return pdfmake.createPdf(docDefinitions).download()
}

export default ProductivityReport
