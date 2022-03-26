import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <h2>How React works?</h2>
      <p>
        React is a JavaScript library, first and foremost. As a result, we're
        able to employ JavaScript code in this situation. Incorporating HTML
        code into the development of a react application is possible. By
        declaring the Element function in React, users can generate a
        representation of a DOM node. Instead of using DOM classes, React uses
        ClassName. The JSX tags, which have a name, children, and attribute, are
        the most important thing in React.
      </p>
      <br />
      <h2>How does useState Work?</h2>
      <p>
        UseState is one of react's most powerful features. useState is a hook
        that enables state variables in functional components. This function
        returns a variable with the current state value after receiving the
        initial state. The useState function can also be used to update the
        value of a function. In react, there are two kinds of components: class
        components and functional components. Parameters are accepted by the
        functional component, and the JSX is legitimate.
      </p>

      <h2>Props vs State differences</h2>
      <p>
        Props, on the other hand, are just read. Because state is both read and
        write only, props values cannot be modified, but state values can be
        updated if necessary. State is mutable, but props are immutable. Props
        are used to communicate data from one component to another, whereas
        States are used to send data just within a component. Proper performance
        is excellent, but state's performance is inferior to props.Only props
        and not state can be utilized with the stateless component.
      </p>
    </div>
  );
};

export default Footer;
