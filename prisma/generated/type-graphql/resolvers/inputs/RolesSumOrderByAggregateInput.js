"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RolesSumOrderByAggregateInput = class RolesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesSumOrderByAggregateInput.prototype, "id", void 0);
RolesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RolesSumOrderByAggregateInput", {
        isAbstract: true
    })
], RolesSumOrderByAggregateInput);
exports.RolesSumOrderByAggregateInput = RolesSumOrderByAggregateInput;
