"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateFullfillmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateFullfillmentsArgs_1 = require("./args/AggregateFullfillmentsArgs");
const Fullfillments_1 = require("../../../models/Fullfillments");
const AggregateFullfillments_1 = require("../../outputs/AggregateFullfillments");
const helpers_1 = require("../../../helpers");
let AggregateFullfillmentsResolver = class AggregateFullfillmentsResolver {
    async aggregateFullfillments(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateFullfillments_1.AggregateFullfillments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateFullfillmentsArgs_1.AggregateFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateFullfillmentsResolver.prototype, "aggregateFullfillments", null);
AggregateFullfillmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Fullfillments_1.Fullfillments)
], AggregateFullfillmentsResolver);
exports.AggregateFullfillmentsResolver = AggregateFullfillmentsResolver;
