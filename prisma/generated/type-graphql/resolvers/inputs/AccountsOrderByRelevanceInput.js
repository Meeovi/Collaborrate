"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountsOrderByRelevanceFieldEnum_1 = require("../../enums/AccountsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let AccountsOrderByRelevanceInput = class AccountsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountsOrderByRelevanceFieldEnum_1.AccountsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], AccountsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountsOrderByRelevanceInput.prototype, "search", void 0);
AccountsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountsOrderByRelevanceInput", {
        isAbstract: true
    })
], AccountsOrderByRelevanceInput);
exports.AccountsOrderByRelevanceInput = AccountsOrderByRelevanceInput;
