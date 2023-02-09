"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCollectionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCollectionsArgs_1 = require("./args/AggregateCollectionsArgs");
const Collections_1 = require("../../../models/Collections");
const AggregateCollections_1 = require("../../outputs/AggregateCollections");
const helpers_1 = require("../../../helpers");
let AggregateCollectionsResolver = class AggregateCollectionsResolver {
    async aggregateCollections(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCollections_1.AggregateCollections, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCollectionsArgs_1.AggregateCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCollectionsResolver.prototype, "aggregateCollections", null);
AggregateCollectionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Collections_1.Collections)
], AggregateCollectionsResolver);
exports.AggregateCollectionsResolver = AggregateCollectionsResolver;
