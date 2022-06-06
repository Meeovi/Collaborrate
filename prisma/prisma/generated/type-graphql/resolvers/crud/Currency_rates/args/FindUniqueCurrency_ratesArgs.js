"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCurrency_ratesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_ratesWhereUniqueInput_1 = require("../../../inputs/Currency_ratesWhereUniqueInput");
let FindUniqueCurrency_ratesArgs = class FindUniqueCurrency_ratesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesWhereUniqueInput_1.Currency_ratesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_ratesWhereUniqueInput_1.Currency_ratesWhereUniqueInput)
], FindUniqueCurrency_ratesArgs.prototype, "where", void 0);
FindUniqueCurrency_ratesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCurrency_ratesArgs);
exports.FindUniqueCurrency_ratesArgs = FindUniqueCurrency_ratesArgs;
