"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneQuotesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesCreateInput_1 = require("../../../inputs/QuotesCreateInput");
const QuotesUpdateInput_1 = require("../../../inputs/QuotesUpdateInput");
const QuotesWhereUniqueInput_1 = require("../../../inputs/QuotesWhereUniqueInput");
let UpsertOneQuotesArgs = class UpsertOneQuotesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereUniqueInput_1.QuotesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesWhereUniqueInput_1.QuotesWhereUniqueInput)
], UpsertOneQuotesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateInput_1.QuotesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesCreateInput_1.QuotesCreateInput)
], UpsertOneQuotesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesUpdateInput_1.QuotesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesUpdateInput_1.QuotesUpdateInput)
], UpsertOneQuotesArgs.prototype, "update", void 0);
UpsertOneQuotesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneQuotesArgs);
exports.UpsertOneQuotesArgs = UpsertOneQuotesArgs;
