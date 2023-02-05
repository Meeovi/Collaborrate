"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySegmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManySegmentsArgs_1 = require("./args/UpdateManySegmentsArgs");
const Segments_1 = require("../../../models/Segments");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManySegmentsResolver = class UpdateManySegmentsResolver {
    async updateManySegments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySegmentsArgs_1.UpdateManySegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManySegmentsResolver.prototype, "updateManySegments", null);
UpdateManySegmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Segments_1.Segments)
], UpdateManySegmentsResolver);
exports.UpdateManySegmentsResolver = UpdateManySegmentsResolver;
