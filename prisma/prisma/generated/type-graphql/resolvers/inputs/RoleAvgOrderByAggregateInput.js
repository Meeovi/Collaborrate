"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RoleAvgOrderByAggregateInput = class RoleAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleAvgOrderByAggregateInput.prototype, "id", void 0);
RoleAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleAvgOrderByAggregateInput", {
        isAbstract: true
    })
], RoleAvgOrderByAggregateInput);
exports.RoleAvgOrderByAggregateInput = RoleAvgOrderByAggregateInput;
