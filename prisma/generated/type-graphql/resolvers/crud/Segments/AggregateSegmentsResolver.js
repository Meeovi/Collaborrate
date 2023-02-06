"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSegmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateSegmentsArgs_1 = require("./args/AggregateSegmentsArgs");
const Segments_1 = require("../../../models/Segments");
const AggregateSegments_1 = require("../../outputs/AggregateSegments");
const helpers_1 = require("../../../helpers");
let AggregateSegmentsResolver = class AggregateSegmentsResolver {
    async aggregateSegments(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSegments_1.AggregateSegments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSegmentsArgs_1.AggregateSegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSegmentsResolver.prototype, "aggregateSegments", null);
AggregateSegmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Segments_1.Segments)
], AggregateSegmentsResolver);
exports.AggregateSegmentsResolver = AggregateSegmentsResolver;
