"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCurrency_ratesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_ratesWhereUniqueInput_1 = require("../../../inputs/Currency_ratesWhereUniqueInput");
let DeleteCurrency_ratesArgs = class DeleteCurrency_ratesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesWhereUniqueInput_1.Currency_ratesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_ratesWhereUniqueInput_1.Currency_ratesWhereUniqueInput)
], DeleteCurrency_ratesArgs.prototype, "where", void 0);
DeleteCurrency_ratesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteCurrency_ratesArgs);
exports.DeleteCurrency_ratesArgs = DeleteCurrency_ratesArgs;
