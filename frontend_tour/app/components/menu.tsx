export default function Menu(){
    return(
        <nav className="">
          <div className="mx-auto flex items-center gap-4 py-3 px-4">
            {[
              { label: "Điểm đến hấp dẫn", href: "#" },
              { label: "Địa điểm trong nước", href: "#" },
              { label: "Địa điểm Đông Nam Á", href: "#" },
              { label: "Địa điểm Châu Á", href: "#" },
              { label: "Địa điểm Châu Âu", href: "#" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative text-base cursor-pointer overflow-hidden 
                    before:absolute before:bottom-0 before:left-0 
                    before:w-0 before:h-[2px] before:bg-blue-500 
                    before:transition-all before:duration-300 hover:before:w-full"
              >
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </nav>
    )
}