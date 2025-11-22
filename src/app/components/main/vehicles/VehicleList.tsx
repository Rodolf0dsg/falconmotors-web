
export const VehicleList = () => {
  return (
    <div className="w-full lg:w-3/4 xl:w-4/5">
      

      <div className="mb-6">
        <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-4">
          Automóviles Disponibles</p>
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-gray-100 dark:bg-card-border-dark">
            <div className="text-gray-500 dark:text-text-muted-dark flex items-center justify-center pl-4">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-gray-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-gray-500 dark:placeholder:text-text-muted-dark px-4 pl-2 text-base font-normal leading-normal"
              placeholder="Buscar por marca, modelo o año..." />
          </div>
        </label>
      </div>
      


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        

        <div
          className="flex flex-col gap-3 rounded-xl bg-gray-100 dark:bg-[#1c1c1c] border border-gray-200 dark:border-[#392828] overflow-hidden group">
          <div className="relative">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover transition-transform duration-300 group-hover:scale-105"
              data-alt="Toyota Corolla 2023 en color plata"
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8m1dBNMAdQ-1cWeFW0MZBhPXufcHabexCuPtJSWQunUHUSNUGY1WsFmX4EFwZKtLVZNOr4a4MHkGod6qnaow7eB7n-jcETPwfO3aXMeA5XqumBJ3Or1bAJfholzTIPJL1PUZSWKgm8Mf3G-mp4KewQpGlK7AIgdJkd0pWdU8lda2zAoFW2Z-Gt-ds5-sXzWsCbsJyrWE31p0yqwNe7KaPSCgBUVdbZDkQjYAIHvGgF6SiOouZhmnWePnK3ZB1KhzMccHwDFXI55iN")'}}>
            </div>
            <span
              className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">NUEVO</span>
          </div>
          <div className="p-4 pt-0">
            <p className="text-gray-900 dark:text-white text-lg font-bold leading-normal mb-2">Toyota Corolla</p>
            <div className="text-gray-600 dark:text-[#b99d9d] text-sm space-y-1 mb-3">
              <p className="flex items-center gap-2"><span
                className="material-symbols-outlined text-base">calendar_today</span> 2023</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">settings</span>
                Automático</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">speed</span> 5,000
                km</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">sell</span> Toyota
              </p>
            </div>
            <p className="text-2xl font-black price-highlight">$25,000</p>
          </div>
        </div>
        


        <div
          className="flex flex-col gap-3 rounded-xl bg-gray-100 dark:bg-[#1c1c1c] border border-gray-200 dark:border-[#392828] overflow-hidden group">
          <div className="relative">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover transition-transform duration-300 group-hover:scale-105"
              data-alt="Ford Mustang 2022 color rojo"
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDo48nKAogMOYd2vv3wO3oWrOEIhSt_pVQvLaNbQxVlDsIDobbmfVtRV9nTs87CQ8p_Yt4o8RtirFxj4CMnJoS_yrbDSTI_QudN6BGomlVbJAYZGePoPmTXGNzlaIMRIEiuh7PVatDz5JAPvxBD2nCT5ihTcbovpgeny31GRs4Q3Djq72yNOM7EaX-jGIwaeDiie3vT_es5hpcN8WgUzWSR8PgKlODeC9IoXWAeBe0Rcd0tqhTARlCuY1W9mZ5i802-_hEpdqQ0FEKP")'}}>
            </div>
            <span
              className="absolute top-2 left-2 bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-full">USADO</span>
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span
                className="text-white text-3xl font-black tracking-widest -rotate-12 border-4 border-white p-4">VENDIDO</span>
            </div>
          </div>
          <div className="p-4 pt-0">
            <p className="text-gray-900 dark:text-white text-lg font-bold leading-normal mb-2">Ford Mustang</p>
            <div className="text-gray-600 dark:text-[#b99d9d] text-sm space-y-1 mb-3">
              <p className="flex items-center gap-2"><span
                className="material-symbols-outlined text-base">calendar_today</span> 2022</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">settings</span>
                Sincrónico</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">speed</span> 12,000
                km</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">sell</span> Ford
              </p>
            </div>
            <p className="text-2xl font-black price-highlight">$45,000</p>
          </div>
        </div>
        


        <div
          className="flex flex-col gap-3 rounded-xl bg-gray-100 dark:bg-[#1c1c1c] border border-gray-200 dark:border-[#392828] overflow-hidden group">
          <div className="relative">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover transition-transform duration-300 group-hover:scale-105"
              data-alt="Honda Civic 2021 color blanco"
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAm7Qbho07Cy-wLdzQeLTj0kYxvXrrXYEZRLDBo_B5TUXVQevis6lRhwm5iuZu9dQP35sYl70lmLJxy-lX-YrzDPUMB08wSpAHOuFByQENjZy0RvpzBHyaAbFAM1IHwmSwO7WUYdF7X2yDEK6cx_ypW-O0iAiHOFrL28-nW3yFMPBtxcAnsDAbSdjZnqKLGIv29YgHvxQXbfz2k8mbO0Q2NPwPckRF1BxOtAM8Gi7iPmEMND4LArevVn6ySlTRnTp8rHkgzbLE4O1SV")'}}>
            </div>
            <span
              className="absolute top-2 left-2 bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-full">USADO</span>
          </div>
          <div className="p-4 pt-0">
            <p className="text-gray-900 dark:text-white text-lg font-bold leading-normal mb-2">Honda Civic</p>
            <div className="text-gray-600 dark:text-[#b99d9d] text-sm space-y-1 mb-3">
              <p className="flex items-center gap-2"><span
                className="material-symbols-outlined text-base">calendar_today</span> 2021</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">settings</span>
                Automático</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">speed</span> 25,000
                km</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">sell</span> Honda
              </p>
            </div>
            <p className="text-2xl font-black price-highlight">$22,000</p>
          </div>
        </div>
        


        <div
          className="flex flex-col gap-3 rounded-xl bg-gray-100 dark:bg-[#1c1c1c] border border-gray-200 dark:border-[#392828] overflow-hidden group">
          <div className="relative">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover transition-transform duration-300 group-hover:scale-105"
              data-alt="Chevrolet Silverado 2023 negra"
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGwHRPYHhLIEvAs1pIKtEJQrkzlLduj6rgElKP9r4k6coZZDikVeieOcvxhzevPwb3AMsAFE5OESm5Gzwh7zgwsqv1FkfEqIz91rXCJN-lb32_o72aU3lXcOdq2KZvSwpkI2oHBSdnAeXhpigRARLR-bn9msADWBYDIWmjNlkK-wdmL4edrhxapmg790QbTuParSYbzVGgBG1skyxM6_Z42cLdzisA4fTKh9e-ZEG7VLzzgmK27RJTfxi5eR0tqAdDbVE6bUFwy3uT")'}}>
            </div>
            <span
              className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">NUEVO</span>
          </div>
          <div className="p-4 pt-0">
            <p className="text-gray-900 dark:text-white text-lg font-bold leading-normal mb-2">Chevrolet Silverado</p>
            <div className="text-gray-600 dark:text-[#b99d9d] text-sm space-y-1 mb-3">
              <p className="flex items-center gap-2"><span
                className="material-symbols-outlined text-base">calendar_today</span> 2023</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">settings</span>
                Automático</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">speed</span> 1,500
                km</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">sell</span>
                Chevrolet</p>
            </div>
            <p className="text-2xl font-black price-highlight">$55,000</p>
          </div>
        </div>
        


        <div
          className="flex flex-col gap-3 rounded-xl bg-gray-100 dark:bg-[#1c1c1c] border border-gray-200 dark:border-[#392828] overflow-hidden group">
          <div className="relative">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover transition-transform duration-300 group-hover:scale-105"
              data-alt="Jeep Wrangler 2020 color verde"
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCcJnpM_DxGlODmIz9PlTbqTMVy9c7xWwmtOy-K7aqBjm_1s9ymsu99w4-IbSo9tIotM4UJjFpiSKZspD2wmyUI79u_3Jsn_T3StP_eU0tFho-fvJePqPlgJIRCobLV9wifYtLooaceIlam5gzcU4C1w90a66vatsd2SGWm_-546Zt5JvUHXUd1Nfju47z4H2kqv2l-7Hvp3JSgTBxJfioa0fDQ0sx3Z5-On9dNJVZqzUdn_HbI9Wm0mtqS220OABxq0W2i2zTqsgyg")'}}>
            </div>
            <span
              className="absolute top-2 left-2 bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-full">USADO</span>
          </div>
          <div className="p-4 pt-0">
            <p className="text-gray-900 dark:text-white text-lg font-bold leading-normal mb-2">Jeep Wrangler</p>
            <div className="text-gray-600 dark:text-[#b99d9d] text-sm space-y-1 mb-3">
              <p className="flex items-center gap-2"><span
                className="material-symbols-outlined text-base">calendar_today</span> 2020</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">settings</span>
                Sincrónico</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">speed</span> 45,000
                km</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">sell</span> Jeep
              </p>
            </div>
            <p className="text-2xl font-black price-highlight">$42,000</p>
          </div>
        </div>
        



        <div
          className="flex flex-col gap-3 rounded-xl bg-gray-100 dark:bg-[#1c1c1c] border border-gray-200 dark:border-[#392828] overflow-hidden group">
          <div className="relative">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover transition-transform duration-300 group-hover:scale-105"
              data-alt="BMW Serie 3 2022 color azul oscuro"
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3reUbiGeY5xtCcSfHNPbgfvd6tBDUUILpd372ctopt8L5EA5lf21u47Uzt1QqCmhsYzxK4q4NGHeCfeRJYe8mafNIxqmvGITMrqqDAMkzKA2e9gcMkNX8aXi9nPLdnRnTktZ-BRVNAYxxwGQpEpfjoHsC9AOgUaqa1qQ2jkn1mVyHSP0urcT5AyE_zRfkEItel9WqlsoNKjAcTcqj5ULgFH7eS_SU94C5G54P2BtQOrYRQh61pq8ShL93MPrLn8ckozb9ARPDwUkg")'}}>
            </div>
            <span
              className="absolute top-2 left-2 bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-full">USADO</span>
          </div>
          <div className="p-4 pt-0">
            <p className="text-gray-900 dark:text-white text-lg font-bold leading-normal mb-2">BMW Serie 3</p>
            <div className="text-gray-600 dark:text-[#b99d9d] text-sm space-y-1 mb-3">
              <p className="flex items-center gap-2"><span
                className="material-symbols-outlined text-base">calendar_today</span> 2022</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">settings</span>
                Automático</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">speed</span> 18,000
                km</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">sell</span> BMW</p>
            </div>
            <p className="text-2xl font-black price-highlight">$48,000</p>
          </div>
        </div>
        


        <div
          className="flex flex-col gap-3 rounded-xl bg-gray-100 dark:bg-[#1c1c1c] border border-gray-200 dark:border-[#392828] overflow-hidden group">
          <div className="relative">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover transition-transform duration-300 group-hover:scale-105"
              data-alt="Nissan Rogue 2023 color gris"
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDeMpBO_Pf4vD5JY4et7gRp7IxcR9luikazuTdUWWsbTNuXIcOSZeHRbRaCH8Ja7K2aJaDlE_FRGqxRtyKNhgF4KOqaIVS1Bz5k2butE1bGhLOKqZMZ-ktd-ZDScoWXuikcctbPCRFYcK7HCYpRSSc3cwFULshsY3ZO6tva3D_ZvY2q6Ba80SuJtBLm1VCfslRNghj9rpFxjwxUbxC6_giXOk5Stx4s2MI8I_OEMyyk486vLaVrPtnPie2NqUaenrL5MQ7uuepbttbg")'}}>
            </div>
            <span
              className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">NUEVO</span>
          </div>
          <div className="p-4 pt-0">
            <p className="text-gray-900 dark:text-white text-lg font-bold leading-normal mb-2">Nissan Rogue</p>
            <div className="text-gray-600 dark:text-[#b99d9d] text-sm space-y-1 mb-3">
              <p className="flex items-center gap-2"><span
                className="material-symbols-outlined text-base">calendar_today</span> 2023</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">settings</span>
                Automático</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">speed</span> 8,000
                km</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">sell</span> Nissan
              </p>
            </div>
            <p className="text-2xl font-black price-highlight">$33,000</p>
          </div>
        </div>
        


        <div
          className="flex flex-col gap-3 rounded-xl bg-gray-100 dark:bg-[#1c1c1c] border border-gray-200 dark:border-[#392828] overflow-hidden group">
          <div className="relative">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover transition-transform duration-300 group-hover:scale-105"
              data-alt="Mercedes-Benz Clase C 2021 color negro"
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuANs6Lovj0TJXF-kwrhymQDxUBQAZKmmxevYnLtE5MnZovSHpy6HGvIXlV_GB2QZzLTHXfw2Nts1lrFtiBDWyulN1u_BotQ_K5dIEbxFjlFYhTgc2S6yQ4GM0-KEREw1M0VxaIXMT5GN6N0b7Dlle7gVVwY5aL3eIoo85LKnCKQw972wLKhZy3syvW9tJwBnTF6r_7WP2dUTw5DtIFHvZNrESGZ4sY7NhRUVhhILXadW0CEHqp53tlU3u2KFrb3fOhpT18sX2LEywng")'}}>
            </div>
            <span
              className="absolute top-2 left-2 bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-full">USADO</span>
          </div>
          <div className="p-4 pt-0">
            <p className="text-gray-900 dark:text-white text-lg font-bold leading-normal mb-2">Mercedes-Benz Clase C</p>
            <div className="text-gray-600 dark:text-[#b99d9d] text-sm space-y-1 mb-3">
              <p className="flex items-center gap-2"><span
                className="material-symbols-outlined text-base">calendar_today</span> 2021</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">settings</span>
                Automático</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">speed</span> 30,000
                km</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">sell</span>
                Mercedes-Benz</p>
            </div>
            <p className="text-2xl font-black price-highlight">$47,000</p>
          </div>
        </div>
        



        <div
          className="flex flex-col gap-3 rounded-xl bg-gray-100 dark:bg-[#1c1c1c] border border-gray-200 dark:border-[#392828] overflow-hidden group">
          <div className="relative">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover transition-transform duration-300 group-hover:scale-105"
              data-alt="Audi A4 2022 color gris plata"
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBC6vXep5By14pGXOPuk9Ulf0zpdUnzgxCVGd1fy9DbzPOK1VhMcfwCYOAafCvw0MM22Exdbv0_r5OF_r2mUPknZVvz_a8eAX4be2498WvdY62B_VsVzDKuuWErkLEVvZaok7xWdaYP_2SS3WLhM6g3MwkpmtMR1MLdqzbLU3Ez7jedDlSoaSQIuJMXzEvQHIOOl5BZYuh-Wk003bR0aE4tBFPyZ_OxnVp0Zc3BOZmA9fYKe473-WDXz8OQ_uB-GzOluRrO3DwK48pK")'}}>
            </div>
            <span
              className="absolute top-2 left-2 bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-full">USADO</span>
          </div>
          <div className="p-4 pt-0">
            <p className="text-gray-900 dark:text-white text-lg font-bold leading-normal mb-2">Audi A4</p>
            <div className="text-gray-600 dark:text-[#b99d9d] text-sm space-y-1 mb-3">
              <p className="flex items-center gap-2"><span
                className="material-symbols-outlined text-base">calendar_today</span> 2022</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">settings</span>
                Automático</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">speed</span> 22,000
                km</p>
              <p className="flex items-center gap-2"><span className="material-symbols-outlined text-base">sell</span> Audi
              </p>
            </div>
            <p className="text-2xl font-black price-highlight">$46,000</p>
          </div>
        </div>
      </div>
      


      <div className="flex items-center justify-center p-4 mt-8">
        <a className="flex size-10 items-center justify-center text-gray-500 dark:text-white" href="#"><span
          className="material-symbols-outlined">chevron_left</span></a>
        <a className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-white rounded-full bg-primary"
          href="#">1</a>
        <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-800 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-card-border-dark"
          href="#">2</a>
        <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-800 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-card-border-dark"
          href="#">3</a>
        <span
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-800 dark:text-white rounded-full">...</span>
        <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-800 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-card-border-dark"
          href="#">10</a>
        <a className="flex size-10 items-center justify-center text-gray-500 dark:text-white" href="#"><span
          className="material-symbols-outlined">chevron_right</span></a>
      </div>
    </div>
  )
}
