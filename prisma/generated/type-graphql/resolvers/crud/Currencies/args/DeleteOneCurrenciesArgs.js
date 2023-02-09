"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCurrenciesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrenciesWhereUniqueInput_1 = require("../../../inputs/CurrenciesWhereUniqueInput");
let DeleteOneCurrenciesArgs = class DeleteOneCurrenciesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesWhereUniqueInput_1.CurrenciesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrenciesWhereUniqueInput_1.CurrenciesWhereUniqueInput)
], DeleteOneCurrenciesArgs.prototype, "where", void 0);
DeleteOneCurrenciesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneCurrenciesArgs);
exports.DeleteOneCurrenciesArgs = DeleteOneCurrenciesArgs;
