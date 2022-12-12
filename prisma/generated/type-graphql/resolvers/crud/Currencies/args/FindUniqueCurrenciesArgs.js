"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCurrenciesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrenciesWhereUniqueInput_1 = require("../../../inputs/CurrenciesWhereUniqueInput");
let FindUniqueCurrenciesArgs = class FindUniqueCurrenciesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesWhereUniqueInput_1.CurrenciesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrenciesWhereUniqueInput_1.CurrenciesWhereUniqueInput)
], FindUniqueCurrenciesArgs.prototype, "where", void 0);
FindUniqueCurrenciesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCurrenciesArgs);
exports.FindUniqueCurrenciesArgs = FindUniqueCurrenciesArgs;
