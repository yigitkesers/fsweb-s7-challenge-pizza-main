// import { useState } from "react";
// import "../style/form.css";
// const Form = () => {
//     const pizzaBasePrice = '85.50';
//     const initialFormData = {
//         isim: "",
//         boyut: "",
//         hamurTipi: "",
//         toppings: [],
//         extraNotes: "",
//       }
//     const pizzaSizes = ["Küçük", "Orta", "Büyük"];
//     const kalinlik = ["İnce", "Normal", "Kalın"];
//     const ekMalzemeler = [
//       'Pepperoni',
//       'Tavuk Izgara',
//       'Mısır',
//       'Sarımsak',
//       'Ananas',
//       'Sosis',
//       'Soğan',
//       'Sucuk',
//       'Biber',
//       'Kabak',
//       'Kanada Jambonu',
//       'Domates',
//       'Jalepeno',
//     ];
  
  
//     const [formData, setFormData] = useState(initialFormData);
//     function handleChange(event) {
//        const {name, value, checked, type} = event.target; 
//     } ;




//     return (
//         <div className="form-content">
//             <div>
//                 <h2>Position Absolute Acı Pizza</h2>
//                     <h3>{pizzaBasePrice}</h3>
//                     <p>4.9</p>
//                     <p>(200)</p>
//                     <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
//             </div>
//             <form>
//                 <label className="boyut-container">
//                     Boyut Seç <span style={{color: 'red'}}>*</span>
//             {pizzaSizes.map((size) => (
//         <label key={size}>
//           <input type="radio" name="pizzaSize" value={size} />
//           {size}
//         </label>
//       ))}
//                </label> 


//                <label htmlFor="kalinlik">Hamur Seç <span style={{color: 'red'}}>*</span></label>
//             <select id="kalinlik" name="kalinlik">
//                 <option value="" disabled selected="true">Hamurunuzu Seçin</option>
//             {kalinlik.map((kalinlik, index) => (
//           <option key={index} value={kalinlik}>
//             {kalinlik}
//           </option>
//         ))}
//       </select>
            



//             </form>
//         </div>
//     )
// }
// export default Form;

// import React, { useState } from 'react';
// import "./form.css";


// const form = () => {
//   const [formData, setFormData] = useState({
//     size: "",
//     dough: "",
//     toppings: [],
//     note: ""
//   });
//   const [counter, setCounter] = useState(1);
//  const handleCounterChange = (increment) => {
//     setCounter((prevCounter) => {
//       const newCounter = increment ? prevCounter + 1 : prevCounter - 1;
//       return newCounter > 0 ? newCounter : 1;
//     });
//   };
//   const totalToppingPrice = formData.toppings.length * extraToppingPrice;
//   const totalPrice = (pizzaBasePrice + totalToppingPrice) * counter;

//   const toppingsOptions = [
//     'Pepperoni',
//     'Tavuk Izgara',
//     'Mısır',
//     'Sarımsak',
//     'Ananas',
//     'Sosis',
//     'Soğan',
//     'Sucuk',
//     'Biber',
//     'Kabak',
//     'Kanada Jambonu',
//     'Domates',
//     'Jalepeno',
//   ];
//   const pizzaBasePrice = '85.50';
//   const size = ["S", "M", "L"];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleToppingChange = (e) => {
//     const value = e.target.value;
//     setFormData((prevFormData) => {
//       const newToppings = prevFormData.toppings.includes(value)
//         ? prevFormData.toppings.filter((topping) => topping !== value)
//         : [...prevFormData.toppings, value];
//       return { ...prevFormData, toppings: newToppings };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//   };
//   return (
//     <div>
//       <div>
//         <h2>Position Absolute Acı Pizza</h2>
//           <h3>{pizzaBasePrice}</h3>
//           <p>4.9</p>
//           <p>(200)</p>
//           <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
//              </div>
//       <form className="form-component" onSubmit={handleSubmit}>
//         <div>
//            <label>
//             <input
//               type="radio"
//               value="S"
//               checked={formData.size === "S"}
//               name="size"
//               onChange={handleInputChange}
//             />
//             S
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="M"
//               checked={formData.size === "M"}
//               name="size"
//               onChange={handleInputChange}
//             />
//             M
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="L"
//               checked={formData.size === "L"}
//               name="size"
//               onChange={handleInputChange}
//             />
//             L
//           </label> 
//         </div>
//         <select name="dough" value={formData.dough} onChange={handleInputChange}>
//           <option value="" disabled>Hamur Kalınlığı Seç</option>
//           <option value="İnce Hamur">İnce Hamur</option>
//           <option value="Orta Hamur">Orta Hamur</option>
//           <option value="Kalın Hamur">Kalın Hamur</option>
//           <option value="Ekstra Kalınlıkta Hamur">Ekstra Kalınlıkta Hamur</option>
//         </select>
//         <div>
//           {toppingsOptions.map((topping) => (
//             <label key={topping}>
//               <input
//                 type="checkbox"
//                 value={topping}
//                 checked={formData.toppings.includes(topping)}
//                 onChange={handleToppingChange}
//               />
//               {topping}
//             </label>
//           ))}
//         </div>
//         <div>
//           <p>Sipariş Notu</p>
//           <label>
//             <textarea
//               name="note"
//               placeholder='Siparişe Eklemek istediğiniz bir not var mı'
//               value={formData.note}
//               onChange={handleInputChange}
//             ></textarea>
//           </label>
//         </div>
//         <div className="counter">
//                 <button
//                   type="button"
//                   onClick={() => handleCounterChange(true)}

//                 >
//                   +
//                 </button>
//                 <div className="counter-value">{counter}</div>
//                 <button
//                   type="button"
//                   onClick={() => handleCounterChange(false)}

//                 >
//                   -
//                 </button>
                
//                 <div className="order-summary">
//               <div className="counter">
//                 <button type="button" onClick={() => handleCounterChange(true)}>
//                   +
//                 </button>
//                 <div className="counter-value">{counter}</div>
//                 <button
//                   type="button"
//                   onClick={() => handleCounterChange(false)}
//                 >
//                   -
//                 </button>
//               </div>
//               <div className="order-total">
//                 <div>Pizza Price: {pizzaBasePrice} TL</div>
//                 <div>Extra Topping Price: {totalToppingPrice} TL</div>
//                 <div>Order Total: {totalPrice} TL</div>
//                 <button type="submit" >
//                   Sipariş Ver
//                 </button>
//               </div>
//             </div>
//                 </div>
//         <button type="submit">Sipariş Ver</button>
//       </form>
//     </div>
//   );
// };

// export default form;

// import React, { useState } from "react";
// import axios from "axios";
// import "./form.css";
// import { useEffect } from "react";

// const FormArea = () => {
//   const [formData, setFormData] = useState({
//     isim: "",
//     boyut: "",
//     hamurTipi: "",
//     toppings: [],
//     extraNotes: "",
//     adet: 1,
//   });


//   const [submitting, setSubmitting] = useState(false);
//   const [counter, setCounter] = useState(1);

//   useEffect(() => {
//     fetchCounter(); 
//   }, [counter]);

//   function fetchCounter() {
//     formData.adet = counter;
//   }

//   const pizzaBasePrice = 85.5;
//   const extraToppingPrice = 5;
//   const pizzaBoyut = ["small", "medium", "large"];
//   const pizzaToppings = [
//     { id: 1, name: "Mantar" },
//     { id: 2, name: "Sucuk" },
//     { id: 3, name: "Sosis" },
//     { id: 4, name: "Zeytin" },
//     { id: 5, name: "Biber" },
//     { id: 6, name: "Mısır" },
//     { id: 7, name: "Patlıcan" },
//     { id: 8, name: "Hamsi" },
//     { id: 9, name: "Beyaz Peynir" },
//   ];

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleCheckboxChange = (event) => {
//     const { value, checked } = event.target;
//     setFormData((prevFormData) => {
//       let newToppings = checked
//         ? [...prevFormData.toppings, value]
//         : prevFormData.toppings.filter((topping) => topping !== value);
//       return {
//         ...prevFormData,
//         toppings: newToppings,
//       };
//     });
//   };

//   const handleCounterChange = (increment) => {
//     setCounter((prevCounter) => {
//       const newCounter = increment ? prevCounter + 1 : prevCounter - 1;
//       return newCounter > 0 ? newCounter : 1;
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setSubmitting(true);
//     try {
//       const response = await axios.post(
//         "https://reqres.in/api/pizza",
//         formData
//       );
//       console.log("Yanıt:", response.data);
//     } catch (error) {
//       console.error("Hata:", error);
//     } finally {
//       setSubmitting(false);
//       setCounter(1);
//     }
//   };
  
//   const isFormValid = () => {
//     const { isim, boyut, hamurTipi, toppings } = formData;
//     return isim && boyut && hamurTipi && toppings.length >= 4 && !submitting;
//   };

//   const totalToppingPrice = formData.toppings.length * extraToppingPrice;
//   const totalPrice = (pizzaBasePrice + totalToppingPrice) * counter;

//   return (
//     <main>
//       <section className="pizza-section">
//         <h2>Pizza Adı</h2>
//         <div className="pizza-info">
//           <h3>{pizzaBasePrice}₺</h3>
//           <div className="pizza-rating">
//             <p>4.9</p>
//             <p>(200)</p>
//           </div>
//         </div>
//         <p>
//           Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
//           pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
//           diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
//           ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
//           düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
//           lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
//         </p>
//         <div className="formAlani">
//           <form onSubmit={handleSubmit}>
//             <label>
//               İsim:
//               <input
//                 type="text"
//                 name="isim"
//                 value={formData.isim}
//                 onChange={handleInputChange}
//                 minLength={3}
//                 maxLength={20}
//                 required
//                 disabled={submitting}
//               />
//             </label>
//             <br />
//             <div className="options">
//               <label className="pizzaboyut-container">
//                 Boyut Seç:<span style={{ color: "red" }}>*</span>
//                 {pizzaBoyut.map((size) => (
//                   <label key={size}>
//                     <input
//                       type="radio"
//                       name="boyut"
//                       value={size}
//                       onChange={handleInputChange}
//                       required
//                       checked={formData.boyut === size}
//                       disabled={submitting}
//                     />
//                     {size.charAt(0).toUpperCase() + size.slice(1)}
//                   </label>
//                 ))}
//               </label>
//               <label className="pizzahamur-container">
//                 Hamur Tipi:<span style={{ color: "red" }}>*</span>
//                 <select
//                   name="hamurTipi"
//                   value={formData.hamurTipi}
//                   onChange={handleInputChange}
//                   required
//                   disabled={submitting}
//                 >
//                   <option disabled value="">Hamur Tipi Seçiniz</option>
//                   <option value="ince">İnce</option>
//                   <option value="standart">Standart</option>
//                   <option value="kalin">Kalın</option>
//                 </select>
//               </label>
//             </div>
//             <br />
//             <label>Pizza Toppings:</label>
//             <div className="toppings">
//               {pizzaToppings.map((topping) => (
//                 <label key={topping.id}>
//                   <input
//                     type="checkbox"
//                     name="toppings"
//                     value={topping.name}
//                     onChange={handleCheckboxChange}
//                     checked={formData.toppings.includes(topping.name)}
//                     disabled={submitting}
//                   />
//                   {topping.name}
//                 </label>
//               ))}
//             </div>
//             <br />
//             <label>
//               Ek Notlar:
//               <textarea
//                 name="extraNotes"
//                 value={formData.extraNotes}
//                 onChange={handleInputChange}
//                 disabled={submitting}
//               ></textarea>
//             </label>
//             <hr />
//             <div className="order-summary">
//               <div className="counter">
//                 <button type="button" onClick={() => handleCounterChange(true)}>
//                   +
//                 </button>
//                 <div className="counter-value">{counter}</div>
//                 <button
//                   type="button"
//                   onClick={() => handleCounterChange(false)}
//                 >
//                   -
//                 </button>
//               </div>
//               <div className="order-total">
//                 <div>Pizza Price: {pizzaBasePrice} TL</div>
//                 <div>Extra Topping Price: {totalToppingPrice} TL</div>
//                 <div>Order Total: {totalPrice} TL</div>
//                 <button type="submit" disabled={!isFormValid()}>
//                   Sipariş Ver
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default FormArea;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./form.css";
import { useHistory } from "react-router-dom";

const FormArea = () => {
  const initialFormData = {
    isim: "",
    boyut: "",
    hamurTipi: "",
    toppings: [],
    extraNotes: "",
    adet: 1,
  };

  let history = useHistory();
  function handleOkey() {
    history.push("/Onay");
  }

  

  const [formData, setFormData] = useState(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    fetchCounter(); 
  }, [counter]);

  function fetchCounter() {
    formData.adet = counter;
  }

  const pizzaBasePrice = 85.50;
  const extraToppingPrice = 5;
  const pizzaBoyut = ["small", "medium", "large"];
  const pizzaToppings = [
    { id: 1, name: "Pepperoni" },
    { id: 2, name: "Tavuk Izgara" },
    { id: 3, name: "Mısır" },
    { id: 4, name: "Sarımsak" },
    { id: 5, name: "Ananas" },
    { id: 6, name: "Sosis" },
    { id: 7, name: "Soğan" },
    { id: 8, name: "Sucuk" },
    { id: 9, name: "Biber" },
    { id: 10, name: "Kabak" },
    { id: 11, name: "Kanada Jambonu" },
    { id: 12, name: "Domates" },
    { id: 13, name: "Jalepeno" },
    { id: 14, name: "Sucuk" },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setFormData((prevFormData) => {
      let newToppings = checked
        ? [...prevFormData.toppings, value]
        : prevFormData.toppings.filter((topping) => topping !== value);
      return {
        ...prevFormData,
        toppings: newToppings,
      };
    });
  };

  const handleCounterChange = (increment) => {
    setCounter((prevCounter) => {
      const newCounter = increment ? prevCounter + 1 : prevCounter - 1;
      return newCounter > 0 ? newCounter : 1;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://reqres.in/api/pizza', {
        ...formData,
        counter,
        totalPrice
    })
        .then(response => {
            console.log("Sipariş Özeti:", response.data);
        })
        .catch(error => {
            console.error("Sipariş Gönderim Hatası:", error);
        });
};

  const isFormValid = () => {
    const { isim, boyut, hamurTipi, toppings } = formData;
    return isim && boyut && hamurTipi && toppings.length >= 4 && !submitting;
  };

  const totalToppingPrice = formData.toppings.length * extraToppingPrice;
  const totalPrice = (pizzaBasePrice + totalToppingPrice) * counter;

  return (
    <main>   
      <section className="pizza-section">
        <h2>Pizza Adı</h2>
        <div className="pizza-info">
          <h3>{pizzaBasePrice}₺</h3>
          <div className="pizza-rating">
            <p>4.9</p>
            <p>(200)</p>
          </div>
        </div>
        <p>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
        <div className="formAlani">
          <form onSubmit={handleSubmit}>
            <label>
              İsim:
              <input
                type="text"
                name="isim"
                value={formData.isim}
                onChange={handleInputChange}
                minLength={3}
                required
                disabled={submitting}
              />
            </label>
            <br />
            <div className="options">
              <label className="pizzaboyut-container">
                Boyut Seç:<span style={{ color: "red" }}>*</span>
                {pizzaBoyut.map((size) => (
                  <label key={size}>
                    <input
                      type="radio"
                      name="boyut"
                      value={size}
                      onChange={handleInputChange}
                      required
                      checked={formData.boyut === size}
                      disabled={submitting}
                    />
                    {size.charAt(0).toUpperCase() + size.slice(1)}
                  </label>
                ))}
              </label>
              <label className="pizzahamur-container">
                Hamur Tipi:<span style={{ color: "red" }}>*</span>
                <select
                  name="hamurTipi"
                  value={formData.hamurTipi}
                  onChange={handleInputChange}
                  required
                  disabled={submitting}
                >
                  <option disabled value="">
                    Hamur Tipi Seçiniz
                  </option>
                  <option value="ince">İnce</option>
                  <option value="standart">Standart</option>
                  <option value="kalin">Kalın</option>
                </select>
              </label>
            </div>
            <br />
            <h2>Ek Malzemeler</h2>
            <br />
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <label>Pizza Toppings:</label>
            <div className="toppings">
              {pizzaToppings.map((topping) => (
                <label key={topping.id}>
                  <input
                    type="checkbox"
                    name="toppings"
                    value={topping.name}
                    onChange={handleCheckboxChange}
                    checked={formData.toppings.includes(topping.name)}
                    disabled={submitting}
                  />
                  {topping.name}
                </label>
              ))}
            </div>
            <br />
            <label>
              Ek Notlar:
              <textarea
                name="extraNotes"
                value={formData.extraNotes}
                onChange={handleInputChange}
                disabled={submitting}
              ></textarea>
            </label>
            <hr />
            <div className="order-summary">
              <div className="counter">
              <button
                  type="button"
                  onClick={() => handleCounterChange(false)}
                >
                  -
                </button>
                
                <div className="counter-value">{counter}</div>
                <button type="button" onClick={() => handleCounterChange(true)}>
                  +
                </button>
                
              </div>
              <div className="order-total">
                <div>Pizza Price: {pizzaBasePrice} TL</div>
                <div>Extra Topping Price: {totalToppingPrice} TL</div>
                <div>Order Total: {totalPrice} TL</div>
                <button type="submit" disabled={!isFormValid()} onClick={handleOkey}>
                  Sipariş Ver
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default FormArea;
