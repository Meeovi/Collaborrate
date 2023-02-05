"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTagsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTagsArgs_1 = require("./args/AggregateTagsArgs");
const Tags_1 = require("../../../models/Tags");
const AggregateTags_1 = require("../../outputs/AggregateTags");
const helpers_1 = require("../../../helpers");
let AggregateTagsResolver = class AggregateTagsResolver {
    async aggregateTags(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTags_1.AggregateTags, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTagsArgs_1.AggregateTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTagsResolver.prototype, "aggregateTags", null);
AggregateTagsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tags_1.Tags)
], AggregateTagsResolver);
exports.AggregateTagsResolver = AggregateTagsResolver;
