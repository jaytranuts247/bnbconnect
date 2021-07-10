const state = {
  booking: {
    startDate: "2021-05-12T04:00:00.000Z",
    endDate: "2021-05-21T04:00:00.000Z",
    adultsNum: 2,
    childrenNum: 0,
    infantsNum: 0,
    region: null,
    toggleGuest: false,
    toggleLocationSearch: false,
    toggleCheckIn: false,
    toggleCheckOut: false,
    toggleDatePick: false,
  },
  user: {
    user: {
      _id: "609052677bced9a9f7009918",
      firstName: "Jay",
      lastName: "Tran",
      email: "jaytranuts247@gmail.com",
      date: "2021-05-03T19:43:35.752Z",
    },

    loading: false,
    isAuthenticated: true,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwOTA1MjY3N2JjZWQ5YTlmNzAwOTkxOCJ9LCJpYXQiOjE2MjM4NzUyMjIsImV4cCI6MTYyNDIzNTIyMn0.dBI7IVgvY9fSRfPXl5OLpXyLPERzljMEFnVXoECTo8E",
    errors: null,
  },
  user_booking: {
    bookings: [
      {
        _id: "6098c6baac4f567fe63aa96c",
        listing_id: "60884626bf7d061402145df0",
        guest_id: "609052677bced9a9f7009918",
        checkIn: "2021-09-09T19:43:35.752Z",
        checkOut: "2021-09-16T19:43:35.752Z",
        createdAt: "2021-05-10T05:38:02.951Z",
        updatedAt: "2021-05-10T05:38:02.951Z",
      },
      {
        _id: "609a096d7aa30a1ee60d89ab",
        listing_id: "60884626bf7d061402145df0",
        guest_id: "609052677bced9a9f7009918",
        checkIn: "2022-05-10T04:00:00.000Z",
        checkOut: "2022-05-19T04:00:00.000Z",
        createdAt: "2021-05-11T04:34:53.451Z",
        updatedAt: "2021-05-11T04:34:53.451Z",
      },
      {
        _id: "609c1d7883742a63e23067fa",
        listing_id: "60884626bf7d061402145faf",
        guest_id: "609052677bced9a9f7009918",
        checkIn: "2022-05-10T04:00:00.000Z",
        checkOut: "2022-05-19T04:00:00.000Z",
        createdAt: "2021-05-12T18:24:56.918Z",
        updatedAt: "2021-05-12T18:24:56.918Z",
      },
    ],
    booking_listings: [
      {
        coords: {
          lat: 36.11366,
          lng: -115.18859,
        },
        locationInfo: {
          description: "Las Vegas, NV, USA",
          place_id: "ChIJ69QoNDjEyIARTIMmDF0Z4kM",
        },
        user: {
          id: "166077839",
          pictureUrl:
            "https://a0.muscache.com/im/pictures/user/de0d730b-5561-4027-9099-7647a3a336fa.jpg?aki_policy=profile_x_medium",
          thumbnailUrl:
            "https://a0.muscache.com/im/pictures/user/de0d730b-5561-4027-9099-7647a3a336fa.jpg?aki_policy=profile_small",
        },
        serviceFee: {
          description: "Service fee",
          priceString: "$145",
        },
        cleaningFee: {
          description: "Cleaning fee",
          priceString: "$85",
        },
        previewAmenityNames: [
          "Pool",
          "Wifi",
          "Free parking",
          "Air conditioning",
        ],
        previewInfo: ["6 guests", "2 bedrooms", "3 beds", "2 baths"],
        amenities: ["Pool", "Wifi", "Free parking", "Air conditioning"],
        _id: "60884626bf7d061402145e34",
        title: "Beautiful 2BR/2BA, Spa & Pool, Room w/ Strip view",
        type: "Entire apartment in Las Vegas",
        location: " Las Vegas",
        pricePerNight: "$94",
        ratings: "4.71",
        reviewNumber: "195",
        city: "Las Vegas",
        avgRating: 4.71,
        kickerContent: "Entire apartment in Las Vegas",
        roomAndPropertyType: "Entire apartment",
        publicAddress: "Las Vegas, NV, United States",
        images: [
          {
            _id: "60884626bf7d061402145e35",
            id: "603033642",
            picture:
              "https://a0.muscache.com/im/pictures/04aa4551-b94e-46bb-8259-0d5415d65266.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e36",
            id: "600289517",
            picture:
              "https://a0.muscache.com/im/pictures/18750a79-df79-4a4e-b650-37a7e021b9eb.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e37",
            id: "600912671",
            picture:
              "https://a0.muscache.com/im/pictures/65b06f90-1b5c-467e-b937-40e7261d9ce7.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e38",
            id: "603033473",
            picture:
              "https://a0.muscache.com/im/pictures/83b24bfb-8cb5-46cf-b570-4d7c78a3db82.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e39",
            id: "603033559",
            picture:
              "https://a0.muscache.com/im/pictures/80f7b638-d2e9-45b5-956f-6e04a7dd52b8.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e3a",
            id: "603033673",
            picture:
              "https://a0.muscache.com/im/pictures/34df7923-0f89-499a-9fe1-b8d644cf7a01.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e3b",
            id: "465371476",
            picture:
              "https://a0.muscache.com/im/pictures/fbf884f9-edd4-478a-b73d-8589eb3c9254.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e3c",
            id: "465371480",
            picture:
              "https://a0.muscache.com/im/pictures/1537faf4-b3a8-44df-b6e2-01ee1062de03.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e3d",
            id: "603044493",
            picture:
              "https://a0.muscache.com/im/pictures/46af9cf3-2df6-456d-910a-e1687ed76218.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e3e",
            id: "465371499",
            picture:
              "https://a0.muscache.com/im/pictures/60189e0f-b116-45d9-8622-5d3787b1be44.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e3f",
            id: "465371485",
            picture:
              "https://a0.muscache.com/im/pictures/bf3be550-62a5-4247-8934-d18b8ea0db22.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e40",
            id: "465371482",
            picture:
              "https://a0.muscache.com/im/pictures/7a2b9440-96dd-4361-bf4f-e2f7b9ffa86d.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e41",
            id: "465371489",
            picture:
              "https://a0.muscache.com/im/pictures/35ecfe6c-490d-4ab8-9776-fa336ee730d7.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e42",
            id: "465371495",
            picture:
              "https://a0.muscache.com/im/pictures/9739c67c-8f19-49bd-a699-a761b6158328.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e43",
            id: "465371509",
            picture:
              "https://a0.muscache.com/im/pictures/e00dada8-6157-44bb-969a-83f209d0cfb1.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e44",
            id: "465371515",
            picture:
              "https://a0.muscache.com/im/pictures/0962a55d-1742-4557-b791-70a539c5f8f0.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e45",
            id: "454015863",
            picture:
              "https://a0.muscache.com/im/pictures/e8ca462d-19df-4255-b594-95be75bfa087.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e46",
            id: "465371522",
            picture:
              "https://a0.muscache.com/im/pictures/3ca4a3d7-70ea-464b-866e-2e9aeb171ffd.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e47",
            id: "503010167",
            picture:
              "https://a0.muscache.com/im/pictures/e7b259ab-e134-4ac1-b340-1be25af74ecb.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e48",
            id: "465371481",
            picture:
              "https://a0.muscache.com/im/pictures/777c9d08-37c5-45ba-9956-699aa4f3d67c.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e49",
            id: "454016294",
            picture:
              "https://a0.muscache.com/im/pictures/4dc69d64-72fe-43a3-83ba-c6995076aa18.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e4a",
            id: "580182800",
            picture:
              "https://a0.muscache.com/im/pictures/64567360-58f4-4312-9d23-f32049edd230.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e4b",
            id: "610226570",
            picture:
              "https://a0.muscache.com/im/pictures/4fc06c10-f859-44a9-a0b0-c3adda1615bb.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e4c",
            id: "465371548",
            picture:
              "https://a0.muscache.com/im/pictures/71310365-4324-4cd4-92c7-9a18d3f137c1.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e4d",
            id: "458060162",
            picture:
              "https://a0.muscache.com/im/pictures/bb8b1429-6da9-4ad2-b052-2fc4ffc3e859.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e4e",
            id: "480718095",
            picture:
              "https://a0.muscache.com/im/pictures/9750ae69-31e3-41ea-a531-225fd4e42f15.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e4f",
            id: "465053383",
            picture:
              "https://a0.muscache.com/im/pictures/eac27991-641b-4ad2-bc7d-2006147d6ce9.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e50",
            id: "465053315",
            picture:
              "https://a0.muscache.com/im/pictures/4ef94cc4-c1cc-47ec-96b4-2655c1d77604.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e51",
            id: "465371457",
            picture:
              "https://a0.muscache.com/im/pictures/64546d37-556d-49e1-9521-96533c21c70a.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e52",
            id: "461000213",
            picture:
              "https://a0.muscache.com/im/pictures/945083da-7d49-4580-8d2a-e9a1f2b53b26.jpg?im_w=720",
          },
        ],
        listingLink:
          "https://www.airbnb.com/rooms/23420867?adults=3&check_in=2021-09-06&check_out=2021-09-16&previous_page_section_name=1000&federated_search_id=19476236-676f-40af-b496-9d23fc0b0f04",
        __v: 0,
        checkIn: "2021-May-12",
        checkOut: "2021-May-21",
      },
      {
        coords: {
          lat: 36.10774,
          lng: -115.16594,
        },
        locationInfo: {
          description: "Las Vegas, NV, USA",
          place_id: "ChIJ69QoNDjEyIARTIMmDF0Z4kM",
        },
        user: {
          id: "32782189",
          pictureUrl:
            "https://a0.muscache.com/im/users/32782189/profile_pic/1434515001/original.jpg?aki_policy=profile_x_medium",
          thumbnailUrl:
            "https://a0.muscache.com/im/users/32782189/profile_pic/1434515001/original.jpg?aki_policy=profile_small",
        },
        serviceFee: {
          description: "Service fee",
          priceString: "$187",
        },
        cleaningFee: {
          description: "Cleaning fee",
          priceString: "$75",
        },
        previewAmenityNames: [
          "Pool",
          "Wifi",
          "Free parking",
          "Air conditioning",
        ],
        previewInfo: ["4 guests", "1 bedroom", "1 bed", "1.5 baths"],
        amenities: ["Pool", "Wifi", "Free parking", "Air conditioning"],
        _id: "60884626bf7d061402145e53",
        title: "MGM Signature Vegas 1BR Luxury Kitchen PoolW",
        type: "Entire apartment in Las Vegas",
        location: " Las Vegas",
        pricePerNight: "$125",
        ratings: "4.82",
        reviewNumber: "38",
        city: "Las Vegas",
        avgRating: 4.82,
        kickerContent: "Entire apartment in Las Vegas",
        roomAndPropertyType: "Entire apartment",
        publicAddress: "Las Vegas, NV, United States",
        images: [
          {
            _id: "60884626bf7d061402145e54",
            id: "953153846",
            picture:
              "https://a0.muscache.com/im/pictures/89a05c18-98c7-4830-ad29-f4ea58acd631.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e55",
            id: "953153847",
            picture:
              "https://a0.muscache.com/im/pictures/88a99d1d-2904-4048-877b-440bb6c34015.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e56",
            id: "953153848",
            picture:
              "https://a0.muscache.com/im/pictures/4a0a71a2-ac0e-4706-a453-2e09ed731de7.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e57",
            id: "953153849",
            picture:
              "https://a0.muscache.com/im/pictures/3677a5fc-a666-4869-a9f8-fc98ba253cd2.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e58",
            id: "953153850",
            picture:
              "https://a0.muscache.com/im/pictures/312867e0-4abc-47ad-95a5-1ff111ea17e3.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e59",
            id: "953153851",
            picture:
              "https://a0.muscache.com/im/pictures/7a039cc1-18a7-49a6-9aab-b594a06c5247.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e5a",
            id: "953153852",
            picture:
              "https://a0.muscache.com/im/pictures/fc3464df-1de3-44c6-8515-f71d28e448a5.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e5b",
            id: "953153853",
            picture:
              "https://a0.muscache.com/im/pictures/f9a61242-9ff8-4ba4-ba38-ae1ad4cc8269.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e5c",
            id: "953153854",
            picture:
              "https://a0.muscache.com/im/pictures/ca8dd2f3-8354-4d90-b485-894beee23ea6.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e5d",
            id: "953153855",
            picture:
              "https://a0.muscache.com/im/pictures/ec1c46c0-209c-4cff-99d3-8946b973a995.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e5e",
            id: "953153856",
            picture:
              "https://a0.muscache.com/im/pictures/7e002017-a5e4-470c-8dee-7e9120ce3bc9.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e5f",
            id: "953153857",
            picture:
              "https://a0.muscache.com/im/pictures/46b46551-3c7d-4a94-aa76-b3968d255cf4.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e60",
            id: "953153858",
            picture:
              "https://a0.muscache.com/im/pictures/b7adb849-9ccc-4ddd-baea-2abcc2f9aca9.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e61",
            id: "953153859",
            picture:
              "https://a0.muscache.com/im/pictures/607b3312-46f1-4364-be8c-3f3f9cc79a2c.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e62",
            id: "953153860",
            picture:
              "https://a0.muscache.com/im/pictures/85e49467-cc08-4e18-abb0-2c9f07fc580e.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e63",
            id: "953153861",
            picture:
              "https://a0.muscache.com/im/pictures/9527c7ba-546c-4d80-ba1c-41ee3b6ababb.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e64",
            id: "953153862",
            picture:
              "https://a0.muscache.com/im/pictures/bee521bf-1565-49f9-982e-2b7358c30b6f.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e65",
            id: "953153863",
            picture:
              "https://a0.muscache.com/im/pictures/174e6af0-d770-4056-a70d-ec12d87bb609.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e66",
            id: "953153864",
            picture:
              "https://a0.muscache.com/im/pictures/c11828a2-a868-4d60-89de-b156a2efde5f.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e67",
            id: "953153865",
            picture:
              "https://a0.muscache.com/im/pictures/a60607d5-87ea-4c4d-9105-bcb5e4d36438.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e68",
            id: "953153866",
            picture:
              "https://a0.muscache.com/im/pictures/2f3b8b15-f627-46e4-bbad-c5ed7063140c.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e69",
            id: "953153867",
            picture:
              "https://a0.muscache.com/im/pictures/d2b7f42e-e8b7-4268-9252-299adf2a0f30.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e6a",
            id: "953153868",
            picture:
              "https://a0.muscache.com/im/pictures/c8c9c462-ec14-4c9f-88d9-57b6a5971beb.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e6b",
            id: "953153869",
            picture:
              "https://a0.muscache.com/im/pictures/f579a75f-e56c-4df9-ab0d-8c2bb7b553c2.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e6c",
            id: "953153870",
            picture:
              "https://a0.muscache.com/im/pictures/e0304370-3930-40de-8567-1c8b27582255.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e6d",
            id: "953153871",
            picture:
              "https://a0.muscache.com/im/pictures/bf4d39cb-67cb-412d-9117-fb3b8d72092d.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e6e",
            id: "953153872",
            picture:
              "https://a0.muscache.com/im/pictures/1d196107-6046-40bc-81bf-1d2fa4bd1763.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e6f",
            id: "953153873",
            picture:
              "https://a0.muscache.com/im/pictures/818ea1a1-9681-4b31-8d7e-2eea514f614c.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e70",
            id: "953153874",
            picture:
              "https://a0.muscache.com/im/pictures/6c564698-28d5-4173-8cd8-f14d10faf98c.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e71",
            id: "953153875",
            picture:
              "https://a0.muscache.com/im/pictures/2796b102-f190-4c6b-88ac-33b1411169b2.jpg?im_w=720",
          },
        ],
        listingLink:
          "https://www.airbnb.com/rooms/41684329?adults=3&check_in=2021-09-06&check_out=2021-09-16&previous_page_section_name=1000&federated_search_id=19476236-676f-40af-b496-9d23fc0b0f04",
        __v: 0,
        checkIn: "2021-May-12",
        checkOut: "2021-May-21",
      },
    ],
    errors: null,
  },
  review: {
    reviews: [
      {
        _id: "60c11484604f2d0015341a76",
        listing_id: "60c10b9ae1720a37bfe0ff00",
        author_id: "609052677bced9a9f7009918",
        author_name: "Jay Tran",
        reviewContent: "This is dummy reviews.",
        accuracy: 5,
        communication: 5,
        cleanliness: 5,
        location: 5,
        checkin: 5,
        value: 5,
        createdAt: "2021-06-09T19:20:36.159Z",
        updatedAt: "2021-06-09T19:20:36.160Z",
      },
      {
        _id: "60c11484604f2d0015341a77",
        listing_id: "60c10b9ae1720a37bfe0ff00",
        author_id: "609052677bced9a9f7009918",
        author_name: "Jay Tran",
        reviewContent: "You can add review to listings",
        accuracy: 5,
        communication: 5,
        cleanliness: 5,
        location: 5,
        checkin: 5,
        value: 5,
        createdAt: "2021-06-09T19:20:36.161Z",
        updatedAt: "2021-06-09T19:20:36.161Z",
      },
      {
        _id: "60a5e7f94f028c10a8e0245b",
        listing_id: "60884626bf7d061402145e0f",
        author_id: "609052677bced9a9f7009918",
        author_name: "Jay Tran",
        reviewContent: "This is dummy reviews.",
        accuracy: 5,
        communication: 5,
        cleanliness: 5,
        location: 5,
        checkin: 5,
        value: 5,
        createdAt: "2021-05-20T04:39:21.031Z",
        updatedAt: "2021-05-20T04:39:21.031Z",
      },
      {
        _id: "60a5e7f94f028c10a8e0245c",
        listing_id: "60884626bf7d061402145e0f",
        author_id: "609052677bced9a9f7009918",
        author_name: "Jay Tran",
        reviewContent: "You can add review to listings",
        accuracy: 5,
        communication: 5,
        cleanliness: 5,
        location: 5,
        checkin: 5,
        value: 5,
        createdAt: "2021-05-20T04:39:21.033Z",
        updatedAt: "2021-05-20T04:39:21.033Z",
      },
    ],
    currentReview: null,
    isReviewed: null,
    errors: null,
  },
  listing: {
    isFetching: true,
    listings: [
      {
        coords: {
          lat: 36.11366,
          lng: -115.18859,
        },
        locationInfo: {
          description: "Las Vegas, NV, USA",
          place_id: "ChIJ69QoNDjEyIARTIMmDF0Z4kM",
        },
        user: {
          id: "166077839",
          pictureUrl:
            "https://a0.muscache.com/im/pictures/user/de0d730b-5561-4027-9099-7647a3a336fa.jpg?aki_policy=profile_x_medium",
          thumbnailUrl:
            "https://a0.muscache.com/im/pictures/user/de0d730b-5561-4027-9099-7647a3a336fa.jpg?aki_policy=profile_small",
        },
        serviceFee: {
          description: "Service fee",
          priceString: "$145",
        },
        cleaningFee: {
          description: "Cleaning fee",
          priceString: "$85",
        },
        previewAmenityNames: [
          "Pool",
          "Wifi",
          "Free parking",
          "Air conditioning",
        ],
        previewInfo: ["6 guests", "2 bedrooms", "3 beds", "2 baths"],
        amenities: ["Pool", "Wifi", "Free parking", "Air conditioning"],
        _id: "60884626bf7d061402145e34",
        title: "Beautiful 2BR/2BA, Spa & Pool, Room w/ Strip view",
        type: "Entire apartment in Las Vegas",
        location: " Las Vegas",
        pricePerNight: "$94",
        ratings: "4.71",
        reviewNumber: "195",
        city: "Las Vegas",
        avgRating: 4.71,
        kickerContent: "Entire apartment in Las Vegas",
        roomAndPropertyType: "Entire apartment",
        publicAddress: "Las Vegas, NV, United States",
        images: [
          {
            _id: "60884626bf7d061402145e35",
            id: "603033642",
            picture:
              "https://a0.muscache.com/im/pictures/04aa4551-b94e-46bb-8259-0d5415d65266.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e36",
            id: "600289517",
            picture:
              "https://a0.muscache.com/im/pictures/18750a79-df79-4a4e-b650-37a7e021b9eb.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e37",
            id: "600912671",
            picture:
              "https://a0.muscache.com/im/pictures/65b06f90-1b5c-467e-b937-40e7261d9ce7.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e38",
            id: "603033473",
            picture:
              "https://a0.muscache.com/im/pictures/83b24bfb-8cb5-46cf-b570-4d7c78a3db82.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e39",
            id: "603033559",
            picture:
              "https://a0.muscache.com/im/pictures/80f7b638-d2e9-45b5-956f-6e04a7dd52b8.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e3a",
            id: "603033673",
            picture:
              "https://a0.muscache.com/im/pictures/34df7923-0f89-499a-9fe1-b8d644cf7a01.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e3b",
            id: "465371476",
            picture:
              "https://a0.muscache.com/im/pictures/fbf884f9-edd4-478a-b73d-8589eb3c9254.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e3c",
            id: "465371480",
            picture:
              "https://a0.muscache.com/im/pictures/1537faf4-b3a8-44df-b6e2-01ee1062de03.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e3d",
            id: "603044493",
            picture:
              "https://a0.muscache.com/im/pictures/46af9cf3-2df6-456d-910a-e1687ed76218.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e3e",
            id: "465371499",
            picture:
              "https://a0.muscache.com/im/pictures/60189e0f-b116-45d9-8622-5d3787b1be44.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e3f",
            id: "465371485",
            picture:
              "https://a0.muscache.com/im/pictures/bf3be550-62a5-4247-8934-d18b8ea0db22.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e40",
            id: "465371482",
            picture:
              "https://a0.muscache.com/im/pictures/7a2b9440-96dd-4361-bf4f-e2f7b9ffa86d.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e41",
            id: "465371489",
            picture:
              "https://a0.muscache.com/im/pictures/35ecfe6c-490d-4ab8-9776-fa336ee730d7.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e42",
            id: "465371495",
            picture:
              "https://a0.muscache.com/im/pictures/9739c67c-8f19-49bd-a699-a761b6158328.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e43",
            id: "465371509",
            picture:
              "https://a0.muscache.com/im/pictures/e00dada8-6157-44bb-969a-83f209d0cfb1.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e44",
            id: "465371515",
            picture:
              "https://a0.muscache.com/im/pictures/0962a55d-1742-4557-b791-70a539c5f8f0.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e45",
            id: "454015863",
            picture:
              "https://a0.muscache.com/im/pictures/e8ca462d-19df-4255-b594-95be75bfa087.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e46",
            id: "465371522",
            picture:
              "https://a0.muscache.com/im/pictures/3ca4a3d7-70ea-464b-866e-2e9aeb171ffd.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e47",
            id: "503010167",
            picture:
              "https://a0.muscache.com/im/pictures/e7b259ab-e134-4ac1-b340-1be25af74ecb.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e48",
            id: "465371481",
            picture:
              "https://a0.muscache.com/im/pictures/777c9d08-37c5-45ba-9956-699aa4f3d67c.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e49",
            id: "454016294",
            picture:
              "https://a0.muscache.com/im/pictures/4dc69d64-72fe-43a3-83ba-c6995076aa18.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e4a",
            id: "580182800",
            picture:
              "https://a0.muscache.com/im/pictures/64567360-58f4-4312-9d23-f32049edd230.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e4b",
            id: "610226570",
            picture:
              "https://a0.muscache.com/im/pictures/4fc06c10-f859-44a9-a0b0-c3adda1615bb.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e4c",
            id: "465371548",
            picture:
              "https://a0.muscache.com/im/pictures/71310365-4324-4cd4-92c7-9a18d3f137c1.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e4d",
            id: "458060162",
            picture:
              "https://a0.muscache.com/im/pictures/bb8b1429-6da9-4ad2-b052-2fc4ffc3e859.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e4e",
            id: "480718095",
            picture:
              "https://a0.muscache.com/im/pictures/9750ae69-31e3-41ea-a531-225fd4e42f15.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e4f",
            id: "465053383",
            picture:
              "https://a0.muscache.com/im/pictures/eac27991-641b-4ad2-bc7d-2006147d6ce9.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e50",
            id: "465053315",
            picture:
              "https://a0.muscache.com/im/pictures/4ef94cc4-c1cc-47ec-96b4-2655c1d77604.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e51",
            id: "465371457",
            picture:
              "https://a0.muscache.com/im/pictures/64546d37-556d-49e1-9521-96533c21c70a.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e52",
            id: "461000213",
            picture:
              "https://a0.muscache.com/im/pictures/945083da-7d49-4580-8d2a-e9a1f2b53b26.jpg?im_w=720",
          },
        ],
        listingLink:
          "https://www.airbnb.com/rooms/23420867?adults=3&check_in=2021-09-06&check_out=2021-09-16&previous_page_section_name=1000&federated_search_id=19476236-676f-40af-b496-9d23fc0b0f04",
        __v: 0,
        checkIn: "2021-May-12",
        checkOut: "2021-May-21",
      },
      {
        coords: {
          lat: 36.11366,
          lng: -115.18859,
        },
        locationInfo: {
          description: "Las Vegas, NV, USA",
          place_id: "ChIJ69QoNDjEyIARTIMmDF0Z4kM",
        },
        user: {
          id: "166077839",
          pictureUrl:
            "https://a0.muscache.com/im/pictures/user/de0d730b-5561-4027-9099-7647a3a336fa.jpg?aki_policy=profile_x_medium",
          thumbnailUrl:
            "https://a0.muscache.com/im/pictures/user/de0d730b-5561-4027-9099-7647a3a336fa.jpg?aki_policy=profile_small",
        },
        serviceFee: {
          description: "Service fee",
          priceString: "$145",
        },
        cleaningFee: {
          description: "Cleaning fee",
          priceString: "$85",
        },
        previewAmenityNames: [
          "Pool",
          "Wifi",
          "Free parking",
          "Air conditioning",
        ],
        previewInfo: ["6 guests", "2 bedrooms", "3 beds", "2 baths"],
        amenities: ["Pool", "Wifi", "Free parking", "Air conditioning"],
        _id: "60884626bf7d061402145e34",
        title: "Beautiful 2BR/2BA, Spa & Pool, Room w/ Strip view",
        type: "Entire apartment in Las Vegas",
        location: " Las Vegas",
        pricePerNight: "$94",
        ratings: "4.71",
        reviewNumber: "195",
        city: "Las Vegas",
        avgRating: 4.71,
        kickerContent: "Entire apartment in Las Vegas",
        roomAndPropertyType: "Entire apartment",
        publicAddress: "Las Vegas, NV, United States",
        images: [
          {
            _id: "60884626bf7d061402145e35",
            id: "603033642",
            picture:
              "https://a0.muscache.com/im/pictures/04aa4551-b94e-46bb-8259-0d5415d65266.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e36",
            id: "600289517",
            picture:
              "https://a0.muscache.com/im/pictures/18750a79-df79-4a4e-b650-37a7e021b9eb.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e37",
            id: "600912671",
            picture:
              "https://a0.muscache.com/im/pictures/65b06f90-1b5c-467e-b937-40e7261d9ce7.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e38",
            id: "603033473",
            picture:
              "https://a0.muscache.com/im/pictures/83b24bfb-8cb5-46cf-b570-4d7c78a3db82.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e39",
            id: "603033559",
            picture:
              "https://a0.muscache.com/im/pictures/80f7b638-d2e9-45b5-956f-6e04a7dd52b8.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e3a",
            id: "603033673",
            picture:
              "https://a0.muscache.com/im/pictures/34df7923-0f89-499a-9fe1-b8d644cf7a01.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e3b",
            id: "465371476",
            picture:
              "https://a0.muscache.com/im/pictures/fbf884f9-edd4-478a-b73d-8589eb3c9254.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e3c",
            id: "465371480",
            picture:
              "https://a0.muscache.com/im/pictures/1537faf4-b3a8-44df-b6e2-01ee1062de03.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e3d",
            id: "603044493",
            picture:
              "https://a0.muscache.com/im/pictures/46af9cf3-2df6-456d-910a-e1687ed76218.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e3e",
            id: "465371499",
            picture:
              "https://a0.muscache.com/im/pictures/60189e0f-b116-45d9-8622-5d3787b1be44.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e3f",
            id: "465371485",
            picture:
              "https://a0.muscache.com/im/pictures/bf3be550-62a5-4247-8934-d18b8ea0db22.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e40",
            id: "465371482",
            picture:
              "https://a0.muscache.com/im/pictures/7a2b9440-96dd-4361-bf4f-e2f7b9ffa86d.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e41",
            id: "465371489",
            picture:
              "https://a0.muscache.com/im/pictures/35ecfe6c-490d-4ab8-9776-fa336ee730d7.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e42",
            id: "465371495",
            picture:
              "https://a0.muscache.com/im/pictures/9739c67c-8f19-49bd-a699-a761b6158328.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e43",
            id: "465371509",
            picture:
              "https://a0.muscache.com/im/pictures/e00dada8-6157-44bb-969a-83f209d0cfb1.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e44",
            id: "465371515",
            picture:
              "https://a0.muscache.com/im/pictures/0962a55d-1742-4557-b791-70a539c5f8f0.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e45",
            id: "454015863",
            picture:
              "https://a0.muscache.com/im/pictures/e8ca462d-19df-4255-b594-95be75bfa087.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e46",
            id: "465371522",
            picture:
              "https://a0.muscache.com/im/pictures/3ca4a3d7-70ea-464b-866e-2e9aeb171ffd.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e47",
            id: "503010167",
            picture:
              "https://a0.muscache.com/im/pictures/e7b259ab-e134-4ac1-b340-1be25af74ecb.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e48",
            id: "465371481",
            picture:
              "https://a0.muscache.com/im/pictures/777c9d08-37c5-45ba-9956-699aa4f3d67c.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e49",
            id: "454016294",
            picture:
              "https://a0.muscache.com/im/pictures/4dc69d64-72fe-43a3-83ba-c6995076aa18.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e4a",
            id: "580182800",
            picture:
              "https://a0.muscache.com/im/pictures/64567360-58f4-4312-9d23-f32049edd230.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e4b",
            id: "610226570",
            picture:
              "https://a0.muscache.com/im/pictures/4fc06c10-f859-44a9-a0b0-c3adda1615bb.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e4c",
            id: "465371548",
            picture:
              "https://a0.muscache.com/im/pictures/71310365-4324-4cd4-92c7-9a18d3f137c1.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e4d",
            id: "458060162",
            picture:
              "https://a0.muscache.com/im/pictures/bb8b1429-6da9-4ad2-b052-2fc4ffc3e859.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e4e",
            id: "480718095",
            picture:
              "https://a0.muscache.com/im/pictures/9750ae69-31e3-41ea-a531-225fd4e42f15.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e4f",
            id: "465053383",
            picture:
              "https://a0.muscache.com/im/pictures/eac27991-641b-4ad2-bc7d-2006147d6ce9.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e50",
            id: "465053315",
            picture:
              "https://a0.muscache.com/im/pictures/4ef94cc4-c1cc-47ec-96b4-2655c1d77604.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e51",
            id: "465371457",
            picture:
              "https://a0.muscache.com/im/pictures/64546d37-556d-49e1-9521-96533c21c70a.jpg?im_w=720",
          },
          {
            _id: "60884626bf7d061402145e52",
            id: "461000213",
            picture:
              "https://a0.muscache.com/im/pictures/945083da-7d49-4580-8d2a-e9a1f2b53b26.jpg?im_w=720",
          },
        ],
        listingLink:
          "https://www.airbnb.com/rooms/23420867?adults=3&check_in=2021-09-06&check_out=2021-09-16&previous_page_section_name=1000&federated_search_id=19476236-676f-40af-b496-9d23fc0b0f04",
        __v: 0,
        checkIn: "2021-May-12",
        checkOut: "2021-May-21",
      },
    ],
    current_listing: {
      coords: {
        lat: 36.11366,
        lng: -115.18859,
      },
      locationInfo: {
        description: "Las Vegas, NV, USA",
        place_id: "ChIJ69QoNDjEyIARTIMmDF0Z4kM",
      },
      user: {
        id: "166077839",
        pictureUrl:
          "https://a0.muscache.com/im/pictures/user/de0d730b-5561-4027-9099-7647a3a336fa.jpg?aki_policy=profile_x_medium",
        thumbnailUrl:
          "https://a0.muscache.com/im/pictures/user/de0d730b-5561-4027-9099-7647a3a336fa.jpg?aki_policy=profile_small",
      },
      serviceFee: {
        description: "Service fee",
        priceString: "$145",
      },
      cleaningFee: {
        description: "Cleaning fee",
        priceString: "$85",
      },
      previewAmenityNames: ["Pool", "Wifi", "Free parking", "Air conditioning"],
      previewInfo: ["6 guests", "2 bedrooms", "3 beds", "2 baths"],
      amenities: ["Pool", "Wifi", "Free parking", "Air conditioning"],
      _id: "60884626bf7d061402145e34",
      title: "Beautiful 2BR/2BA, Spa & Pool, Room w/ Strip view",
      type: "Entire apartment in Las Vegas",
      location: " Las Vegas",
      pricePerNight: "$94",
      ratings: "4.71",
      reviewNumber: "195",
      city: "Las Vegas",
      avgRating: 4.71,
      kickerContent: "Entire apartment in Las Vegas",
      roomAndPropertyType: "Entire apartment",
      publicAddress: "Las Vegas, NV, United States",
      images: [
        {
          _id: "60884626bf7d061402145e35",
          id: "603033642",
          picture:
            "https://a0.muscache.com/im/pictures/04aa4551-b94e-46bb-8259-0d5415d65266.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e36",
          id: "600289517",
          picture:
            "https://a0.muscache.com/im/pictures/18750a79-df79-4a4e-b650-37a7e021b9eb.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e37",
          id: "600912671",
          picture:
            "https://a0.muscache.com/im/pictures/65b06f90-1b5c-467e-b937-40e7261d9ce7.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e38",
          id: "603033473",
          picture:
            "https://a0.muscache.com/im/pictures/83b24bfb-8cb5-46cf-b570-4d7c78a3db82.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e39",
          id: "603033559",
          picture:
            "https://a0.muscache.com/im/pictures/80f7b638-d2e9-45b5-956f-6e04a7dd52b8.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e3a",
          id: "603033673",
          picture:
            "https://a0.muscache.com/im/pictures/34df7923-0f89-499a-9fe1-b8d644cf7a01.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e3b",
          id: "465371476",
          picture:
            "https://a0.muscache.com/im/pictures/fbf884f9-edd4-478a-b73d-8589eb3c9254.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e3c",
          id: "465371480",
          picture:
            "https://a0.muscache.com/im/pictures/1537faf4-b3a8-44df-b6e2-01ee1062de03.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e3d",
          id: "603044493",
          picture:
            "https://a0.muscache.com/im/pictures/46af9cf3-2df6-456d-910a-e1687ed76218.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e3e",
          id: "465371499",
          picture:
            "https://a0.muscache.com/im/pictures/60189e0f-b116-45d9-8622-5d3787b1be44.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e3f",
          id: "465371485",
          picture:
            "https://a0.muscache.com/im/pictures/bf3be550-62a5-4247-8934-d18b8ea0db22.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e40",
          id: "465371482",
          picture:
            "https://a0.muscache.com/im/pictures/7a2b9440-96dd-4361-bf4f-e2f7b9ffa86d.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e41",
          id: "465371489",
          picture:
            "https://a0.muscache.com/im/pictures/35ecfe6c-490d-4ab8-9776-fa336ee730d7.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e42",
          id: "465371495",
          picture:
            "https://a0.muscache.com/im/pictures/9739c67c-8f19-49bd-a699-a761b6158328.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e43",
          id: "465371509",
          picture:
            "https://a0.muscache.com/im/pictures/e00dada8-6157-44bb-969a-83f209d0cfb1.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e44",
          id: "465371515",
          picture:
            "https://a0.muscache.com/im/pictures/0962a55d-1742-4557-b791-70a539c5f8f0.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e45",
          id: "454015863",
          picture:
            "https://a0.muscache.com/im/pictures/e8ca462d-19df-4255-b594-95be75bfa087.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e46",
          id: "465371522",
          picture:
            "https://a0.muscache.com/im/pictures/3ca4a3d7-70ea-464b-866e-2e9aeb171ffd.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e47",
          id: "503010167",
          picture:
            "https://a0.muscache.com/im/pictures/e7b259ab-e134-4ac1-b340-1be25af74ecb.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e48",
          id: "465371481",
          picture:
            "https://a0.muscache.com/im/pictures/777c9d08-37c5-45ba-9956-699aa4f3d67c.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e49",
          id: "454016294",
          picture:
            "https://a0.muscache.com/im/pictures/4dc69d64-72fe-43a3-83ba-c6995076aa18.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e4a",
          id: "580182800",
          picture:
            "https://a0.muscache.com/im/pictures/64567360-58f4-4312-9d23-f32049edd230.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e4b",
          id: "610226570",
          picture:
            "https://a0.muscache.com/im/pictures/4fc06c10-f859-44a9-a0b0-c3adda1615bb.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e4c",
          id: "465371548",
          picture:
            "https://a0.muscache.com/im/pictures/71310365-4324-4cd4-92c7-9a18d3f137c1.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e4d",
          id: "458060162",
          picture:
            "https://a0.muscache.com/im/pictures/bb8b1429-6da9-4ad2-b052-2fc4ffc3e859.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e4e",
          id: "480718095",
          picture:
            "https://a0.muscache.com/im/pictures/9750ae69-31e3-41ea-a531-225fd4e42f15.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e4f",
          id: "465053383",
          picture:
            "https://a0.muscache.com/im/pictures/eac27991-641b-4ad2-bc7d-2006147d6ce9.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e50",
          id: "465053315",
          picture:
            "https://a0.muscache.com/im/pictures/4ef94cc4-c1cc-47ec-96b4-2655c1d77604.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e51",
          id: "465371457",
          picture:
            "https://a0.muscache.com/im/pictures/64546d37-556d-49e1-9521-96533c21c70a.jpg?im_w=720",
        },
        {
          _id: "60884626bf7d061402145e52",
          id: "461000213",
          picture:
            "https://a0.muscache.com/im/pictures/945083da-7d49-4580-8d2a-e9a1f2b53b26.jpg?im_w=720",
        },
      ],
      listingLink:
        "https://www.airbnb.com/rooms/23420867?adults=3&check_in=2021-09-06&check_out=2021-09-16&previous_page_section_name=1000&federated_search_id=19476236-676f-40af-b496-9d23fc0b0f04",
      __v: 0,
      checkIn: "2021-May-12",
      checkOut: "2021-May-21",
    },
    errors: null,
  },
  profile: {
    intro:
      "Hi my name is Jay Tran. Nice to meet you guys ! This is my bio. Thanks for visiting my websit",
    profile: {
      _id: "60a41a211510c700c7d81902",
      user_id: "609052677bced9a9f7009918",
      intro:
        "Hi my name is Jay Tran. Nice to meet you guys ! This is my bio. Thanks for visiting my websit",
      createdAt: "2021-05-18T19:48:49.824Z",
    },
    errors: null,
  },
};
