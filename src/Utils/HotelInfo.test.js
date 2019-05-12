import { extractHotelInformation } from './HotelInfo'

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
