"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveysSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let SurveysSumAggregate = class SurveysSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], SurveysSumAggregate.prototype, "id", void 0);
SurveysSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SurveysSumAggregate", {
        isAbstract: true
    })
], SurveysSumAggregate);
exports.SurveysSumAggregate = SurveysSumAggregate;
