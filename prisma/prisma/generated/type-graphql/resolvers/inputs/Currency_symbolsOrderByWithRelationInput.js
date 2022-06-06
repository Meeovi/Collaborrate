"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbolsOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Currency_symbolsOrderByWithRelationInput = class Currency_symbolsOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsOrderByWithRelationInput.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsOrderByWithRelationInput.prototype, "use_standard", void 0);
Currency_symbolsOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_symbolsOrderByWithRelationInput", {
        isAbstract: true
    })
], Currency_symbolsOrderByWithRelationInput);
exports.Currency_symbolsOrderByWithRelationInput = Currency_symbolsOrderByWithRelationInput;
