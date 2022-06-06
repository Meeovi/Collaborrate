"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCurrency_ratesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_ratesCreateInput_1 = require("../../../inputs/Currency_ratesCreateInput");
const Currency_ratesUpdateInput_1 = require("../../../inputs/Currency_ratesUpdateInput");
const Currency_ratesWhereUniqueInput_1 = require("../../../inputs/Currency_ratesWhereUniqueInput");
let UpsertCurrency_ratesArgs = class UpsertCurrency_ratesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesWhereUniqueInput_1.Currency_ratesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_ratesWhereUniqueInput_1.Currency_ratesWhereUniqueInput)
], UpsertCurrency_ratesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesCreateInput_1.Currency_ratesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_ratesCreateInput_1.Currency_ratesCreateInput)
], UpsertCurrency_ratesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesUpdateInput_1.Currency_ratesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_ratesUpdateInput_1.Currency_ratesUpdateInput)
], UpsertCurrency_ratesArgs.prototype, "update", void 0);
UpsertCurrency_ratesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertCurrency_ratesArgs);
exports.UpsertCurrency_ratesArgs = UpsertCurrency_ratesArgs;
