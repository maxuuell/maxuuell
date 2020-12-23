import React from "react";

const ConvertKitForm = () => {
  return (
    <form
      action="https://app.convertkit.com/forms/1393675/subscriptions"
      className="seva-form formkit-form"
      method="post"
      data-sv-form="1393675"
      data-uid="ed942d9ce9"
      data-format="inline"
      data-version="5"
      data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
      min-width="400 500 600 700 800"
      style={{ backgroundColor: "rgb(249, 250, 251)", borderRadius: "4px" }}
    >
      <div className="formkit-background" style={{ opacity: "0.2" }}></div>
      <div data-style="minimal">
        <div
          className="formkit-header"
          data-element="header"
          style={{
            color: "rgb(255, 255, 255)",
            fontSize: "27px",
            fontWeight: "700",
          }}
        >
          <h1>Join My Mailing List</h1>
        </div>
        <div
          className="formkit-subheader"
          data-element="subheader"
          style={{ color: "rgb(255, 255, 255)", fontSize: "18px" }}
        >
          <p>Subscribe to get my latest content by email.</p>
        </div>
        <ul
          className="formkit-alert formkit-alert-error"
          data-element="errors"
          data-group="alert"
        ></ul>
        <div
          data-element="fields"
          data-stacked="true"
          className="seva-fields formkit-fields"
        >
          <div className="formkit-field">
            <input
              className="formkit-input"
              name="email_address"
              placeholder="Your email address"
              required
              type="email"
              style={{
                color: "rgb(129, 129, 129)",
                borderColor: "rgb(227, 227, 227)",
                borderRadius: "4px",
                fontWeight: "400",
              }}
            />
          </div>
          <div className="formkit-field">
            <input
              className="formkit-input"
              aria-label="First Name"
              name="fields[first_name]"
              required
              placeholder="First Name"
              type="text"
              style={{
                color: "rgb(129, 129, 129)",
                borderColor: "rgb(227, 227, 227)",
                borderRadius: "4px",
                fontWeight: "400",
              }}
            />
          </div>
          <button
            data-element="submit"
            className="formkit-submit formkit-submit"
            style={{
              color: "rgb(255, 255, 255)",
              backgroundColor: "rgb(255, 140, 0)",
              borderRadius: "4px",
              fontWeight: "700",
            }}
          >
            <div className="formkit-spinner">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <span>Subscribe</span>
          </button>
        </div>
        <div
          className="formkit-guarantee"
          data-element="guarantee"
          style={{
            color: "rgb(255, 255, 255)",
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          <p>Unsubscribe at any time.</p>
        </div>
      </div>
      <style></style>
    </form>
  );
};

export default ConvertKitForm;
