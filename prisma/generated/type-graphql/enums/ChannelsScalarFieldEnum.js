"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ChannelsScalarFieldEnum;
(function (ChannelsScalarFieldEnum) {
    ChannelsScalarFieldEnum["id"] = "id";
    ChannelsScalarFieldEnum["created_at"] = "created_at";
    ChannelsScalarFieldEnum["code"] = "code";
    ChannelsScalarFieldEnum["name"] = "name";
    ChannelsScalarFieldEnum["currency"] = "currency";
    ChannelsScalarFieldEnum["default_lang"] = "default_lang";
    ChannelsScalarFieldEnum["include_tax"] = "include_tax";
    ChannelsScalarFieldEnum["default_zone"] = "default_zone";
    ChannelsScalarFieldEnum["default_shipping"] = "default_shipping";
    ChannelsScalarFieldEnum["client_id"] = "client_id";
    ChannelsScalarFieldEnum["client_secret"] = "client_secret";
})(ChannelsScalarFieldEnum = exports.ChannelsScalarFieldEnum || (exports.ChannelsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ChannelsScalarFieldEnum, {
    name: "ChannelsScalarFieldEnum",
    description: undefined,
});
