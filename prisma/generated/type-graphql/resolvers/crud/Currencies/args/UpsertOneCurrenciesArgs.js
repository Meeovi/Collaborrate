"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCurrenciesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrenciesCreateInput_1 = require("../../../inputs/CurrenciesCreateInput");
const CurrenciesUpdateInput_1 = require("../../../inputs/CurrenciesUpdateInput");
const CurrenciesWhereUniqueInput_1 = require("../../../inputs/CurrenciesWhereUniqueInput");
let UpsertOneCurrenciesArgs = class UpsertOneCurrenciesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesWhereUniqueInput_1.CurrenciesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrenciesWhereUniqueInput_1.CurrenciesWhereUniqueInput)
], UpsertOneCurrenciesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesCreateInput_1.CurrenciesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrenciesCreateInput_1.CurrenciesCreateInput)
], UpsertOneCurrenciesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesUpdateInput_1.CurrenciesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrenciesUpdateInput_1.CurrenciesUpdateInput)
], UpsertOneCurrenciesArgs.prototype, "update", void 0);
UpsertOneCurrenciesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCurrenciesArgs);
exports.UpsertOneCurrenciesArgs = UpsertOneCurrenciesArgs;
