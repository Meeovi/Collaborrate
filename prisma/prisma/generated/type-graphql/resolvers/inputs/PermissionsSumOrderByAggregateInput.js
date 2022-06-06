"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PermissionsSumOrderByAggregateInput = class PermissionsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsSumOrderByAggregateInput.prototype, "id", void 0);
PermissionsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PermissionsSumOrderByAggregateInput", {
        isAbstract: true
    })
], PermissionsSumOrderByAggregateInput);
exports.PermissionsSumOrderByAggregateInput = PermissionsSumOrderByAggregateInput;
