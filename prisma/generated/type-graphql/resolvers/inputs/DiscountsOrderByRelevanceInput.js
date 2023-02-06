"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DiscountsOrderByRelevanceFieldEnum_1 = require("../../enums/DiscountsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let DiscountsOrderByRelevanceInput = class DiscountsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DiscountsOrderByRelevanceFieldEnum_1.DiscountsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], DiscountsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsOrderByRelevanceInput.prototype, "search", void 0);
DiscountsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DiscountsOrderByRelevanceInput", {
        isAbstract: true
    })
], DiscountsOrderByRelevanceInput);
exports.DiscountsOrderByRelevanceInput = DiscountsOrderByRelevanceInput;
