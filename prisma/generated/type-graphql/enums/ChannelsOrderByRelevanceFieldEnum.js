"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ChannelsOrderByRelevanceFieldEnum;
(function (ChannelsOrderByRelevanceFieldEnum) {
    ChannelsOrderByRelevanceFieldEnum["code"] = "code";
    ChannelsOrderByRelevanceFieldEnum["name"] = "name";
    ChannelsOrderByRelevanceFieldEnum["currency"] = "currency";
    ChannelsOrderByRelevanceFieldEnum["default_lang"] = "default_lang";
    ChannelsOrderByRelevanceFieldEnum["include_tax"] = "include_tax";
    ChannelsOrderByRelevanceFieldEnum["default_zone"] = "default_zone";
    ChannelsOrderByRelevanceFieldEnum["default_shipping"] = "default_shipping";
    ChannelsOrderByRelevanceFieldEnum["client_id"] = "client_id";
    ChannelsOrderByRelevanceFieldEnum["client_secret"] = "client_secret";
})(ChannelsOrderByRelevanceFieldEnum = exports.ChannelsOrderByRelevanceFieldEnum || (exports.ChannelsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(ChannelsOrderByRelevanceFieldEnum, {
    name: "ChannelsOrderByRelevanceFieldEnum",
    description: undefined,
});
