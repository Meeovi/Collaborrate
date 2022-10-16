"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_categoryAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Tax_categoryAvgOrderByAggregateInput = class Tax_categoryAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categoryAvgOrderByAggregateInput.prototype, "id", void 0);
Tax_categoryAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_categoryAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Tax_categoryAvgOrderByAggregateInput);
exports.Tax_categoryAvgOrderByAggregateInput = Tax_categoryAvgOrderByAggregateInput;
