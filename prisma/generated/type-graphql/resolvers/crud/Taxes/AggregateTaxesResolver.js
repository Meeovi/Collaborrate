"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTaxesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTaxesArgs_1 = require("./args/AggregateTaxesArgs");
const Taxes_1 = require("../../../models/Taxes");
const AggregateTaxes_1 = require("../../outputs/AggregateTaxes");
const helpers_1 = require("../../../helpers");
let AggregateTaxesResolver = class AggregateTaxesResolver {
    async aggregateTaxes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTaxes_1.AggregateTaxes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTaxesArgs_1.AggregateTaxesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTaxesResolver.prototype, "aggregateTaxes", null);
AggregateTaxesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Taxes_1.Taxes)
], AggregateTaxesResolver);
exports.AggregateTaxesResolver = AggregateTaxesResolver;
