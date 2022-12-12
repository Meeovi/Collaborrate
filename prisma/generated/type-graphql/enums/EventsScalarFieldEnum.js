"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var EventsScalarFieldEnum;
(function (EventsScalarFieldEnum) {
    EventsScalarFieldEnum["id"] = "id";
    EventsScalarFieldEnum["created_at"] = "created_at";
    EventsScalarFieldEnum["name"] = "name";
    EventsScalarFieldEnum["content"] = "content";
    EventsScalarFieldEnum["tickets"] = "tickets";
    EventsScalarFieldEnum["image"] = "image";
    EventsScalarFieldEnum["start"] = "start";
    EventsScalarFieldEnum["end"] = "end";
    EventsScalarFieldEnum["category"] = "category";
    EventsScalarFieldEnum["city"] = "city";
    EventsScalarFieldEnum["state"] = "state";
    EventsScalarFieldEnum["country"] = "country";
    EventsScalarFieldEnum["postalcode"] = "postalcode";
    EventsScalarFieldEnum["type"] = "type";
    EventsScalarFieldEnum["invitationEmail"] = "invitationEmail";
    EventsScalarFieldEnum["invitationBillingAddress"] = "invitationBillingAddress";
    EventsScalarFieldEnum["invitationGrandTotalPurchased"] = "invitationGrandTotalPurchased";
    EventsScalarFieldEnum["invitationInvoiceDate"] = "invitationInvoiceDate";
    EventsScalarFieldEnum["invitationOrderNumber"] = "invitationOrderNumber";
    EventsScalarFieldEnum["invitationPaymentMethod"] = "invitationPaymentMethod";
    EventsScalarFieldEnum["invitationShippingAddress"] = "invitationShippingAddress";
    EventsScalarFieldEnum["invitationCustomerName"] = "invitationCustomerName";
    EventsScalarFieldEnum["invitationStatus"] = "invitationStatus";
    EventsScalarFieldEnum["media"] = "media";
})(EventsScalarFieldEnum = exports.EventsScalarFieldEnum || (exports.EventsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(EventsScalarFieldEnum, {
    name: "EventsScalarFieldEnum",
    description: undefined,
});
