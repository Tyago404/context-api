export function MainContainer({children}:{children:React.ReactNode}) {
    return(
        <div className="flex flex-col gap-6 justify-center items-center m-auto p-6 max-w-[1200px] ">
            {children}
        </div>
    )
}