import {useState} from "react"
import {useForm} from "react-hook-form"

export function App() {
  const {register,handleSubmit}=useForm()
  const [data, setData] = useState("")
  return (
    <form onSubmit={handleSubmit((data) =>setData(JSON.stringify(data)))}>
      <input {...register("first name,last name")} placeholder="ФИО"/>
      <input {...register("Date of birth")} type="date"/>

      <select {...register("category",{required: true})}>
        <option value="">Пол...</option>
        <option value="A">Женский</option>
        <option value="B">Мужской</option>
      </select>
      <textarea {...register("about you")}/>
      <p>{data}</p>
      <input type ="submit"/>
    </form>
  )
}

export default App
