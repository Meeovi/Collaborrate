"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCurrency_symbolsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_symbolsCreateInput_1 = require("../../../inputs/Currency_symbolsCreateInput");
let CreateCurrency_symbolsArgs = class CreateCurrency_symbolsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsCreateInput_1.Currency_symbolsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_symbolsCreateInput_1.Currency_symbolsCreateInput)
], CreateCurrency_symbolsArgs.prototype, "data", void 0);
CreateCurrency_symbolsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateCurrency_symbolsArgs);
exports.CreateCurrency_symbolsArgs = CreateCurrency_symbolsArgs;
