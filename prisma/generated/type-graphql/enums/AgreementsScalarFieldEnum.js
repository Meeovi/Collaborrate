"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AgreementsScalarFieldEnum;
(function (AgreementsScalarFieldEnum) {
    AgreementsScalarFieldEnum["id"] = "id";
    AgreementsScalarFieldEnum["reference_id"] = "reference_id";
    AgreementsScalarFieldEnum["created"] = "created";
    AgreementsScalarFieldEnum["updated"] = "updated";
    AgreementsScalarFieldEnum["content"] = "content";
    AgreementsScalarFieldEnum["name"] = "name";
    AgreementsScalarFieldEnum["image"] = "image";
    AgreementsScalarFieldEnum["excerpt"] = "excerpt";
    AgreementsScalarFieldEnum["type"] = "type";
    AgreementsScalarFieldEnum["user_id"] = "user_id";
    AgreementsScalarFieldEnum["shop_id"] = "shop_id";
    AgreementsScalarFieldEnum["mediamanager"] = "mediamanager";
})(AgreementsScalarFieldEnum = exports.AgreementsScalarFieldEnum || (exports.AgreementsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AgreementsScalarFieldEnum, {
    name: "AgreementsScalarFieldEnum",
    description: undefined,
});
