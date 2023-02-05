"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCurrenciesOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrenciesWhereUniqueInput_1 = require("../../../inputs/CurrenciesWhereUniqueInput");
let FindUniqueCurrenciesOrThrowArgs = class FindUniqueCurrenciesOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesWhereUniqueInput_1.CurrenciesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrenciesWhereUniqueInput_1.CurrenciesWhereUniqueInput)
], FindUniqueCurrenciesOrThrowArgs.prototype, "where", void 0);
FindUniqueCurrenciesOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCurrenciesOrThrowArgs);
exports.FindUniqueCurrenciesOrThrowArgs = FindUniqueCurrenciesOrThrowArgs;
