

export const StockSection = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-black text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-8 text-center">Stock
          Destacado</h2>
        <div
          className="flex overflow-x-auto pb-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-6">


            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-card-light shadow-lg min-w-72 border-gray-400">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg"
                data-alt="Front view of a white Audi A4"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtmhkwvH8E29Oo0lFnqM0ufLx_0m1aJFohBxpRyfPuuw4_QljaMJnMxUjq1w5lm8fWQ80jkgJHVyv7cXDeVYMSBivSKzs6scGv8ZrJ4--1mwXMq9eYWpSRPSeQ5vlFrLHmq8nekA7VlE84lNDPA27XbLqL4e1tOP0_1xQfgYISgjcQrQ1QRRLBT88Vq87JuzrZ_SyvRHqVhIKSSocsPmodCjNzlzVhKr8OvEzi4gRy20QYMstbiAs3DY19R8YJAcZ9rvt6C_OeX8PK")`
                }}>
              </div>
              <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                <div>
                  <p className="text-black text-lg font-bold leading-normal">Audi A4</p>
                  <p className="text-text-muted-light text-sm font-normal leading-normal">Precio: $45,000 | 2022 | 15,000
                    km</p>
                </div>
                <button
                  className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-card-border-light text-black border-red-400 border-1 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary transition-colors">
                  <span className="truncate">Ver Detalles</span>
                </button>
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-card-dark shadow-lg min-w-72">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg"
                data-alt="Side profile of a blue BMW X5"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcUTzt0O1tbCYw7UydXt8rFEF_Nn9topsf0O68guWn_x2moxjaU517SBdK_PagmJfXdng-1-eogvI7501UwMGh36AwdVw2ptNXiqF-uqJu39Pwz0IIxy6eg8GOEdJfk_BDHrMDebqP92tr8_gUfpWF5EjQyqkNCpWhd_aTuI4n9xpd_s10MmTLgX_1o4kNnDjoX1GVSwQGQwdR3F-lNCuJjWNPH91znqmia2wmXfn1mTcBABEyOBdYJcQcUb5lWl1qCg2k63W992hw")`
                }}>
              </div>
              <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                <div>
                  <p className="text-white text-lg font-bold leading-normal">BMW X5</p>
                  <p className="text-text-muted-dark text-sm font-normal leading-normal">Precio: $62,000 | 2023 | 8,000 km
                  </p>
                </div>
                <button
                  className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-card-border-dark text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary transition-colors">
                  <span className="truncate">Ver Detalles</span>
                </button>
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-card-dark shadow-lg min-w-72">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg"
                data-alt="A silver Mercedes-Benz C-className in motion"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_WWrJsVv2E3PMUr31GPPwPhv_si7s9iOsr8KUdy7O-ooefRkAlHgPtmj6BfnCxqiZHMgYkscU7ULNByu--1uhhUM-kd_UHBMZdSHg-qQUVMeil3VypN80VSCcguqQar50xjQBk2L2gaaxRPK12-RQK4LqnyTHwIsFaGbDi-7QnXESt6wDanvmjj8UX0kA1HEfydkC2NaYuM79n7uTd5oRC_64SFhrGYsSW3GNGU8ysR-Nfic59U4U-4UU--v-S151gyA9COOepWEH")`
                }}>
              </div>
              <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                <div>
                  <p className="text-white text-lg font-bold leading-normal">Mercedes-Benz C-className</p>
                  <p className="text-text-muted-dark text-sm font-normal leading-normal">Precio: $55,000 | 2022 | 22,000
                    km</p>
                </div>
                <button
                  className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-card-border-dark text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary transition-colors">
                  <span className="truncate">Ver Detalles</span>
                </button>
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-card-dark shadow-lg min-w-72">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg"
                data-alt="A red Ford F-150 truck outdoors"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNIEXZYpWDtJ8Y-bmvKtWZvA4O-pGy_NNMa1aEEB8cB7NYP1RB9s52GrUTSNhnTonKzZliX0g9w3FI99CxJCD-hJ64PJHu1upuZsvT9iNP3LznLm4ro7-9rTjtlElc7HB2sYXtcrKdHszMDh8oKM8kDiVJBaFZVPoycJ5DD7oU9TLdJgZSRkI54HvgdoJTN-xlshYHQI9KS8-FFzomNl44o-sk7CdwOXOZS1s4fcv4m1Ycm-q1lymS37A4vxwT9c8jPg5fTWzPEN5r")`
                }}>
              </div>
              <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                <div>
                  <p className="text-white text-lg font-bold leading-normal">Ford F-150</p>
                  <p className="text-text-muted-dark text-sm font-normal leading-normal">Precio: $58,000 | 2023 | 12,000
                    km</p>
                </div>
                <button
                  className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-card-border-dark text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary transition-colors">
                  <span className="truncate">Ver Detalles</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
