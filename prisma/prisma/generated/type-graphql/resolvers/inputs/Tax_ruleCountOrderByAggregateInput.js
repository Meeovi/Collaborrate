"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Tax_ruleCountOrderByAggregateInput = class Tax_ruleCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleCountOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleCountOrderByAggregateInput.prototype, "tax_rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleCountOrderByAggregateInput.prototype, "prod_id", void 0);
Tax_ruleCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleCountOrderByAggregateInput", {
        isAbstract: true
    })
], Tax_ruleCountOrderByAggregateInput);
exports.Tax_ruleCountOrderByAggregateInput = Tax_ruleCountOrderByAggregateInput;
