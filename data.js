export const data1 = [
  {
    status: 'sent',
    photo:
      'https://jojo-receipt.s3.amazonaws.com/dev-receipts/002387124c2a4a68bfebcf5eeaab6929_user2.png',
    first_name: 'Marry',
    last_name: 'Jane',
    message: 'Transaction submitted',
    note: '',
    date_time: '2017-10-10'
  },
  {
    status: 'approved',
    photo: 'http://demo.powowbox.com/powowbox/avatar_demo/Jane_0001.png',
    first_name: 'Muhammad',
    last_name: 'Soleh',
    message: 'Transaction approved',
    note: 'Aku sih yes',
    date_time: '2017-13-10'
  },
  {
    status: 'approved',
    photo:
      'https://cdn.pixabay.com/photo/2017/03/01/22/18/avatar-2109804__340.png',
    first_name: 'Muhammad',
    last_name: 'Soleh',
    message: 'Transaction approved',
    note: 'Aku sih yes',
    date_time: '2017-13-10'
  },
  {
    status: '',
    photo:
      'https://cdn.pixabay.com/photo/2017/03/01/22/18/avatar-2109804__340.png',
    first_name: 'Ali',
    last_name: 'Sangadji',
    message: 'Waiting for approval',
    note: '',
    date_time: ''
  }
]

export const data2 = [
  {
    status: 'sent',
    photo:
      'https://jojo-receipt.s3.amazonaws.com/dev-receipts/002387124c2a4a68bfebcf5eeaab6929_user2.png',
    first_name: 'Marry',
    last_name: 'Jane',
    message: 'Transaction submitted',
    note: '',
    html:
      "<p class='no-margin'><span class='fa fa-angellist'></span> Custom HTML <span class='fa fa-angellist'></span></p>",
    date_time: '2017-10-10'
  },
  {
    status: 'sent',
    photo: '',
    first_name: 'Muhammad',
    last_name: 'Soleh',
    message: 'On approve',
    items: [
      {
        status: 'approved',
        message: 'Item 1 approved',
        date_time: '2017-13-10'
      },
      {
        status: 'sent',
        message: 'Item 2 waiting for approval',
        date_time: '2017-13-10'
      }
    ],
    date_time: '2017-13-10'
  }
]
