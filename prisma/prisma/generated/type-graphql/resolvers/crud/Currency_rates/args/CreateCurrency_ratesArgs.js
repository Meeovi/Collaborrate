"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCurrency_ratesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_ratesCreateInput_1 = require("../../../inputs/Currency_ratesCreateInput");
let CreateCurrency_ratesArgs = class CreateCurrency_ratesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesCreateInput_1.Currency_ratesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_ratesCreateInput_1.Currency_ratesCreateInput)
], CreateCurrency_ratesArgs.prototype, "data", void 0);
CreateCurrency_ratesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateCurrency_ratesArgs);
exports.CreateCurrency_ratesArgs = CreateCurrency_ratesArgs;
