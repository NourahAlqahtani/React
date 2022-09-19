let container = document.getElementById("box")
let element = (
  <div className="box">
        <img src="logo.jpg" alt="" className="box-img" />
        <h1>Nourah Alqahtani</h1>
        <h5>Web Designer</h5>
        <p>Seeking to develop my skills and knowledge in the
          field of Technology, to practice my experiences in
          programming and design and develop them. I’m
          eager to work in a motivational and challenging
          environment to gain more knowledge and experience
          towards achieving the organization goals and values.</p>
        <ul>
          <li><a href="https://www.linkedin.com/in/nourah-alqahtani-%D9%86%D9%88%D8%B1%D9%87-%D8%A7%D9%84%D9%82%D8%AD%D8%B7%D8%A7%D9%86%D9%8A-5ab216243"><i className="fa fa-linkedin-square" aria-hidden="true" /></a></li>
          <li><a href="https://twitter.com/noons_q"><i className="fa fa-twitter-square" aria-hidden="true" /></a></li>
        </ul>
      </div>
);
ReactDOM.render(element , container);
console.log("hello");