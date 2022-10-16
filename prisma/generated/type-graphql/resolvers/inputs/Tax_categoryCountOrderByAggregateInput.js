"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_categoryCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Tax_categoryCountOrderByAggregateInput = class Tax_categoryCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categoryCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categoryCountOrderByAggregateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categoryCountOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categoryCountOrderByAggregateInput.prototype, "default", void 0);
Tax_categoryCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_categoryCountOrderByAggregateInput", {
        isAbstract: true
    })
], Tax_categoryCountOrderByAggregateInput);
exports.Tax_categoryCountOrderByAggregateInput = Tax_categoryCountOrderByAggregateInput;
