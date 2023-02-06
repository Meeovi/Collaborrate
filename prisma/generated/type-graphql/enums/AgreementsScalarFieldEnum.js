"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AgreementsScalarFieldEnum;
(function (AgreementsScalarFieldEnum) {
    AgreementsScalarFieldEnum["id"] = "id";
    AgreementsScalarFieldEnum["name"] = "name";
    AgreementsScalarFieldEnum["type"] = "type";
    AgreementsScalarFieldEnum["content"] = "content";
    AgreementsScalarFieldEnum["created"] = "created";
    AgreementsScalarFieldEnum["excerpt"] = "excerpt";
    AgreementsScalarFieldEnum["image"] = "image";
    AgreementsScalarFieldEnum["mediamanager"] = "mediamanager";
    AgreementsScalarFieldEnum["reference_id"] = "reference_id";
    AgreementsScalarFieldEnum["shop_id"] = "shop_id";
    AgreementsScalarFieldEnum["updated"] = "updated";
    AgreementsScalarFieldEnum["user_id"] = "user_id";
})(AgreementsScalarFieldEnum = exports.AgreementsScalarFieldEnum || (exports.AgreementsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AgreementsScalarFieldEnum, {
    name: "AgreementsScalarFieldEnum",
    description: undefined,
});
