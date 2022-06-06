"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbolsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Currency_symbolsWhereUniqueInput = class Currency_symbolsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsWhereUniqueInput.prototype, "symbol", void 0);
Currency_symbolsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_symbolsWhereUniqueInput", {
        isAbstract: true
    })
], Currency_symbolsWhereUniqueInput);
exports.Currency_symbolsWhereUniqueInput = Currency_symbolsWhereUniqueInput;
