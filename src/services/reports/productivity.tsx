import pdfmake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

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

  const data = payload.map(data => { // pass array returned of report form
    return [
      {
        text: 'Código',
        style: 'tableHeader',
        fontSize: 9,
        margin: [0, 2, 0, 2]
      },
      {
        text: 'Código',
        style: 'tableHeader',
        fontSize: 9,
        margin: [0, 2, 0, 2]
      },
      {
        text: 'Código',
        style: 'tableHeader',
        fontSize: 9,
        margin: [0, 2, 0, 2]
      },
      {
        text: 'Código',
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
          [
            { text: 'Código', style: 'tableHeader', fontSize: 10 },
            { text: 'Código', style: 'tableHeader', fontSize: 10 },
            { text: 'Código', style: 'tableHeader', fontSize: 10 },
            { text: 'Código', style: 'tableHeader', fontSize: 10 }
          ],
          [
            {  text: '00001', fontSize: 9, margin: [0, 2, 0, 2] },
            {  text: 'Heber', fontSize: 9, margin: [0, 2, 0, 2] },
            {  text: 'heber@99coders.com', fontSize: 9, margin: [0, 2, 0, 2] },
            {  text: '(11) 0000-0000', fontSize: 9, margin: [0, 2, 0, 2] }
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

  const docDefinitions = {
    pageSize: 'A4',
    pageMargins: [15, 50, 15, 40],
    header: [reportTitle],
    content: [details],
    footer: Footer
  }

  return pdfmake.createPdf(docDefinitions).download()
}

export default ProductivityReport
