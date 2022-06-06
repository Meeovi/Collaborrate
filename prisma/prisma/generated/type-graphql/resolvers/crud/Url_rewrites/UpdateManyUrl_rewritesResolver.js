"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyUrl_rewritesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyUrl_rewritesArgs_1 = require("./args/UpdateManyUrl_rewritesArgs");
const Url_rewrites_1 = require("../../../models/Url_rewrites");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyUrl_rewritesResolver = class UpdateManyUrl_rewritesResolver {
    async updateManyUrl_rewrites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).url_rewrites.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyUrl_rewritesArgs_1.UpdateManyUrl_rewritesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyUrl_rewritesResolver.prototype, "updateManyUrl_rewrites", null);
UpdateManyUrl_rewritesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Url_rewrites_1.Url_rewrites)
], UpdateManyUrl_rewritesResolver);
exports.UpdateManyUrl_rewritesResolver = UpdateManyUrl_rewritesResolver;
