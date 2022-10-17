"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosOrderByRelevanceFieldEnum_1 = require("../../enums/Credit_memosOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let Credit_memosOrderByRelevanceInput = class Credit_memosOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosOrderByRelevanceFieldEnum_1.Credit_memosOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByRelevanceInput.prototype, "search", void 0);
Credit_memosOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosOrderByRelevanceInput", {
        isAbstract: true
    })
], Credit_memosOrderByRelevanceInput);
exports.Credit_memosOrderByRelevanceInput = Credit_memosOrderByRelevanceInput;
