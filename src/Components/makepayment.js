const makePayment = () => {
    var config = {
        "root":"",
        "style": {
          "bodyBackgroundColor": "#fafafb",
          "bodyColor": "",
          "themeBackgroundColor": "#0FB8C9",
          "themeColor": "#ffffff",
          "headerBackgroundColor": "#284055",
          "headerColor": "#ffffff",
          "errorColor": "",
          "successColor": "",
          "card": {
            "padding": "",
            "backgroundColor": ""
          }
        },
        "data": {
          "orderId": paymentData.order,
          "token": paymentData.token,
          "tokenType": "TXN_TOKEN",
          "amount": paymentData.amount /* update amount */
        },
        "payMode": {
          "labels": {},
          "filter": {
            "exclude": []
          },
          "order": [
              "CC",
              "DC",
              "NB",
              "UPI",
              "PPBL",
              "PPI",
              "BALANCE"
          ]
        },
        "website": "WEBSTAGING",
        "flow": "DEFAULT",
        "merchant": {
          "mid": paymentData.mid,
          "redirect": false
        },
        "handler": {
          "transactionStatus":
function transactionStatus(paymentStatus){
            console.log(paymentStatus);
          },
          "notifyMerchant":
function notifyMerchant(eventName,data){
            console.log("Closed");
          }
        }
    };
  
    if (window.Paytm && window.Paytm.CheckoutJS) {
       window.Paytm.CheckoutJS.init(config).
then(function onSuccess() {
  window.Paytm.CheckoutJS.invoke();
}).catch(function onError(error) {
  console.log("Error => ", error);
});
}
return (
    <div>
      {loading ? (
        <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" />
      ) : (
        <button onClick={makePayment}>Pay Now</button>
      )}
    </div>
  );
}	

export default makePayment;