"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCurrency_symbolsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_symbolsCreateInput_1 = require("../../../inputs/Currency_symbolsCreateInput");
let CreateOneCurrency_symbolsArgs = class CreateOneCurrency_symbolsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsCreateInput_1.Currency_symbolsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_symbolsCreateInput_1.Currency_symbolsCreateInput)
], CreateOneCurrency_symbolsArgs.prototype, "data", void 0);
CreateOneCurrency_symbolsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCurrency_symbolsArgs);
exports.CreateOneCurrency_symbolsArgs = CreateOneCurrency_symbolsArgs;
