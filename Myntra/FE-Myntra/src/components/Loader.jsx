import sty from "./Loader.module.css";

const Loader = () => {
  return (
    <>
      <div className={sty.bod}>
        <div className={sty.container}>
          <div className={sty.ring}></div>
          <div className={sty.ring}></div>
          <div className={sty.ring}></div>
          <p className={sty.loading}>Loading....</p>
        </div>
      </div>
    </>
  )
}

export default Loader;
