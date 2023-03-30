"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAgreementsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateAgreementsArgs_1 = require("./args/AggregateAgreementsArgs");
const Agreements_1 = require("../../../models/Agreements");
const AggregateAgreements_1 = require("../../outputs/AggregateAgreements");
const helpers_1 = require("../../../helpers");
let AggregateAgreementsResolver = class AggregateAgreementsResolver {
    async aggregateAgreements(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAgreements_1.AggregateAgreements, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAgreementsArgs_1.AggregateAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateAgreementsResolver.prototype, "aggregateAgreements", null);
AggregateAgreementsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Agreements_1.Agreements)
], AggregateAgreementsResolver);
exports.AggregateAgreementsResolver = AggregateAgreementsResolver;
