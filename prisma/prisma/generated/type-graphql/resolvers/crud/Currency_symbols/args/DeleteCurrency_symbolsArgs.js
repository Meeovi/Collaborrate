"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCurrency_symbolsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_symbolsWhereUniqueInput_1 = require("../../../inputs/Currency_symbolsWhereUniqueInput");
let DeleteCurrency_symbolsArgs = class DeleteCurrency_symbolsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsWhereUniqueInput_1.Currency_symbolsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_symbolsWhereUniqueInput_1.Currency_symbolsWhereUniqueInput)
], DeleteCurrency_symbolsArgs.prototype, "where", void 0);
DeleteCurrency_symbolsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteCurrency_symbolsArgs);
exports.DeleteCurrency_symbolsArgs = DeleteCurrency_symbolsArgs;
