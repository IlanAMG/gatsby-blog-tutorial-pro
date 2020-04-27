import React from 'react'

const MailchimpForm = () => {
    return (
        <form name="mailchimp" method="POST" data-netlify="true" data-netlify-honeypot='bot-field' /* action='/success' */ >
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <input type="hidden" name='form-name' value='mailchimp' /> {/* ligne très importante à mettre  */}
            <input type="hidden" name='bot-field' /> {/* ligne très importante à mettre  */}
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    )
}

export default MailchimpForm
