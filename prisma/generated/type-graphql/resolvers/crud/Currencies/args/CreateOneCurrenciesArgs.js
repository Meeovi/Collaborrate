"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCurrenciesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrenciesCreateInput_1 = require("../../../inputs/CurrenciesCreateInput");
let CreateOneCurrenciesArgs = class CreateOneCurrenciesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesCreateInput_1.CurrenciesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrenciesCreateInput_1.CurrenciesCreateInput)
], CreateOneCurrenciesArgs.prototype, "data", void 0);
CreateOneCurrenciesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCurrenciesArgs);
exports.CreateOneCurrenciesArgs = CreateOneCurrenciesArgs;
