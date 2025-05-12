import React from 'react'

function Index({heading,title,description}) {
  return (
   <>
          <div className="flex flex-col gap-[30px] 2xl:gap-[10px]">
              <div className="w-[100%] flex flex-col gap-[10px] 2xl:gap-[0px]">
                <h2 className="text-[32px] md:text-[52px] font-[800] leading-[50px] inline-block text-white capitalize">
                  {heading ? heading : ""}
                </h2>

                <p className="text-[22px] mt-[12px] 2xl:mt-[30px] font-[600] leading-[27px] text-white">
                  {title ? title : ""}
                </p>
              </div>

              <div className="flex flex-col 2xl:mt-[20px] gap-[20px] w-[100%]">
                <p className="text-[16px] font-[500] leading-[33px] text-white">
                  {description ? description : ""}
                </p>
              </div>
            </div>
   </>
  )
}

export default Index