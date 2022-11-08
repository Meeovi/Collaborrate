"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketingOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TicketingOrderByRelevanceFieldEnum;
(function (TicketingOrderByRelevanceFieldEnum) {
    TicketingOrderByRelevanceFieldEnum["name"] = "name";
    TicketingOrderByRelevanceFieldEnum["location"] = "location";
    TicketingOrderByRelevanceFieldEnum["date"] = "date";
    TicketingOrderByRelevanceFieldEnum["severity"] = "severity";
    TicketingOrderByRelevanceFieldEnum["team"] = "team";
    TicketingOrderByRelevanceFieldEnum["requester"] = "requester";
    TicketingOrderByRelevanceFieldEnum["requester_email"] = "requester_email";
    TicketingOrderByRelevanceFieldEnum["content"] = "content";
    TicketingOrderByRelevanceFieldEnum["department"] = "department";
    TicketingOrderByRelevanceFieldEnum["media"] = "media";
    TicketingOrderByRelevanceFieldEnum["projects"] = "projects";
    TicketingOrderByRelevanceFieldEnum["ticket_type"] = "ticket_type";
    TicketingOrderByRelevanceFieldEnum["comment"] = "comment";
    TicketingOrderByRelevanceFieldEnum["products"] = "products";
    TicketingOrderByRelevanceFieldEnum["priority"] = "priority";
    TicketingOrderByRelevanceFieldEnum["status"] = "status";
    TicketingOrderByRelevanceFieldEnum["resolution"] = "resolution";
    TicketingOrderByRelevanceFieldEnum["assigned_to"] = "assigned_to";
    TicketingOrderByRelevanceFieldEnum["account_name"] = "account_name";
    TicketingOrderByRelevanceFieldEnum["level"] = "level";
    TicketingOrderByRelevanceFieldEnum["projects_projectsToticketing"] = "projects_projectsToticketing";
})(TicketingOrderByRelevanceFieldEnum = exports.TicketingOrderByRelevanceFieldEnum || (exports.TicketingOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(TicketingOrderByRelevanceFieldEnum, {
    name: "TicketingOrderByRelevanceFieldEnum",
    description: undefined,
});
