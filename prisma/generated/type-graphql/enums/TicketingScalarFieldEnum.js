"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketingScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TicketingScalarFieldEnum;
(function (TicketingScalarFieldEnum) {
    TicketingScalarFieldEnum["id"] = "id";
    TicketingScalarFieldEnum["created_at"] = "created_at";
    TicketingScalarFieldEnum["name"] = "name";
    TicketingScalarFieldEnum["location"] = "location";
    TicketingScalarFieldEnum["date"] = "date";
    TicketingScalarFieldEnum["severity"] = "severity";
    TicketingScalarFieldEnum["team"] = "team";
    TicketingScalarFieldEnum["requester"] = "requester";
    TicketingScalarFieldEnum["requester_email"] = "requester_email";
    TicketingScalarFieldEnum["content"] = "content";
    TicketingScalarFieldEnum["department"] = "department";
    TicketingScalarFieldEnum["media"] = "media";
    TicketingScalarFieldEnum["projects"] = "projects";
    TicketingScalarFieldEnum["ticket_type"] = "ticket_type";
    TicketingScalarFieldEnum["comment"] = "comment";
    TicketingScalarFieldEnum["products"] = "products";
    TicketingScalarFieldEnum["priority"] = "priority";
    TicketingScalarFieldEnum["status"] = "status";
    TicketingScalarFieldEnum["resolution"] = "resolution";
    TicketingScalarFieldEnum["assigned_to"] = "assigned_to";
    TicketingScalarFieldEnum["date_modified"] = "date_modified";
    TicketingScalarFieldEnum["account_name"] = "account_name";
    TicketingScalarFieldEnum["level"] = "level";
    TicketingScalarFieldEnum["projects_projectsToticketing"] = "projects_projectsToticketing";
})(TicketingScalarFieldEnum = exports.TicketingScalarFieldEnum || (exports.TicketingScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TicketingScalarFieldEnum, {
    name: "TicketingScalarFieldEnum",
    description: undefined,
});
