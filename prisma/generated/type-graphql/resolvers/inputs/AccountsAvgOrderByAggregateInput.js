"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AccountsAvgOrderByAggregateInput = class AccountsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsAvgOrderByAggregateInput.prototype, "id", void 0);
AccountsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], AccountsAvgOrderByAggregateInput);
exports.AccountsAvgOrderByAggregateInput = AccountsAvgOrderByAggregateInput;
