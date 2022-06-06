"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveysAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SurveysAvgOrderByAggregateInput = class SurveysAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SurveysAvgOrderByAggregateInput.prototype, "id", void 0);
SurveysAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SurveysAvgOrderByAggregateInput", {
        isAbstract: true
    })
], SurveysAvgOrderByAggregateInput);
exports.SurveysAvgOrderByAggregateInput = SurveysAvgOrderByAggregateInput;
