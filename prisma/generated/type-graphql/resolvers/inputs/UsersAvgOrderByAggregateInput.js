"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let UsersAvgOrderByAggregateInput = class UsersAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsersAvgOrderByAggregateInput.prototype, "id", void 0);
UsersAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersAvgOrderByAggregateInput", {
        isAbstract: true
    })
], UsersAvgOrderByAggregateInput);
exports.UsersAvgOrderByAggregateInput = UsersAvgOrderByAggregateInput;
