"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCurrency_ratesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_ratesOrderByWithRelationInput_1 = require("../../../inputs/Currency_ratesOrderByWithRelationInput");
const Currency_ratesWhereInput_1 = require("../../../inputs/Currency_ratesWhereInput");
const Currency_ratesWhereUniqueInput_1 = require("../../../inputs/Currency_ratesWhereUniqueInput");
let AggregateCurrency_ratesArgs = class AggregateCurrency_ratesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesWhereInput_1.Currency_ratesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesWhereInput_1.Currency_ratesWhereInput)
], AggregateCurrency_ratesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_ratesOrderByWithRelationInput_1.Currency_ratesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateCurrency_ratesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesWhereUniqueInput_1.Currency_ratesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesWhereUniqueInput_1.Currency_ratesWhereUniqueInput)
], AggregateCurrency_ratesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCurrency_ratesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCurrency_ratesArgs.prototype, "skip", void 0);
AggregateCurrency_ratesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateCurrency_ratesArgs);
exports.AggregateCurrency_ratesArgs = AggregateCurrency_ratesArgs;
