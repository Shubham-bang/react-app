import logo from './logo.svg';
import './App.css';
import { Formik } from 'formik';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
     <h1>welcome to formik</h1>
     <Formik
       initialValues={
         {  name: '',
            email: '' ,
            gender: ''
          }
        }    
       validate={values => {
         const errors = {};
         if(!values.name){
          errors.name = "Please enter your name";
        }
         if (!values.email) {
           errors.email = 'Please senter the email address';
         }
         console.log(values.gender);
         if(!values.gender){
          errors.gender = "Please select gender";
        }
         
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
           />
           
           <p style={{color: "red"}}>{errors.name && touched.name && errors.name}</p>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           
           <p style={{color: "red"}}>{errors.email && touched.email && errors.email}</p>

           <input type="radio" value="MALE" name="gender"/> Male
           <input type="radio" value="FEMALE" name="gender"/> Female

           <p style={{color: "red"}}>{errors.gender && touched.gender && errors.gender}</p>
           
           
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
      </header>
    </div>
  );
}

export default App;
