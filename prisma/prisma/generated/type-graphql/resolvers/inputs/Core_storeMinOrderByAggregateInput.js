"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core_storeMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Core_storeMinOrderByAggregateInput = class Core_storeMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeMinOrderByAggregateInput.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeMinOrderByAggregateInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeMinOrderByAggregateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeMinOrderByAggregateInput.prototype, "environment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeMinOrderByAggregateInput.prototype, "tag", void 0);
Core_storeMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Core_storeMinOrderByAggregateInput", {
        isAbstract: true
    })
], Core_storeMinOrderByAggregateInput);
exports.Core_storeMinOrderByAggregateInput = Core_storeMinOrderByAggregateInput;
