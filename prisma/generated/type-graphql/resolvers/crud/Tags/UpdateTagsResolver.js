"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTagsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateTagsArgs_1 = require("./args/UpdateTagsArgs");
const Tags_1 = require("../../../models/Tags");
const helpers_1 = require("../../../helpers");
let UpdateTagsResolver = class UpdateTagsResolver {
    async updateTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tags_1.Tags, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateTagsArgs_1.UpdateTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateTagsResolver.prototype, "updateTags", null);
UpdateTagsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tags_1.Tags)
], UpdateTagsResolver);
exports.UpdateTagsResolver = UpdateTagsResolver;
