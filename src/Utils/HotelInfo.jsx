import _join from 'lodash/join'
import _get from 'lodash/get'

export const extractHotelInformation = hotelData => {
  return {
    id: hotelData.id,
    title: hotelData.property.title,
    address: _join(hotelData.property.address, ', '),
    imageData: hotelData.property.previewImage,
    ratingData: hotelData.property.rating,
    offerType: _get(hotelData, 'offer.promotion.title', ''),
    offerRoom: _get(hotelData, 'offer.name', ''),
    price: _get(hotelData, 'offer.displayPrice.amount', null),
    savings: _get(hotelData, 'offer.savings.amount', null),
    currency: _get(hotelData, 'offer.displayPrice.currency', ''),
    cancellationType: _get(
      hotelData,
      'offer.cancellationOption.cancellationType',
      'NOT_REFUNDABLE'
    ),
  }
}

export const sortHotels = (hotels, sortType) => {
  if (sortType === 'default') {
    return hotels
  } else if (sortType === 'ascending') {
    return hotels.sort((a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount)
  } else if (sortType === 'descending') {
    return hotels.sort((a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount)
  }

  return hotels
}
