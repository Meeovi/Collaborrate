"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvoicesOrderByRelevanceFieldEnum_1 = require("../../enums/InvoicesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let InvoicesOrderByRelevanceInput = class InvoicesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InvoicesOrderByRelevanceFieldEnum_1.InvoicesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], InvoicesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesOrderByRelevanceInput.prototype, "search", void 0);
InvoicesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InvoicesOrderByRelevanceInput", {
        isAbstract: true
    })
], InvoicesOrderByRelevanceInput);
exports.InvoicesOrderByRelevanceInput = InvoicesOrderByRelevanceInput;
