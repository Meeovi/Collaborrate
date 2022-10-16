"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCurrency_symbolsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_symbolsWhereUniqueInput_1 = require("../../../inputs/Currency_symbolsWhereUniqueInput");
let FindUniqueCurrency_symbolsArgs = class FindUniqueCurrency_symbolsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsWhereUniqueInput_1.Currency_symbolsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_symbolsWhereUniqueInput_1.Currency_symbolsWhereUniqueInput)
], FindUniqueCurrency_symbolsArgs.prototype, "where", void 0);
FindUniqueCurrency_symbolsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCurrency_symbolsArgs);
exports.FindUniqueCurrency_symbolsArgs = FindUniqueCurrency_symbolsArgs;
