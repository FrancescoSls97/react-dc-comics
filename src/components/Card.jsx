export default function CardComic(props){
  console.log(props);

  return (
    <div className="col">
      <div className="card">
        <img className="card-image"  src="{props.thumb}" alt="comic-cover" />
        <div className="card-body">
          <div className="comic-series">{props.series}</div>
        </div>
      </div>
    </div>
  )

  
}

