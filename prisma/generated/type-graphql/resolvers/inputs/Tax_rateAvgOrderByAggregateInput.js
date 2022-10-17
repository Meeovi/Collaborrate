"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Tax_rateAvgOrderByAggregateInput = class Tax_rateAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateAvgOrderByAggregateInput.prototype, "prod_id", void 0);
Tax_rateAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_rateAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Tax_rateAvgOrderByAggregateInput);
exports.Tax_rateAvgOrderByAggregateInput = Tax_rateAvgOrderByAggregateInput;
