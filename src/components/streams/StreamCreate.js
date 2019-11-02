import React from "react";
import { connect } from 'react-redux';
// import { Field, reduxForm } from 'redux-form';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  // renderError({error, touched}) {
  //   if (error && touched) {
  //     return (
  //       <div className="ui error message">
  //         <div className="header">{error}</div>
  //       </div>
  //     );
  //   }
  // }
  // renderInput = ({ input, label, meta }) => {
  //   const className = `field ${meta.error && meta.touched ? "error" : ""}`;
  //   return (
  //     <div className={className}>
  //       <label>{label}</label>
  //       <input {...input} autoComplete="off" />
  //       {this.renderError(meta)}
  //     </div>
  //   );
  // };

  onSubmit = (formValues) => {
    // console.log(formValues);
    this.props.createStream(formValues);
  }
  render() {
    return (


      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
      // <form
      //   className="ui form error"
      //   onSubmit={this.props.handleSubmit(this.onSubmit)}
      // >
      //   <Field name="title" component={this.renderInput} label="Enter Title" />
      //   <Field
      //     name="description"
      //     component={this.renderInput}
      //     label="Enter Description"
      //   />
      //   <button className="ui button primary">Submit</button>
      // </form>
    );
  }
}

// const validate = formValues => {
//   const errors = {};
//   if (!formValues.title) {
//     errors.title = "You must enter a title";
//   }

//   if (!formValues.description) {
//     errors.description = "You must enter a description";
//   }
//   return errors;
// };

// const fromWrapped = reduxForm({
//   form: "streamCreate",
//   validate
// })(StreamCreate);

export default connect(null , { createStream}) (StreamCreate);
