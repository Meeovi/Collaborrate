"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TemplatesAvgOrderByAggregateInput = class TemplatesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesAvgOrderByAggregateInput.prototype, "id", void 0);
TemplatesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TemplatesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], TemplatesAvgOrderByAggregateInput);
exports.TemplatesAvgOrderByAggregateInput = TemplatesAvgOrderByAggregateInput;
