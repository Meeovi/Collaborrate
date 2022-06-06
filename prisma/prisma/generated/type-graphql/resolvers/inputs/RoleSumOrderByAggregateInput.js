"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RoleSumOrderByAggregateInput = class RoleSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleSumOrderByAggregateInput.prototype, "id", void 0);
RoleSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleSumOrderByAggregateInput", {
        isAbstract: true
    })
], RoleSumOrderByAggregateInput);
exports.RoleSumOrderByAggregateInput = RoleSumOrderByAggregateInput;
