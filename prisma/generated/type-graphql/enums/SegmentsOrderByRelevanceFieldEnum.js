"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SegmentsOrderByRelevanceFieldEnum;
(function (SegmentsOrderByRelevanceFieldEnum) {
    SegmentsOrderByRelevanceFieldEnum["name"] = "name";
    SegmentsOrderByRelevanceFieldEnum["description"] = "description";
    SegmentsOrderByRelevanceFieldEnum["website"] = "website";
    SegmentsOrderByRelevanceFieldEnum["status"] = "status";
    SegmentsOrderByRelevanceFieldEnum["apply_to"] = "apply_to";
    SegmentsOrderByRelevanceFieldEnum["customers"] = "customers";
})(SegmentsOrderByRelevanceFieldEnum = exports.SegmentsOrderByRelevanceFieldEnum || (exports.SegmentsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(SegmentsOrderByRelevanceFieldEnum, {
    name: "SegmentsOrderByRelevanceFieldEnum",
    description: undefined,
});
