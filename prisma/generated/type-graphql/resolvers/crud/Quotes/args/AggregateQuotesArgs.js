"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateQuotesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesOrderByWithRelationInput_1 = require("../../../inputs/QuotesOrderByWithRelationInput");
const QuotesWhereInput_1 = require("../../../inputs/QuotesWhereInput");
const QuotesWhereUniqueInput_1 = require("../../../inputs/QuotesWhereUniqueInput");
let AggregateQuotesArgs = class AggregateQuotesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereInput_1.QuotesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesWhereInput_1.QuotesWhereInput)
], AggregateQuotesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesOrderByWithRelationInput_1.QuotesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateQuotesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereUniqueInput_1.QuotesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesWhereUniqueInput_1.QuotesWhereUniqueInput)
], AggregateQuotesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateQuotesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateQuotesArgs.prototype, "skip", void 0);
AggregateQuotesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateQuotesArgs);
exports.AggregateQuotesArgs = AggregateQuotesArgs;
