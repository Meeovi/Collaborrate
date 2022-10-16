"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCurrency_ratesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_ratesCreateInput_1 = require("../../../inputs/Currency_ratesCreateInput");
let CreateOneCurrency_ratesArgs = class CreateOneCurrency_ratesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesCreateInput_1.Currency_ratesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_ratesCreateInput_1.Currency_ratesCreateInput)
], CreateOneCurrency_ratesArgs.prototype, "data", void 0);
CreateOneCurrency_ratesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCurrency_ratesArgs);
exports.CreateOneCurrency_ratesArgs = CreateOneCurrency_ratesArgs;
