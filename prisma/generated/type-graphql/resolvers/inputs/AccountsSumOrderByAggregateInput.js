"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AccountsSumOrderByAggregateInput = class AccountsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountsSumOrderByAggregateInput.prototype, "id", void 0);
AccountsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountsSumOrderByAggregateInput", {
        isAbstract: true
    })
], AccountsSumOrderByAggregateInput);
exports.AccountsSumOrderByAggregateInput = AccountsSumOrderByAggregateInput;
