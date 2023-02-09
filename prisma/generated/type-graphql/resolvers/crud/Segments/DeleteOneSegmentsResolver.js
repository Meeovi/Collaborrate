"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSegmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneSegmentsArgs_1 = require("./args/DeleteOneSegmentsArgs");
const Segments_1 = require("../../../models/Segments");
const helpers_1 = require("../../../helpers");
let DeleteOneSegmentsResolver = class DeleteOneSegmentsResolver {
    async deleteOneSegments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Segments_1.Segments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSegmentsArgs_1.DeleteOneSegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneSegmentsResolver.prototype, "deleteOneSegments", null);
DeleteOneSegmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Segments_1.Segments)
], DeleteOneSegmentsResolver);
exports.DeleteOneSegmentsResolver = DeleteOneSegmentsResolver;
