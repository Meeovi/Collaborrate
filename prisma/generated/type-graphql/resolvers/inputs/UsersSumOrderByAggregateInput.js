"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let UsersSumOrderByAggregateInput = class UsersSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersSumOrderByAggregateInput.prototype, "id", void 0);
UsersSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersSumOrderByAggregateInput", {
        isAbstract: true
    })
], UsersSumOrderByAggregateInput);
exports.UsersSumOrderByAggregateInput = UsersSumOrderByAggregateInput;
