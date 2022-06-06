"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrency_symbolsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_symbolsUpdateInput_1 = require("../../../inputs/Currency_symbolsUpdateInput");
const Currency_symbolsWhereUniqueInput_1 = require("../../../inputs/Currency_symbolsWhereUniqueInput");
let UpdateCurrency_symbolsArgs = class UpdateCurrency_symbolsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsUpdateInput_1.Currency_symbolsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_symbolsUpdateInput_1.Currency_symbolsUpdateInput)
], UpdateCurrency_symbolsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsWhereUniqueInput_1.Currency_symbolsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_symbolsWhereUniqueInput_1.Currency_symbolsWhereUniqueInput)
], UpdateCurrency_symbolsArgs.prototype, "where", void 0);
UpdateCurrency_symbolsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateCurrency_symbolsArgs);
exports.UpdateCurrency_symbolsArgs = UpdateCurrency_symbolsArgs;
