"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const TransactionsOrderByRelevanceFieldEnum_1 = require("../../enums/TransactionsOrderByRelevanceFieldEnum");
let TransactionsOrderByRelevanceInput = class TransactionsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsOrderByRelevanceFieldEnum_1.TransactionsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByRelevanceInput.prototype, "search", void 0);
TransactionsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsOrderByRelevanceInput", {
        isAbstract: true
    })
], TransactionsOrderByRelevanceInput);
exports.TransactionsOrderByRelevanceInput = TransactionsOrderByRelevanceInput;
