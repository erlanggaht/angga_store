

export default function Carousel() {
  return (
    <>
    <div>
  <div className="carousel">
    <ul className="slides h-[490px]">

        {/* Title Hero */}
        <div className="relative z-50 md:pl-32 pl-16 h-full flex flex-col justify-center  ">
        <div>
        <h1 className="text_embose md:text-6xl text-5xl text-white drop-shadow-sm break-words font-extrabold tracking-wide  uppercase " style={{inlineSize:'309px'}}>exDamn X fashion outfits</h1>
        </div>
        </div>

      <input type="radio" name="radio-buttons" id="img-1" checked />
      <li className="slide-container">
        <div className="slide-image">
       
          <img src=" https://unsplash.com/photos/ToLMORRb97Q/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8Y2xvdGhpbmd8ZW58MHx8fHwxNjkxNzMzOTY1fDA&force=true&w=1920"/>
        </div>
        <div className="carousel-controls">
          <label htmlFor="img-3" className="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label htmlFor="img-2" className="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input type="radio" name="radio-buttons" id="img-2" />
      <li className="slide-container">
        <div className="slide-image">
      
          <img src=" https://unsplash.com/photos/NnPiILRe7pY/download?force=true&w=1920"/>
        </div>
        <div className="carousel-controls">
          <label htmlFor="img-1" className="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label htmlFor="img-3" className="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input type="radio" name="radio-buttons" id="img-3" />
      <li className="slide-container">
        <div className="slide-image">
          <img src="https://unsplash.com/photos/VsK6LyEBFFo/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fE5JS0UlMjBIRHxlbnwwfHx8fDE2OTE3NzczMjZ8MA&force=true&w=1920"/>
        </div>
        <div className="carousel-controls">
          <label htmlFor="img-2" className="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label htmlFor="img-1" className="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <div className="carousel-dots">
        <label htmlFor="img-1" className="carousel-dot" id="img-dot-1"></label>
        <label htmlFor="img-2" className="carousel-dot" id="img-dot-2"></label>
        <label htmlFor="img-3" className="carousel-dot" id="img-dot-3"></label>
      </div>
    </ul>
  </div>
</div>
    </>
  )
}
