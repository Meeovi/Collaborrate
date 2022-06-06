"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSegmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteSegmentsArgs_1 = require("./args/DeleteSegmentsArgs");
const Segments_1 = require("../../../models/Segments");
const helpers_1 = require("../../../helpers");
let DeleteSegmentsResolver = class DeleteSegmentsResolver {
    async deleteSegments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteSegmentsArgs_1.DeleteSegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteSegmentsResolver.prototype, "deleteSegments", null);
DeleteSegmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Segments_1.Segments)
], DeleteSegmentsResolver);
exports.DeleteSegmentsResolver = DeleteSegmentsResolver;
