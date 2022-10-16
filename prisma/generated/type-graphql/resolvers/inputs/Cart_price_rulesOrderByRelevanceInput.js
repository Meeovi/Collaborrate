"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart_price_rulesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cart_price_rulesOrderByRelevanceFieldEnum_1 = require("../../enums/Cart_price_rulesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let Cart_price_rulesOrderByRelevanceInput = class Cart_price_rulesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Cart_price_rulesOrderByRelevanceFieldEnum_1.Cart_price_rulesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Cart_price_rulesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Cart_price_rulesOrderByRelevanceInput.prototype, "search", void 0);
Cart_price_rulesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Cart_price_rulesOrderByRelevanceInput", {
        isAbstract: true
    })
], Cart_price_rulesOrderByRelevanceInput);
exports.Cart_price_rulesOrderByRelevanceInput = Cart_price_rulesOrderByRelevanceInput;
