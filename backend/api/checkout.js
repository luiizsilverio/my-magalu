const stripe = require("../stripe");

async function createCheckoutSession(req, res) {
  const domainUrl = process.env.WEB_APP_URL;
  const { line_items, customer_email } = req.body;

  if (!line_items || !customer_email) {
    return res.status(400).json({ error: 'missing required session parameters'});
  }

  let session;

  try {
    session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      customer_email,
      success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domainUrl}/canceled`,
      shipping_address_collection: { allowed_countries: ['BR'] }
    })

    res.status(200).json({ sessionId: session.id });
  }
  catch (error) {
    console.warn(error);
    res.status(400).json({ error: 'an error occurred, unable to create session' });
  }
}

module.exports = createCheckoutSession;

/* EXEMPLO DE REQUISIÇÃO (JSON)

{
	"line_items": [
		{
			"quantity": 1,
			"price_data": {
				"currency": "brl",
				"unit_amount": 2800,
				"product_data": {
					"name": "Cumulus",
					"description": "Bag for all occasions",
					"images": [
					"https://i.ibb.co/NtpJ0XQ/cumulus-olive.png"
					]
				}
			}
		}
	],
	"customer_email": "luiiz.silverio@gmail.com"
}

EXEMPLO DE RESPOSTA:

{
	"sessionId": "cs_test_a1JfuMKLrIAnpZNxHJs2Xhmwm3zoea6WGL6YUKevA4Yk7ciuIeJd6Zd6IP"
}

*/
