"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core_storeCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Core_storeCountOrderByAggregateInput = class Core_storeCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeCountOrderByAggregateInput.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeCountOrderByAggregateInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeCountOrderByAggregateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeCountOrderByAggregateInput.prototype, "environment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeCountOrderByAggregateInput.prototype, "tag", void 0);
Core_storeCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Core_storeCountOrderByAggregateInput", {
        isAbstract: true
    })
], Core_storeCountOrderByAggregateInput);
exports.Core_storeCountOrderByAggregateInput = Core_storeCountOrderByAggregateInput;
