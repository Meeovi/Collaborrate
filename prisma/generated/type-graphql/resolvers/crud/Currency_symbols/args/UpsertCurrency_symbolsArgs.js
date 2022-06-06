"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCurrency_symbolsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_symbolsCreateInput_1 = require("../../../inputs/Currency_symbolsCreateInput");
const Currency_symbolsUpdateInput_1 = require("../../../inputs/Currency_symbolsUpdateInput");
const Currency_symbolsWhereUniqueInput_1 = require("../../../inputs/Currency_symbolsWhereUniqueInput");
let UpsertCurrency_symbolsArgs = class UpsertCurrency_symbolsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsWhereUniqueInput_1.Currency_symbolsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_symbolsWhereUniqueInput_1.Currency_symbolsWhereUniqueInput)
], UpsertCurrency_symbolsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsCreateInput_1.Currency_symbolsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_symbolsCreateInput_1.Currency_symbolsCreateInput)
], UpsertCurrency_symbolsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsUpdateInput_1.Currency_symbolsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_symbolsUpdateInput_1.Currency_symbolsUpdateInput)
], UpsertCurrency_symbolsArgs.prototype, "update", void 0);
UpsertCurrency_symbolsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertCurrency_symbolsArgs);
exports.UpsertCurrency_symbolsArgs = UpsertCurrency_symbolsArgs;
