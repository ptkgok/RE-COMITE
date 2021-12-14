import pdfmake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { ContentTocItem, TDocumentDefinitions } from 'pdfmake/interfaces'

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

  const HeaderTable = payload.map(data => { // pass array returned of report form
    return [
      {
        text: 'Nome Completo',
        style: 'tableHeader',
        fontSize: 9,
        margin: [0, 2, 0, 2]
      },
      {
        text: 'CPF',
        style: 'tableHeader',
        fontSize: 9,
        margin: [0, 2, 0, 2]
      },
      {
        text: 'Motivo',
        style: 'tableHeader',
        fontSize: 9,
        margin: [0, 2, 0, 2]
      },
      {
        text: 'Data de solicitação',
        style: 'tableHeader',
        fontSize: 9,
        margin: [0, 2, 0, 2]
      }
    ]
  })

  const details = [
    {
      table: {
        headerRows: 1,
        widths: ['*', '*', '*', '*'],
        body: [
          HeaderTable,
          [
            payload.map(data => {
              return [
                { text: data.nome_completo, fontSize: 9, margin: [0, 2, 0, 2] },
                { text: data.cpf, fontSize: 9, margin: [0, 2, 0, 2] },
                { text: data.motivo, fontSize: 9, margin: [0, 2, 0, 2] },
                { text: data.data_de_solicitacao, fontSize: 9, margin: [0, 2, 0, 2] }
              ]
            })
          ]
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

  const docDefinitions: TDocumentDefinitions = {
    pageSize: 'A4',
    pageMargins: [15, 50, 15, 40],
    header: [],
    content: [details],
  }

  return pdfmake.createPdf(docDefinitions).download()
}

export default ProductivityReport
