"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSegmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateSegmentsArgs_1 = require("./args/UpdateSegmentsArgs");
const Segments_1 = require("../../../models/Segments");
const helpers_1 = require("../../../helpers");
let UpdateSegmentsResolver = class UpdateSegmentsResolver {
    async updateSegments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateSegmentsArgs_1.UpdateSegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateSegmentsResolver.prototype, "updateSegments", null);
UpdateSegmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Segments_1.Segments)
], UpdateSegmentsResolver);
exports.UpdateSegmentsResolver = UpdateSegmentsResolver;
