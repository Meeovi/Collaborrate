"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_categoryMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Tax_categoryMaxOrderByAggregateInput = class Tax_categoryMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categoryMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categoryMaxOrderByAggregateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categoryMaxOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categoryMaxOrderByAggregateInput.prototype, "default", void 0);
Tax_categoryMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_categoryMaxOrderByAggregateInput", {
        isAbstract: true
    })
], Tax_categoryMaxOrderByAggregateInput);
exports.Tax_categoryMaxOrderByAggregateInput = Tax_categoryMaxOrderByAggregateInput;
