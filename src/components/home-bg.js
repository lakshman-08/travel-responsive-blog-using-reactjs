import "./home-bgstyle.css";

function homebg(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="homebg" src={props.bgimage} />
        <div className="home-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}
export default homebg;
