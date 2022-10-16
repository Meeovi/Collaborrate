"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCurrency_ratesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_ratesCreateInput_1 = require("../../../inputs/Currency_ratesCreateInput");
const Currency_ratesUpdateInput_1 = require("../../../inputs/Currency_ratesUpdateInput");
const Currency_ratesWhereUniqueInput_1 = require("../../../inputs/Currency_ratesWhereUniqueInput");
let UpsertOneCurrency_ratesArgs = class UpsertOneCurrency_ratesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesWhereUniqueInput_1.Currency_ratesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_ratesWhereUniqueInput_1.Currency_ratesWhereUniqueInput)
], UpsertOneCurrency_ratesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesCreateInput_1.Currency_ratesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_ratesCreateInput_1.Currency_ratesCreateInput)
], UpsertOneCurrency_ratesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesUpdateInput_1.Currency_ratesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_ratesUpdateInput_1.Currency_ratesUpdateInput)
], UpsertOneCurrency_ratesArgs.prototype, "update", void 0);
UpsertOneCurrency_ratesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCurrency_ratesArgs);
exports.UpsertOneCurrency_ratesArgs = UpsertOneCurrency_ratesArgs;
