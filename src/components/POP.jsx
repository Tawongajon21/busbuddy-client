import React from 'react'

function POP({paymentMethod,data}) {
    let companyName=data.company.name
  
  return (
  paymentMethod === "Bank Transfer" ?

    <>
    <h3>
The bank account of {companyName}  is 12399393939302939392 ,kindly submit the proof of payment
</h3>
<div class="booking-number">
<p class="booking-p">
  <label for="">Payment Method</label>
  <input type='file' class="booking-input"/>
</p>

</div>
</> : 
   <>
<h3>
The Ecocash number of  {companyName} is 07689092839
</h3>
<div class="booking-number">
<p class="booking-p">
<label for="">Payment Method</label>
<input type='file' class="booking-input"/>

</p>

</div>
</>
  )
}

export default POP