import './App.css'
import React from 'react'

export default function App() {

  const [color, setColor] = React.useState('#f8fafc')

  function handleChange(event) {
    setColor(event.target.value)
  }

  React.useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  function signUp(formData) {
    const allData = Object.fromEntries(formData)
    const dietRestrictions = formData.getAll('dietRestrictions')
    const data = { ...allData, dietRestrictions }
    console.log(data)
  }

  return (
    <>
      <section>
        <h1>SignUp Form</h1>
        <form action={signUp}>
          <label htmlFor="email">Email:</label>
          <input type="email" id='email' name="email" defaultValue='athar@me.com' />

          <label htmlFor="password">Password:</label>
          <input type="password" id='password' name="password" defaultValue='123987' />

          <label htmlFor="description">Description:</label>
          <textarea type="description" id='description' name="description" defaultValue='This is a description' />

          <fieldset>
            <legend>Employment Status</legend>
            <label>
              <input type="radio" name="employment" value="unemployed" defaultChecked />
              Unemployed
            </label>
            <label>
              <input type="radio" name="employment" value="part-time" />
              Part-Time
            </label>
            <label>
              <input type="radio" name="employment" value="full-time" />
              Full-Time
            </label>
          </fieldset>

          <fieldset>
            <legend>Dietary Restrictions</legend>
            <label>
              <input type="checkbox" name="dietRestrictions" value="kosher" defaultChecked />
              Kosher
            </label>
            <label>
              <input type="checkbox" name="dietRestrictions" value="vegan" />
              Vegab
            </label>
            <label>
              <input type="checkbox" name="dietRestrictions" value="gluten-free" defaultChecked />
              Gluten-Free
            </label>
          </fieldset>

          <label htmlFor="fav-color">What is your favorite color?</label>
          <select name="fav-color" id="fav-color" defaultValue="" onChange={handleChange}
            style={{ backgroundColor: color }}>
            <option value="" disabled>-- Choose --</option>
            <option value="#fee2e2">Red</option>
            <option value="#dcfce7">Green</option>
            <option value="#dbeafe">Blue</option>
          </select>

          <input type="submit" value="Submit" id='submit' />
        </form>


      </section>
    </>
  )
}