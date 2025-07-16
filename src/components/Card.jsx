export default function CardComic(props){
  console.log(props);
  console.log(props.src);
  

  return (
      <div className="card bg-black text-white">
        <img className="card-image" src={props.src} alt="comic-cover" />
        <div className="card-body">
          <div className="comic-series">{props.series}</div>
        </div>
      </div>
  )  
}

