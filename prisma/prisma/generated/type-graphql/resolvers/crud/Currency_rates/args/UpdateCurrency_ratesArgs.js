"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrency_ratesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_ratesUpdateInput_1 = require("../../../inputs/Currency_ratesUpdateInput");
const Currency_ratesWhereUniqueInput_1 = require("../../../inputs/Currency_ratesWhereUniqueInput");
let UpdateCurrency_ratesArgs = class UpdateCurrency_ratesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesUpdateInput_1.Currency_ratesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_ratesUpdateInput_1.Currency_ratesUpdateInput)
], UpdateCurrency_ratesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesWhereUniqueInput_1.Currency_ratesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_ratesWhereUniqueInput_1.Currency_ratesWhereUniqueInput)
], UpdateCurrency_ratesArgs.prototype, "where", void 0);
UpdateCurrency_ratesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateCurrency_ratesArgs);
exports.UpdateCurrency_ratesArgs = UpdateCurrency_ratesArgs;
