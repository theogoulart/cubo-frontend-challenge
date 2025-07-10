export default function Services() {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="41" height="42" viewBox="0 0 41 42" fill="none">
          <rect width="41" height="42" fill="url(#pattern0_3316_120)"/>
            <defs>
            <pattern id="pattern0_3316_120" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use href="#image0_3316_120" transform="scale(0.0243902 0.0238095)"/>
            </pattern>
            <image id="image0_3316_120" width="41" height="42" preserveAspectRatio="none" href="data:image/png;base64,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"/>
          </defs>
        </svg>
      ),
      title: "RHONCUS PURUS IN",
      description:
        "Donec sit amet erat ut quam dignissim bibendum porta enim, ut acor tempor felis diam non massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="44" height="46" viewBox="0 0 44 46" fill="none">
          <rect width="44" height="46" fill="url(#pattern0_3316_128)"/>
          <defs>
            <pattern id="pattern0_3316_128" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use href="#image0_3316_128" transform="scale(0.0227273 0.0217391)"/>
            </pattern>
            <image id="image0_3316_128" width="44" height="46" preserveAspectRatio="none" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAuCAYAAABTTPsKAAAAAXNSR0IArs4c6QAABDZJREFUaEPtmV1sFFUUx3/nLipqUUSMxmAUE6CaWCH4ETVgJfEjGqh0Px6qEfQRP6s28NDuTnc1kiYmDQSjJoaaWDHbWZEgVUw0SgrGxlQwARvUoCaYGB8kQRCpe4+daQtsuzvbaYT4MOdx59z//c+Z//nfe/cK1SLnzkN5BlgOzAEU+BGlF2M30pY6VA2i5LmTryFmVqHaADIXOIbwLZgu2ho/q4YlgQnt7nKEPDAdYS/KAQRBWQzMB/4GWUc63lltIv/5Sz13YuU94BrgKMp+DBeh3AQ+8haKdjVO6mQlvMqEX+m+jKELfvGBjU3RmuorAcn2LAF5HbgR5WUyidbgly/cg+gOoIjoixR18yliTmEOxm4CWQHaQTq5NjzhbKEJtBvVR8kku8sCrM9fykmzHfDIP0463lU2L5dfgJp+kCK2uAwntXdCXj4fY9DsBm7mwuOzaXnsWDmsyhXO9qwB2YTRu2hN7qlYPSc/C2MGgCuwZhFO48FSzW6ejpnxNVCLkWW0xndVxMq5LSgdYBaSbtwXlrBXtV2o5MjE04GfO9dTj4rXMH20xe9GxGvMkWh3OxBahps1QzqRDcTJuq8Cz2PtPJzUD+EIqwq5wnfAtag2kkl+FKzRng2IPI3SRCaxxc913DoMAyD91BaXkEoVA77UQoz5AviNdMJr6LIR7BJZdxHIJ6CzEd5CJEdr/OeySM7WmRj7PegJaux8mpMnyBb6EG4Hs7jSJ8bvA3kSZKRpjb1vQoOfMWEwYb9KW6/D/PMmyL1+h8OHiLzD+dN2srbhaAn5rPsUsBGkGbWHEcmDdpJONpfkeQ12kDuw5hGgCbgE2IeVJ3DiXj9UjOqET2nRsyX7AsgDQAwYAtkD+jHIp9hZ38DvBmM87Z0H/DnSiPZ6OHCEWN0CKC4d1vpS4P7hF7t8FPor/6Xs/jyOYwNl55t12HDyVxEzK1F/5fMmv3gU4i9gAGEGSt3ob55jHAZuBWpGfxsC+kF7sfI+TmIwDAUhW3guzIDSXDsNkVtQrQe5MhhH/gDdDfolmONTnVPIuqctaKoo53DcGOHtWBvstZVIGeN5bBPCQxTtr2XTYuZqlB2ovIEWveU8fBjjefjyEcLC27QlVodH8ReGToRnsbG5OCt/KovhO03xEKrtZJLOlObJuV0oqyLCUYXHKhBJImq6cd1QIgnYiej6KdmNirfhiU/K1jz7RMufSqpNrrLO24P8dyvdZCRRjdQknnt7idEFQ72jfC3ImkmMOyPFNvlbz8kR3gbyQTh8fQ0YBNngjTu9W8u6HlA96cTMUIBne6XLukeGeX1OOvFwRPis7CWiCkcaHtfykSQiSUSSGFeBSBKRJCJJBG8Oo4UjconIJf5fLvEgwruhznTKbcANQAHxrwkmhvr/vsf9ewzvCjhMeLdS0FvpTNcQBusc5m4bI/wvKh1NeRap9CoAAAAASUVORK5CYII="/>
          </defs>
        </svg>
      ),
      title: "MATTIS AUGUE TRISTIQUE",
      description:
        "Donec sit amet erat ut quam dignissim bibendum porta enim, ut acor tempor felis diam non massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="38" height="47" viewBox="0 0 38 47" fill="none">
          <rect width="38" height="47" fill="url(#pattern0_3316_124)"/>
          <defs>
            <pattern id="pattern0_3316_124" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use href="#image0_3316_124" transform="scale(0.0263158 0.0212766)"/>
            </pattern>
            <image id="image0_3316_124" width="38" height="47" preserveAspectRatio="none" href="data:image/png;base64,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"/>
          </defs>
        </svg>
      ),
      title: "ELEMENTUM LACUS VITAE",
      description:
        "Donec sit amet erat ut quam dignissim bibendum porta enim, ut acor tempor felis diam non massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="47" height="47" viewBox="0 0 47 47" fill="none">
          <rect width="47" height="47" fill="url(#pattern0_3316_132)"/>
          <defs>
            <pattern id="pattern0_3316_132" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use href="#image0_3316_132" transform="scale(0.0212766)"/>
            </pattern>
          <image id="image0_3316_132" width="47" height="47" preserveAspectRatio="none" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAAAXNSR0IArs4c6QAACRJJREFUaEPNmXmQXFUVxn/ndYZAgoAJkKJYihJCwIS1WBSEAiQWAhKYft1EExNWgyRSGAhImH79untiIokIGBJAAoSkWHoZAghqEhRZBBUEBFkMIlCKLE6CkISBTN9j3/cyW6ZfT482FPePqZrqc8/97rn3nvOd7wmNHtniZOAmYGgv150gs/DiVzdyOWmkM1SFXOmfgCD8qtu3cjSwC+aDEfhndTRqzcaC94sH4PAssADPndUNMlu4BGQ+IuNJxVd/NsF3gVQ9gXTiwW6Qfv4gHOdpYB6ee/lnFHxxFXBUv+sRXKe2d4DX8eKHfjrgwzs8HTgY0btIJVZGLnxVfhvWO+uAh/DcE/vZ5Yp3oiQwZif85NpIP9n8/iCTwXmRVPNSRDTKNvrO5/MxXnJs1jiz1+QHEDOTVPLlfg4zhUmILAcuxnOv6vd7tnAuyM9QmUI6vqzf73PuGUV5UxY4F3CC34UljDHTSCbL1TZQHbyNeGvbMlQngd6LyCVACuXbQCfKdaixC61HnDiCPZ2jgPcxMhY//o8IcK9UHvO2wIOILqK8471s924TG2IXoWrfwueAR0CvAGaDnIiwjJb41GonUB18ppRFNAWsYF/jdu+8NX84JnY16JdB1oF2AjsBG0FuR8oLqp5K106yxbGIXI5qAtgK9E0IrsWuwBpULiMdvzsw9/Nb4Th5YELUQ68OPlt8IXC4w7CdufCkj/pE0Z5Kti2JMAvUAbkN49yKf/p7dT/EH+Z3otM5Z/OVbEK4lrJZjJ/8uI8P/75hOB1rQBw8d5ct/UdEvrAAkYtBp+IlbqsbVKMNM4WvImLrwu147qT6wPt374Bj1oD5mG0+3IdZUzY0GteA/vzfDCHW/jTK3jiyLy3x1+sDb61yhWmoXI8yh7TbMuBijTbIFmcAP61kniyem64/21jLMFXaqjgaE9sP//TXGo0v0p+fH4ETewV0A2boGPxvbBwc+CD6bcej5sEgNaZdG4lPZ2RLc0Bng34TL3Fn1KK1idmc0i6UbTqr/mCqOg1OTI4EGYswEqUd5Dn2LT8RVWz6+cmWloJOwTTtij/Brl911AafKfiV4pBG9TTSiXtqht3m5ZgzHcUWG5v7txj6NiJz2bl9EdOmbarpK1OYgMgKRHxS8czgwYdFwr7wDszze+H7JnLBMG/fDxxWyd2vIdyE6sMYbWdIbEcMx4CeB+yB8gRN5lRmJ9+N9Be+t7+BNjFq7Z5Rm60e+QB47ALQn4Bchhe/MnKh+bcNp2PY71AOQJmPmpZ+xcZODoMxt0IhZiI8w3BzJDOTH0b6zRZ/UOnG5iJ6PqnEDbUfrN82jpgZj3JChRkeCwwD3sHExtSsnpnilUG1Vc2QTvgDvuiux6g6l3RidvRpto2k0/wVGAH8C2QValaisVX4zZZeV9q1TOEsROYEbVo4bJv2KMJKymYZfvKtAa7LGwgv0BI/tBZ97fbh+w7OuD8BYxji7Mbs5vZI/37pCzj2usn4CkE8JMAbon6m8jcjZIsbQS0PX46yEl3/WN19ZrZ4NrAE5Vuk3TsGjHqXQdikL0M5k7S7tK55NvfHYsejOh6kGXRrC14RlpJye/P2uvyRKS5C+C7GGdV1lHVN7EnBC/Hc79U1p7dRrngrytT/D3y2UAii4LmxQQMIg3YXKXfioOc2BnzRZoHvMLRpOy6b8EHdIALiV16Hyg2k4+fXPa/LsBd421DYRmABMVZXY2+RznPF76NchThfJ9X8y7pBZEonI/pzhItIudfUPc9uWsxxiFqitr+QK16B4oWdTTBeQVkVpqb3f1Hz8fr5vXGcNUGr6CVsx1PfyBbvA05GzF6kkn+PnGSL1ctyNEZOCDKOqFUewv4WFoapxxaajcOPRfRrwHhgv80p6c+UzWFVi07PEVpV4AwUl7RbGhB9ruSiWhiQL9miJrFHED089Cn/BlajrO66IdUrbOuK3TGdlwIzBkxnfmk3HLV5e1tEJ5NKtEVfswC47czWY+SQqo161+Sw/twcKAhls5B04tkt60g0MfOXb4eztWV0L+C5m3cfAStbPAKwV8ESshWoLuTzwx8N+t9rHxjKug1fQcRS6tOAd3E4iRb3yZqnlCs+hbIPpmNX/MnvV7MdgFWWrkd0Go45gpbkH2ouZk8gpguCK9Qz/gNs3/2vTY3lioxSTRrp7by19CWMPg6yCC9uZZWqozZ4y3cc89xATvp4zhVHg5wKjEXV8pJ1iDwfPOqUu2bAN2ENcsUbUc7DmLH4Satk/A/gWwtHYuQxlMWk3QvqWrgRRrnSclQnYpwv4jdbcjZI8JZAybjfIxyIccbVctIIvH18dAUNvR8vccrgwfeQrvmkXZt5Pt2RLd0BOrHSvJxI2u35UNELRUQzEmSa8H6ajtFRr/0T3U06vwcxxwq6r2JGHoh/nGUCfUaU3De/koutuHoOnnvzJwqylvMuzVSYQcq9rk7whbdAOjHP71G1d82WjgqoMHyMYRle80N1NSK9V28tHYPqZAydOOaaqgKtrfwfDnsT4VVS7sH1gc+V8oGSu2X3bjubGPM2q7xWM7c8w57ei4gsply+BT+5PjKYfn5bYs5UNNj42F52oWy+1UcZLp9kG6Nw5EpWufADmTvlTqkP/Lz89mxyfo1ySNCb6pCrkc4WRC4EmkDvxuilxCijcj44Z4PuGJC6bTYeVFXbDFQw5ylgT2AtqrfgDFmMbBrZI5uzFsFj5/YbeXuEVzn9FpQn0Y6vVnt30UXKyhmbnAcQLJOzfe3WIE/hMJOW+MN9omApwHsbsiA2K52B51pdve/IFi1vXxwGY/28Pmw1kM1LExF+VGkrdw9JWBCMPzLEnBwlk9SusCHb/DHofoguwfxleaR+E5K5N0BuwotbjWZL8PajwSmYjpGR2ct+19ogl6AyCeEJykMviNIprfPGfofNFl8KTshz7dXoGVaudtrtR7Rn8NxjGpW9Gg3eStIzMGY0ftJ+fwqHzSxGfwuSwou3fjbBd2mM6HS8xKJukJliK8IVOBw2IBUexM4aG/mwB7Ai0qsIj3fjCFQ4GYp5blRNzXMQwBt/53tys/2S2FsO+QiV6aTjSwaJr6b5fwGeupxwuuYdYgAAAABJRU5ErkJggg=="/>
          </defs>
        </svg>
      ),
      title: "MAURIS BIBENDUM ODIO LIGULA",
      description:
        "Donec sit amet erat ut quam dignissim bibendum porta enim, ut acor tempor felis diam non massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
  ];

  return (
    <section id="services" className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 uppercase tracking-tight">SERVIÇOS</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-x-16 lg:gap-y-10">
          {services.map((service, idx) => (
            <div key={idx} className="flex items-start space-x-3 sm:space-x-5">
              <div className="flex-shrink-0 mt-1">{service.icon}</div>
              <div className="max-w-md">
                <h3 className="text-xs sm:text-sm font-bold text-gray-800 uppercase mb-1 tracking-wide">{service.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 