"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveysOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SurveysOrderByRelevanceFieldEnum;
(function (SurveysOrderByRelevanceFieldEnum) {
    SurveysOrderByRelevanceFieldEnum["name"] = "name";
    SurveysOrderByRelevanceFieldEnum["assigned_to"] = "assigned_to";
    SurveysOrderByRelevanceFieldEnum["status"] = "status";
    SurveysOrderByRelevanceFieldEnum["description"] = "description";
    SurveysOrderByRelevanceFieldEnum["question"] = "question";
    SurveysOrderByRelevanceFieldEnum["answer"] = "answer";
    SurveysOrderByRelevanceFieldEnum["submit_text"] = "submit_text";
    SurveysOrderByRelevanceFieldEnum["satisfied_text"] = "satisfied_text";
    SurveysOrderByRelevanceFieldEnum["neither_text"] = "neither_text";
    SurveysOrderByRelevanceFieldEnum["dissatisfied_text"] = "dissatisfied_text";
})(SurveysOrderByRelevanceFieldEnum = exports.SurveysOrderByRelevanceFieldEnum || (exports.SurveysOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(SurveysOrderByRelevanceFieldEnum, {
    name: "SurveysOrderByRelevanceFieldEnum",
    description: undefined,
});
