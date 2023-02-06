"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TemplatesSumOrderByAggregateInput = class TemplatesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesSumOrderByAggregateInput.prototype, "id", void 0);
TemplatesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TemplatesSumOrderByAggregateInput", {
        isAbstract: true
    })
], TemplatesSumOrderByAggregateInput);
exports.TemplatesSumOrderByAggregateInput = TemplatesSumOrderByAggregateInput;
