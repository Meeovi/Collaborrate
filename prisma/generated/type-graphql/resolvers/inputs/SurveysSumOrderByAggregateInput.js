"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveysSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SurveysSumOrderByAggregateInput = class SurveysSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysSumOrderByAggregateInput.prototype, "id", void 0);
SurveysSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SurveysSumOrderByAggregateInput", {
        isAbstract: true
    })
], SurveysSumOrderByAggregateInput);
exports.SurveysSumOrderByAggregateInput = SurveysSumOrderByAggregateInput;
