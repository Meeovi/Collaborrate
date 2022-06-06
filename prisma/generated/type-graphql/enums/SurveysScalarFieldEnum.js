"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveysScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SurveysScalarFieldEnum;
(function (SurveysScalarFieldEnum) {
    SurveysScalarFieldEnum["id"] = "id";
    SurveysScalarFieldEnum["created_at"] = "created_at";
    SurveysScalarFieldEnum["name"] = "name";
    SurveysScalarFieldEnum["assigned_to"] = "assigned_to";
    SurveysScalarFieldEnum["status"] = "status";
    SurveysScalarFieldEnum["description"] = "description";
    SurveysScalarFieldEnum["question"] = "question";
    SurveysScalarFieldEnum["answer"] = "answer";
    SurveysScalarFieldEnum["submit_text"] = "submit_text";
    SurveysScalarFieldEnum["satisfied_text"] = "satisfied_text";
    SurveysScalarFieldEnum["neither_text"] = "neither_text";
    SurveysScalarFieldEnum["dissatisfied_text"] = "dissatisfied_text";
})(SurveysScalarFieldEnum = exports.SurveysScalarFieldEnum || (exports.SurveysScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SurveysScalarFieldEnum, {
    name: "SurveysScalarFieldEnum",
    description: undefined,
});
