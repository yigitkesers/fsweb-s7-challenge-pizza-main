import "../components/onaypage.css"
const OnayPage = ({ mevcutSipariş }) => {
  console.log(mevcutSipariş);
  return (
    
     <div className="onay-kısmı">
       

       <h2 className="lezzet-metini">lezzetin yolda </h2>
       <br />
       <h1 className="siparis-metini">SİPARİŞ ALINDI</h1>
       <hr className="çizgi"/>
       <p className="pizza-metini">Position: Absolute Acı Pizza</p>
       <div className="detays">
         
         <p className="boyut-metini">
           Boyut: <strong>{mevcutSipariş.boyut}</strong>
         </p>
         <p className="hamur-metini">
           Hamur: <strong>{mevcutSipariş.hamurTipi}</strong>
         </p>
         <p className="ek-metini">
           Ek Malzemeler: <strong>{mevcutSipariş.toppings.join(" , ")}</strong>
         </p>
       </div>

       <div className="son-detays">
        <div className="detays-css">
         <p className="kutu-sipariş">Sipariş Toplamı</p>
         <p className="kutu-seçimler">Seçimler <span className="span-seçimler">{mevcutSipariş.toppings.length * 5}.00₺</span></p>
         <p className="kutu-toplam">Toplam <span className="span-toplam">{mevcutSipariş.total}₺</span></p>
         </div>
       </div>
     </div>
  );
};

export default OnayPage;