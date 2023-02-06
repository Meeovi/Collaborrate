"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AgreementsOrderByRelevanceFieldEnum;
(function (AgreementsOrderByRelevanceFieldEnum) {
    AgreementsOrderByRelevanceFieldEnum["name"] = "name";
    AgreementsOrderByRelevanceFieldEnum["type"] = "type";
    AgreementsOrderByRelevanceFieldEnum["content"] = "content";
    AgreementsOrderByRelevanceFieldEnum["excerpt"] = "excerpt";
    AgreementsOrderByRelevanceFieldEnum["image"] = "image";
    AgreementsOrderByRelevanceFieldEnum["mediamanager"] = "mediamanager";
    AgreementsOrderByRelevanceFieldEnum["reference_id"] = "reference_id";
    AgreementsOrderByRelevanceFieldEnum["shop_id"] = "shop_id";
    AgreementsOrderByRelevanceFieldEnum["user_id"] = "user_id";
})(AgreementsOrderByRelevanceFieldEnum = exports.AgreementsOrderByRelevanceFieldEnum || (exports.AgreementsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(AgreementsOrderByRelevanceFieldEnum, {
    name: "AgreementsOrderByRelevanceFieldEnum",
    description: undefined,
});
