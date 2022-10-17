import { loadScript } from "@paypal/paypal-js";

let paypal;

try {
    paypal = await loadScript({
        "client-id": "YOUR_CLIENT_ID",
        "data-client-token": "abc123xyz==",
    });
} catch (error) {
    console.error("failed to load the PayPal JS SDK script", error);
}

if (paypal) {
    try {
        await paypal.Buttons().render("#your-container-element");
    } catch (error) {
        console.error("failed to render the PayPal Buttons", error);
    }
}