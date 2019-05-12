import { extractHotelInformation, sortHotels } from './HotelInfo'

describe('extractHotelInformation', () => {
  const minTestData = {
    id: '1',
    property: {
      propertyId: '1',
      title: 'Test 1',
      address: ['1 Test Rd', 'Testville'],
      previewImage: {
        url: 'https://unsplash.it/145/125/?random',
        caption: 'Image of Test',
        imageType: 'PRIMARY',
      },
      rating: {
        ratingValue: 1,
        ratingType: 'self',
      },
    },
  }

  it('gets default data when there is no offer', () => {
    expect(extractHotelInformation(minTestData)).toEqual({
      id: '1',
      title: 'Test 1',
      address: '1 Test Rd, Testville',
      imageData: {
        url: 'https://unsplash.it/145/125/?random',
        caption: 'Image of Test',
        imageType: 'PRIMARY',
      },
      ratingData: {
        ratingValue: 1,
        ratingType: 'self',
      },
      offerType: '',
      offerRoom: '',
      price: null,
      savings: null,
      currency: '',
      cancellationType: 'NOT_REFUNDABLE',
    })
  })

  const completeTestData = {
    id: '2',
    property: {
      propertyId: '2',
      title: 'Test 2',
      address: ['2 Test Rd', 'Testville'],
      previewImage: {
        url: 'https://unsplash.it/145/125/?random',
        caption: 'Image of Test',
        imageType: 'PRIMARY',
      },
      rating: {
        ratingValue: 2,
        ratingType: 'self',
      },
    },
    offer: {
      promotion: {
        title: 'Test Deal',
        type: 'MEMBER',
      },
      name: 'Test Room',
      displayPrice: {
        amount: 123.0,
        currency: 'AUD',
      },
      savings: {
        amount: 100.0,
        currency: 'AUD',
      },
      cancellationOption: {
        cancellationType: 'FREE_CANCELLATION',
      },
    },
  }

  it('gets correct data when there is an offer', () => {
    expect(extractHotelInformation(completeTestData)).toEqual({
      id: '2',
      title: 'Test 2',
      address: '2 Test Rd, Testville',
      imageData: {
        url: 'https://unsplash.it/145/125/?random',
        caption: 'Image of Test',
        imageType: 'PRIMARY',
      },
      ratingData: {
        ratingValue: 2,
        ratingType: 'self',
      },
      offerType: 'Test Deal',
      offerRoom: 'Test Room',
      price: 123.0,
      savings: 100.0,
      currency: 'AUD',
      cancellationType: 'FREE_CANCELLATION',
    })
  })
})

// Test data is a cut-down version of the full set of data
// to keep the test readable if it fails
describe('sortHotels', () => {
  const testData = [
    {
      offer: {
        displayPrice: {
          amount: 1.0,
          currency: 'AUD',
        },
      },
    },
    {
      offer: {
        displayPrice: {
          amount: 4.0,
          currency: 'AUD',
        },
      },
    },
    {
      offer: {
        displayPrice: {
          amount: 2.0,
          currency: 'AUD',
        },
      },
    },
    {
      offer: {
        displayPrice: {
          amount: 3.0,
          currency: 'AUD',
        },
      },
    },
    {
      offer: {
        displayPrice: {
          amount: 5.0,
          currency: 'AUD',
        },
      },
    },
  ]

  it('sorts by default order correctly', () => {
    expect(sortHotels(testData, 'default')).toEqual([
      {
        offer: {
          displayPrice: {
            amount: 1.0,
            currency: 'AUD',
          },
        },
      },
      {
        offer: {
          displayPrice: {
            amount: 4.0,
            currency: 'AUD',
          },
        },
      },
      {
        offer: {
          displayPrice: {
            amount: 2.0,
            currency: 'AUD',
          },
        },
      },
      {
        offer: {
          displayPrice: {
            amount: 3.0,
            currency: 'AUD',
          },
        },
      },
      {
        offer: {
          displayPrice: {
            amount: 5.0,
            currency: 'AUD',
          },
        },
      },
    ])
  })

  it('sorts by ascending order correctly', () => {
    expect(sortHotels(testData, 'ascending')).toEqual([
      {
        offer: {
          displayPrice: {
            amount: 1.0,
            currency: 'AUD',
          },
        },
      },
      {
        offer: {
          displayPrice: {
            amount: 2.0,
            currency: 'AUD',
          },
        },
      },
      {
        offer: {
          displayPrice: {
            amount: 3.0,
            currency: 'AUD',
          },
        },
      },
      {
        offer: {
          displayPrice: {
            amount: 4.0,
            currency: 'AUD',
          },
        },
      },
      {
        offer: {
          displayPrice: {
            amount: 5.0,
            currency: 'AUD',
          },
        },
      },
    ])
  })

  it('sorts by descending order correctly', () => {
    expect(sortHotels(testData, 'descending')).toEqual([
      {
        offer: {
          displayPrice: {
            amount: 5.0,
            currency: 'AUD',
          },
        },
      },
      {
        offer: {
          displayPrice: {
            amount: 4.0,
            currency: 'AUD',
          },
        },
      },
      {
        offer: {
          displayPrice: {
            amount: 3.0,
            currency: 'AUD',
          },
        },
      },
      {
        offer: {
          displayPrice: {
            amount: 2.0,
            currency: 'AUD',
          },
        },
      },
      {
        offer: {
          displayPrice: {
            amount: 1.0,
            currency: 'AUD',
          },
        },
      },
    ])
  })
})
