"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePartnersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregatePartnersArgs_1 = require("./args/AggregatePartnersArgs");
const Partners_1 = require("../../../models/Partners");
const AggregatePartners_1 = require("../../outputs/AggregatePartners");
const helpers_1 = require("../../../helpers");
let AggregatePartnersResolver = class AggregatePartnersResolver {
    async aggregatePartners(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePartners_1.AggregatePartners, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePartnersArgs_1.AggregatePartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregatePartnersResolver.prototype, "aggregatePartners", null);
AggregatePartnersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Partners_1.Partners)
], AggregatePartnersResolver);
exports.AggregatePartnersResolver = AggregatePartnersResolver;
