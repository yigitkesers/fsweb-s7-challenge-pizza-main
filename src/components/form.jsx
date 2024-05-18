import { useState } from "react";
import "../style/form.css";
const Form = () => {
    const pizzaBasePrice = '85.50';
    const initialFormData = {
        isim: "",
        boyut: "",
        hamurTipi: "",
        toppings: [],
        extraNotes: "",
      }
    const pizzaSizes = ["Küçük", "Orta", "Büyük"];
    const kalinlik = ["İnce", "Normal", "Kalın"];
    const ekMalzemeler = ["Pepperoni", "Tavuk Izgara", "Mısır", "Sarımsak", "Ananas", "Sosis", "Soğan", "Sucuk", "Biber", "Kabak", "Kanada Jambonu", "Domates", "Jalepeno", "Sucuk"];
    const [formData, setFormData] = useState(initialFormData);
    function handleChange(event) {
       const {name, value, checked, type} = event.target; 
    } ;




    return (
        <div className="form-content">
            <div>
                <h2>Position Absolute Acı Pizza</h2>
                    <h3>{pizzaBasePrice}</h3>
                    <p>4.9</p>
                    <p>(200)</p>
                    <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
            </div>
            <form>
                <label className="boyut-container">
                    Boyut Seç <span style={{color: 'red'}}>*</span>
            {pizzaSizes.map((size) => (
        <label key={size}>
          <input type="radio" name="pizzaSize" value={size} />
          {size}
        </label>
      ))}
               </label> 


               <label htmlFor="kalinlik">Hamur Seç <span style={{color: 'red'}}>*</span></label>
            <select id="kalinlik" name="kalinlik">
                <option value="" disabled selected="true">Hamurunuzu Seçin</option>
            {kalinlik.map((kalinlik, index) => (
          <option key={index} value={kalinlik}>
            {kalinlik}
          </option>
        ))}
      </select>
            



            </form>
        </div>
    )
}
export default Form;